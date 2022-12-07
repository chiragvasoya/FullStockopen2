import Note from './components/Note';
import { useState } from 'react';


const App = () => {
  
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject));
    setNewNote(" ");
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }
  

  return (
      <div>
        <ul>
          {
            notesToShow.map(note => <Note key={note.id} note={note} /> )
          }
        </ul>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? 'Important' : 'All'}</button>
        <form onSubmit={addNote} >
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit" >Submit</button>
        </form>
      </div> 
  )
}

export default App;
