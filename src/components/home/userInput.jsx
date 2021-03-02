import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setuserInput } from '../../actions/userInputAction';
import { message } from 'antd';

import 'antd/dist/antd.css';

class UserInputSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfPlayers: 0,
      winPoint: 0
    };
  }

  componentDidMount() {
    localStorage.setItem('rank', 1);
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    if (this.state.noOfPlayers && this.state.winPoint) {
      this.props.setuserInput(this.state);
    } else {
      message.destroy();
      message.error('Please input no. of Players and win point', 2);
    }
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter no. of Players</label>
        <input type="number" name="noOfPlayers" onChange={this.handleOnChange} />
        <br />
        <label>Enter M points (winning point)</label>
        <input type="number" name="winPoint" onChange={this.handleOnChange} />
        <br />
        <button>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setuserInput
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInputSection));
