import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions';

const Home = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: ""
    }
  },
  
  componentWillReceiveProps(newProps) {
    console.log("[component] updating props");
    this.setState({
      count: newProps.count
    });
  },
  
  onChange: function(name, evt) {
    var newState = {}
    newState[name] = evt.target.value;
    this.setState(newState);
  },
  
  doLogin: function(evt) {
    evt.preventDefault();
    console.log("Logging in...");
    
    // this.props.dispatch
  },
  
  render: function() {
    // console.log("component upon render", this);
    // console.log("state upon render", this.state);
    // console.log("dispatch", this.props.dispatch);
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.doLogin}>
          <label>
            Username
            <input type="text" value={this.state.username} onChange={this.onChange.bind(this, 'username')} />
          </label>
          <label>
            Username
            <input type="password" value={this.state.password} onChange={this.onChange.bind(this, 'password')} />
          </label>
          <button>Login</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(reducerStates) {
  return {}
}

module.exports = connect(mapStateToProps)(Home);
