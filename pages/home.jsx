var React = require('react');

const Home = React.createClass({
  getInitialState: () => {
    return {
      title: "Express"
    }
  },
  render: () => {
    return (
      <h1>{this.state.title}</h1>
      <p>Welcome to {this.state.title}</p>
    );
  }
});

module.exports = Home;
