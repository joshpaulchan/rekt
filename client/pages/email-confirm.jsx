import React from "react";
import { Link } from "react-router";

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    isLoggedIn: React.PropTypes.func,
  },
  getInitialState: function() {
    return {
      loggedIn : false
    }
  },
  render: function() {
    var next;
    if (this.context.isLoggedIn() === true) {
      next = <Link to="/">Go back to home</Link>
    } else {
      next = <Link to="/login">Go login</Link>
    }
    return (
      <div>
        <h1>Congrats on registering your email!</h1>
        { next }
      </div>
    );
  }
});

module.exports = App;
