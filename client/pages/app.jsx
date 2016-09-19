import React from "react";

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func,
    state: React.PropTypes.object
  },
  getInitialState: function() {
    return {}
  },
  render: function() {
    return (
      <div>
        <h1>Welcome!</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
