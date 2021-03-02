import React, { Component } from 'react';
import { Button, Row, Col, Table, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setGameStatus, addPoints } from '../../actions/userInputAction';

import 'antd/dist/antd.css';

class GameSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceResult: 0,
      showDiceResult: false,
      currentMove: 0,
      playersGamingOrder: this.props.user.allPlayers,
      showScoreBoard: false,
      columns: [
        {
          title: 'Key',
          dataIndex: 'key',
          key: 'key',
          width: '10%'
        },
        {
          title: 'Player Name',
          dataIndex: 'playerName',
          key: 'playerName'
        },
        {
          title: 'Score',
          dataIndex: 'score',
          key: 'score',
          render: item => {
            return <div className={item >= Number(this.props.user.userInputDetails.winPoint) ? 'moment-text' : 'normal-text'}>{item}</div>;
          },
          width: '10%'
        },
        {
          title: 'Rank',
          dataIndex: 'rank',
          key: 'rank',
          render: item => {
            return item || null;
          },
          width: '10%'
        }
      ]
    };
  }

  componentDidMount() {
    if (!this.props.user.gameStatus) {
      this.props.history.push('/');
    }
  }

  handleRollClick = () => {
    let diceResult = Math.floor(Math.random() * 7);

    if (this.state.playersGamingOrder[this.state.currentMove === this.state.playersGamingOrder.length ? 0 : this.state.currentMove].skipMove) {
      message.destroy();
      message.info('Since you rolled ‘1’ twice consecutively, your points will not be added for this turn.', 3);
      this.setState(
        {
          showScoreBoard: true,
          diceResult: diceResult,
          showDiceResult: true,
          currentMove: this.state.currentMove === this.state.playersGamingOrder.length ? 1 : this.state.currentMove + 1
        },
        () => {
          this.props.addPoints({
            points: 0,
            user: this.state.playersGamingOrder[this.state.currentMove === 0 ? 0 : this.state.currentMove - 1].playerName,
            lastMove: this.state.diceResult,
            skipMove: false
          });
        }
      );
    } else if (
      diceResult === 1 &&
      this.state.playersGamingOrder[this.state.currentMove === this.state.playersGamingOrder.length ? 0 : this.state.currentMove].lastMove === 1
    ) {
      message.destroy();
      message.info(
        `Dear ${
          this.state.playersGamingOrder[this.state.currentMove === this.state.playersGamingOrder.length ? 0 : this.state.currentMove].playerName
        }, you rolled ‘1’ twice consecutively.`,
        3
      );
      this.setState(
        {
          showScoreBoard: true,
          diceResult: diceResult,
          showDiceResult: true,
          currentMove: this.state.currentMove === this.state.playersGamingOrder.length ? 1 : this.state.currentMove + 1
        },
        () => {
          this.props.addPoints({
            points: this.state.diceResult,
            user: this.state.playersGamingOrder[this.state.currentMove === 0 ? 0 : this.state.currentMove - 1].playerName,
            lastMove: this.state.diceResult,
            skipMove: true
          });
        }
      );
    } else {
      this.setState(
        {
          showScoreBoard: true,
          diceResult: diceResult,
          showDiceResult: true,
          currentMove: this.state.currentMove === this.state.playersGamingOrder.length ? 1 : this.state.currentMove + 1
        },
        () => {
          this.props.addPoints({
            points: this.state.diceResult,
            user: this.state.playersGamingOrder[this.state.currentMove === 0 ? 0 : this.state.currentMove - 1].playerName,
            lastMove: this.state.diceResult,
            skipMove: false
          });
        }
      );
    }
  };

  render() {
    return (
      <Row>
        <h1 style={{ textAlign: 'center', margin: '2rem' }}>Welcome to dice game!</h1>
        <Row>
          <Col md={12} lg={12}>
            <Row>
              <h2 style={{ textAlign: 'center' }}>
                {this.state.playersGamingOrder[this.state.currentMove === this.state.playersGamingOrder.length ? 0 : this.state.currentMove]?.playerName}, its
                your turn (click to roll the dice)
              </h2>
              <Row style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button onClick={this.handleRollClick} type="primary">
                  Click to roll
                </Button>
                {this.state.showDiceResult && (
                  <Row style={{ textAlign: 'center', marginTop: '2rem' }}>
                    Heyy, you got <h2 style={{ color: '#e66f66' }}>{this.state.diceResult}</h2>
                  </Row>
                )}
              </Row>
            </Row>
          </Col>
          <Col md={12} lg={12}>
            <Row>
              <h2 style={{ textAlign: 'center' }}>Scoreboard</h2>
            </Row>
            {this.state.showScoreBoard ? (
              <Table dataSource={this.state.playersGamingOrder} columns={this.state.columns} pagination={false} />
            ) : (
              <Row style={{ marginTop: '2rem', textAlign: 'center' }}>Start playing the game to see the scoreboard</Row>
            )}
          </Col>
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setGameStatus,
  addPoints
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameSection));
