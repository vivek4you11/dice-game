import React, { Component } from 'react';
import { Row, Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setGameStatus } from '../../actions/userInputAction';

import 'antd/dist/antd.css';

class StartGameSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputDetails: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = { ...prevState };

    if (Object.keys(nextProps.user.userInputDetails).length > 0) {
      newState.userInputDetails = nextProps.user.userInputDetails;
    }

    return newState;
  }

  handleGameStart = () => {
    this.props.setGameStatus(true);
    this.props.history.push('/play-game');
  };

  render() {
    return (
      <Row>
        <Button onClick={this.handleGameStart} disabled={this.state.userInputDetails.noOfPlayers === undefined} type="primary">
          START GAME
        </Button>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setGameStatus
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartGameSection));
