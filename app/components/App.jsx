var React = require('react');
var uuid = require('uuid');
var Notes = require('./Notes');

var App = React.createClass({
  getInitialState: function () {
    return {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
  },

  newNote: function () {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  },

  deleteNote: function(id, e) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  },

  render: function () {
    var {notes} = this.state;

    return (
      <div>
        <button onClick={this.newNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote}/>
      </div>
    );
  }
});

module.exports = App;
