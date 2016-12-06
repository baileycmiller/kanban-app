var React = require('react');
var Note = require('./Note');

var Notes = React.createClass({
  render: function () {
    var onDelete = this.props.onDelete;

    return (
      <ul>
        {this.props.notes.map(
          function(note) {
            return (
              <li key={note.id}>
                <Note
                  onTheDelete={onDelete.bind(null, note.id)}
                  task={note.task} />
              </li>
            );
          }
        )}
      </ul>
    );
  }
});

module.exports = Notes;
