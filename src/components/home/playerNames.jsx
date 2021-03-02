import React, { Component, Fragment } from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

class PlayerNameSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersDetails: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = { ...prevState };

    if (Object.keys(nextProps.user.allPlayers).length > 0) {
      newState.playersDetails = nextProps.user.allPlayers;
    }

    return newState;
  }

  render() {
    return (
      <Row>
        Player Names (system assigned)
        <Row>
          <ul>
            {this.state.playersDetails.map(item => {
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

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerNameSection));
