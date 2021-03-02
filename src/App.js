import React, { Component, Suspense, lazy } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './store';
import './resource/css/game.css';

import NotFound from './resource/utils/NotFound';
import CustomLoader from './resource/utils/Loader';

const HomeSection = lazy(() => import('./components/home'));
const GameSection = lazy(() => import('./components/game'));

export const { persistor, store } = configureStore();

function WaitingComponent(Component) {
  return props => (
    <div>
      <Suspense fallback={<CustomLoader />}>
        <Component {...props} />
      </Suspense>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Suspense fallback={<CustomLoader />}>
              <Switch>
                <Route exact path="/" component={WaitingComponent(HomeSection)} />
                <Route exact path="/play-game" component={WaitingComponent(GameSection)} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
