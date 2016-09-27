import React from "react";
import { connect } from "react-redux";
import { actions } from "../actions";
import _ from "underscore";

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  
  childContextTypes: {
    getUser: React.PropTypes.func,
    isLoggedIn: React.PropTypes.func,
    logout: React.PropTypes.func,
  },
  
  getChildContext: function() {
    return {
      getUser: this.getUser,
      isLoggedIn: this.isLoggedIn,
      logout: this.logout,
    }
  },
  
  getInitialState: function() {
    return _.pick(this.props, ['user']);
  },
  
  // `getUser`
  // 
  // This function gets the currently logged-in user to the application, if any
  // 
  // @params: null
  // @returns: user<Object>: the currently logged-in user or null
  getUser: function() {
    return this.state.user;
  },
  
  // `isLoggedIn`
  // 
  // This function returns true if a user is logged in to the application, false
  // if otherwise. It checks to see if there is a user object in the global
  // state.
  // 
  // @params: user<Object>: the user object that has just logged in
  // @returns: null
  isLoggedIn: function() {
    return this.state.user != null;
  },
  
  // `logout`
  // 
  // This function logs the user out and unsets the global user.
  // 
  // @params: null
  // @returns: null
  logout: function() {
    this.props.dispatch(actions.unsetUser());
  },
  
  componentWillReceiveProps: function(newProps) {
    const newState = _.pick(newProps, ["user"]);
    this.setState(newState);
  },
  
  render: function() {
    // FIXME: remove this
    var authenticatedPanel;
    if (this.isLoggedIn() === true) {
      authenticatedPanel = (
        <div>
          <span>Hello, {this.state.user.username}!</span>
          <button onClick={this.logout}>Log out</button>
        </div>
      );
    }
    return (
      <div>
        { authenticatedPanel }
        { this.props.children }
      </div>
    );
  }
});

function mapStateToProps(states) {
  return states.app
}

module.exports = connect(mapStateToProps)(App);
