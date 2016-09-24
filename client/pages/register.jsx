import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { actions } from '../actions';

const Register = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
      error: false,
      errorMsg: ""
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
  
  isNotEmpty: function(field) {
    return !(field[i].trimLeft().length === 0)
  },
  
  validateFields: function() {
    // TODO: check if fields are empty
    // TODO: check if passwords match
  },  
  
  doRegister: function(e) {
    console.log("evt", e);
    e.preventDefault();
    var validity = this.validateFields();
    if (validity.true) {
      console.log("Logging in...");
    } else {
      this.setState({
        error: false,
        errorMsg: validity.error
      });
    }
    
  },
  
  render: function() {
    console.log("state upon render", this.state);
    var error;
    if (this.state.error) {
      error = <span className="error">{this.state.errorMsg}</span>
    }
    return (
      <div>
        <h1>Register</h1>
        { error }
        <form onSubmit={this.doRegister}>
          <label>
            Username
            <input type="text" value={this.state.username} onChange={this.onChange.bind(this, 'username')} />
          </label>
          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.onChange.bind(this, 'password')} />
          </label>
          <label>
            Confirm Password
            <input type="password" value={this.state.passwordRepeat} onChange={this.onChange.bind(this, 'passwordRepeat')} />
          </label>
          <button>Register</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
});

function mapStateToProps(reducerStates) {
  return {}
}

// module.exports = connect(mapStateToProps)(Login);
module.exports = Register;
