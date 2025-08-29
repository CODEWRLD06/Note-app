

function NoteList({ notes, onDeleteNote, onEditNote }){
    return(
        <div className="note-list-container">
            <ol>
                {notes.map((note) => 
                    <li className="list" key={note.id}>
                        <h3 className="title">{note.title}</h3>
                        <p className="content">{note.content}</p>
                        <button className="editBtn" onClick={() => onEditNote(note)}>Edit</button>
                        <button className="deleteBtn" onClick={() => onDeleteNote(note.id)}>Delete</button>
                        
                    </li>
                )}
            </ol>
        </div>
    )
}

export default NoteList;


