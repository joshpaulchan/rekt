import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions';

const Home = React.createClass({
  getInitialState: function() {
    return {
      title: "express",
      count: this.props.count
    }
  },
  
  componentWillReceiveProps(newProps) {
    console.log("[component] updating props");
    this.setState({
      count: newProps.count
    });
  },
  
  up: function() {
    this.props.dispatch(actions.add(1));
  },
  
  down: function() {
    this.props.dispatch(actions.add(-1));
  },
  
  render: function() {
    console.log("component upon render", this);
    console.log("state upon render", this.state);
    // console.log("dispatch", this.props.dispatch);
    return (
      <div>
        { /* <h1>{this.state.title || ''}</h1> */}
        <h2>{this.state.count || 0}</h2>
        <button onClick={this.up}>Click to increment</button>
        <button onClick={this.down}>Click to decrement</button>
      </div>
    );
  }
});

function mapStateToProps(reducerStates) {
  console.log("[connect] state", reducerStates.testReducer);
  return { count: reducerStates.testReducer.count }
}

module.exports = connect(mapStateToProps)(Home);
