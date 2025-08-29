import React, { useState } from 'react';

function NoteForm({ onAddNote }){
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");

    function handleTitleChange(event){
        setNoteTitle(event.target.value);
    }

    function handleContentChange(event){
        setNoteContent(event.target.value);
    }

    function addNote(){
        if(noteTitle.trim() === "" && noteContent.trim() === ""){
            return;
        }


        const newNote = {
            id: Date.now(),
            title: noteTitle,
            content: noteContent,
        };

        onAddNote(newNote)


        setNoteTitle("");
        setNoteContent("");
        
    }

    return(
        <div className='input-field-container'>
            <input className='title-input' type="text" onChange={handleTitleChange} placeholder='Enter Title' value={noteTitle}/><br />
            <textarea className='content-text-area' value={noteContent} onChange={handleContentChange} placeholder='Content'></textarea><br />
            <button className='addBtn' onClick={addNote}>Add Note</button>
        </div>
    )
}

export default NoteForm;