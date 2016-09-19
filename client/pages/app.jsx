import React from "react";

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    state: React.PropTypes.object
  },
  getInitialState: function() {
    return {}
  },
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
