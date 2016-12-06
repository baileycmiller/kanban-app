var React = require('react');

var Note = React.createClass({

  render: function() {
    return (
      <div>
        <span>{this.props.task}</span>
        <button onClick={this.props.onTheDelete}>x</button>
      </div>
    );
  }
});

module.exports = Note;
