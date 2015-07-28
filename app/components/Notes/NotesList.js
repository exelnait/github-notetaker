import React from 'react';

var NotesList = React.createClass({
    render: function () {
        var notes = this.props.notes.map(function (noteObj, index) {
             return <li className="list-group-item" key={index}>{noteObj.note}</li>
        });
        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
});

export default NotesList;