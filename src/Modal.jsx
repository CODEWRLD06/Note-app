import React, { useState } from 'react'

function Modal({note, onSave, onCancel}){

    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);



    function handleEditedTitleChange(event){
        setEditedTitle(event.target.value)
    }


    function handleEditedContentChange(event){
        setEditedContent(event.target.value)
    }

    function handleSaveClick(){
        const updatedNote = {...note, title: editedTitle, content: editedContent}
        onSave(updatedNote)
    }

    return(
        <div className='overlay'>
            <div className='modal'>
                <input type="text" value={editedTitle} onChange={handleEditedTitleChange}/>
                <textarea value={editedContent} onChange={handleEditedContentChange}></textarea>
                <button className='save-btn' onClick={handleSaveClick}>Save</button>
                <button className='cancel-btn' onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )

}


export default Modal;