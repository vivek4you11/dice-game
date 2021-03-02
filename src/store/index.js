import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

export default function configureStore() {
  const initialState = {};
  const middleware = [thunk];
  const persistConfig = {
    key: '__great__learning__',
    storage,
    whitelist: ['auth']
  };

  const reducer = persistCombineReducers(persistConfig, rootReducer);

  const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware)));

  const persistor = persistStore(store);

  return { persistor, store };
}
