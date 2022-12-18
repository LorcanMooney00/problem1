import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(title, note) {
    setNotes([...notes, { title, note}]);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h2>{note.title}</h2>
            {note.note}
          </li>
        ))}
      </ul>
      
      <form onSubmit={e => {
        e.preventDefault();
        addNote(e.target.title.value, e.target.note.value);
        e.target.title.value = '';
        e.target.note.value = '';
      }}>
        <input name="title" placeholder="Enter note title" />
        <input name="note" placeholder="Enter note text" />
        <button>Add Note</button>
      </form>
    </div>
  );
}

export default App;