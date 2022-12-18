import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(title, note, color, bgColor) {
    setNotes([...notes, { title, note, color, bgColor }]);
  }

  function editNote(index, newTitle, newNote, newColor, newBgColor) {
    setNotes(notes.map((note, i) => i === index ? { title: newTitle, note: newNote, color: newColor, bgColor: newBgColor } : note));
  }

  function deleteNote(index) {
    setNotes(notes.filter((note, i) => i !== index));
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index} style={{ color: note.color, backgroundColor: note.bgColor }}>
            <h2>{note.title}</h2>
            {note.note}
            <button onClick={() => deleteNote(index)}>Delete</button>
            <button onClick={() => editNote(index, prompt('Enter new title:'), prompt('Enter new note:'), prompt('Enter new color:'), prompt('Enter new background color:'))}>Edit</button>
          </li>
        ))}
      </ul>
      
      <form onSubmit={e => {
        e.preventDefault();
        addNote(e.target.title.value, e.target.note.value, e.target.color.value, e.target.bgColor.value);
        e.target.title.value = '';
        e.target.note.value = '';
        e.target.color.value = '';
        e.target.bgColor.value = '';
      }}>
        <input name="title" placeholder="Enter note title" />
        <input name="note" placeholder="Enter note text" />
        <input name="color" placeholder="Enter note color" />
        <input name="bgColor" placeholder="Enter note background color" />
        <button>Add Note</button>
      </form>
    </div>
  );
}

export default App;