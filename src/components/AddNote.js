import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h3>ADD YOUR NOTE:</h3>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">TITLE</label>
                    <input type="text" className="form-control" id='title' name='title' onChange={onChange} value={note.title} />
                    {note.title.length<3 && !note.title.length==0 && <a style={{color:"red"}}>MUST BE ATLEAST 3 CHARACTERS</a> }
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">DESCRIPTION</label>
                    <input type="text" className="form-control" id='description' name='description' onChange={onChange} value={note.description} />
                    {note.description.length<5 && !note.description.length==0 && <a style={{color:"red"}}>MUST BE ATLEAST 5 CHARACTERS</a> }
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">tag</label>
                    <input type="text" className="form-control" id='tag' name='tag' onChange={onChange} value={note.tag} />
                </div>
                <button disabled={note.title.length<3 || note.description.length<5 } type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    )
}

export default AddNote;

