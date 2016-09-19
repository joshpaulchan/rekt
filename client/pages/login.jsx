import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { actions } from '../actions';

const Login = React.createClass({
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
    var newState = {};
    newState[name] = evt.target.value;
    this.setState(newState);
  },
  
  doLogin: function(e) {
    console.log("evt", e);
    e.preventDefault();
    console.log("Logging in...");
    
    // this.props.dispatch
  },
  
  render: function() {
    console.log("state upon render", this.state);
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.doLogin}>
          <label>
            Username
            <input type="text" value={this.state.username} onChange={this.onChange.bind(this, 'username')} />
          </label>
          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.onChange.bind(this, 'password')} />
          </label>
          <button>Login</button>
        </form>
        <Link to='/register'>Register</Link>
      </div>
    );
  }
});

function mapStateToProps(reducerStates) {
  return {}
}

// module.exports = connect(mapStateToProps)(Login);
module.exports = Login;
