import React, { Component, Fragment } from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setPlayerGamingOrder } from '../../actions/userInputAction';

import 'antd/dist/antd.css';

class PlayerGameOrderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersDetails: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = { ...prevState };

    if (nextProps.user.allPlayers.length !== prevState.playersDetails.length) {
      newState.playersDetails = nextProps.user.allPlayers;
    }

    return newState;
  }

  componentDidMount() {
    this.props.setPlayerGamingOrder(this.shuffle(this.state.playersDetails));
  }

  shuffle = sourceArray => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  };

  render() {
    return (
      <Row>
        Players Gaming Order (system assigned)
        <Row>
          <ul>
            {this.state.playersDetails.length > 0 &&
              this.shuffle(this.state.playersDetails).map(item => {
                return (
                  <li key={item.key}>
                    <Fragment>{item.playerName}</Fragment>
                  </li>
                );
              })}
          </ul>
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setPlayerGamingOrder
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerGameOrderSection));
