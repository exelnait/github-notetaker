import React from 'react';

class NotesList extends React.Component{
    render() {
        var notes = this.props.notes.map((noteObj, index) => {
             return <li className="list-group-item" key={index}>{noteObj.note}</li>
        });
        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
}

export default NotesList;