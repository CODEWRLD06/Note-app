import React, { useState } from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList';
import Modal from './Modal';

function App() {
    const [notes, setNotes] = useState([]);

    const [editingNote, setEditingNote] = useState(null);


    function handleAddNote(newNote){
      setNotes(c => [...c, newNote])
    }

    function handleDeleteNote(id){
      const newNote = notes.filter(note => note.id !== id);
      setNotes(newNote) 
    }

    function handleSaveEdit(updatedNote) {
      setNotes(notes.map(n => n.id === updatedNote.id ? updatedNote : n));
      setEditingNote(null);
    }

    function handleCancelEdit(){
      setEditingNote(null);
    }

    function handleEditNote(note){
      setEditingNote(note)
    }

  return (
          <>
            <div className='header'><h1>NOTE APP</h1></div>
            <div className='container'>
              <NoteForm onAddNote={handleAddNote}/>
              <NoteList notes={notes} onDeleteNote={handleDeleteNote} onEditNote={handleEditNote}/>
              {editingNote && (
              <Modal
                note={editingNote}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
              />
              )}
            </div>
          </>
  )
}

export default App
