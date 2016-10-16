import React from "react";
import fetch from "node-fetch";
import { Link } from "react-router";

const API_HOST = "http://localhost:3000/api"

const EmailConfirmPage = React.createClass({
  contextTypes: {
    isLoggedIn: React.PropTypes.func,
  },
  getInitialState: function() {
    return {
      success: false,
      attemptedConfirmation: false,
    }
  },
  componentDidMount: function() {
    var token = this.props.location.query.token;
    // Send AJAX call to server to attempt email validation
    fetch(`${API_HOST}/confirm-email?token=${token}`)
    .then((res) => res.json())
    .then((res) => {
      console.log("data", res);
      if (!res.ok) throw new Error(res.error);
      this.setState({
        success: true,
        attemptedConfirmation: true
      });
    })
    .catch((error) => {
      console.error("error", error);
      // Don't display the error bc well security threats
      this.setState({
        success: false,
        attemptedConfirmation: true
      });
    });
  },
  render: function() {
    var next;
    var headerMessage;
    var bodyMessage;
    
    // Show nav if logged in
    if (this.props.loggedIn === true) {
      next = <Link to="/">Go back to home</Link>
    } else {
      next = <Link to="/login">Go login</Link>
    }
    
    // show header and body message
    if (this.props.success === true) {
      headerMessage = "Email Confirmation Success";
      bodyMessage = "Thanks for registering your email!";
    } else {
      headerMessage = "Email Confirmation Error";
      bodyMessage = "There was an error registering your email 😕.";
    }
    
    if (this.state.attemptedConfirmation === true) {
      return (
        <div>
          <h1>{ headerMessage }</h1>
          <p>{ bodyMessage }</p>
          { next }
        </div>
      );
    } else {
      return (<div><h1>Email Confirmation...</h1></div>);
    }
  }
});

module.exports = EmailConfirmPage;
