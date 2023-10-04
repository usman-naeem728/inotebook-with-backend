import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';



const YourNotes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes, editNotes } = context;
    const ref = useRef(null)
    const refclose = useRef(null)
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })
    useEffect(() => {
        getNotes()
    })

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleClick = (e) => {
        editNotes(note.id, note.etitle, note.edescription, note.etag)
        refclose.current.click()
        console.log(note)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h1>YOUR NOTES</h1>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">TITLE</label>
                                    <input type="text" className="form-control" id='etitle' name='etitle' value={note.etitle} onChange={onChange} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">DESCRIPTION</label>
                                    <input type="text" className="form-control" id='edescription' name='edescription' value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id='etag' name='etag' value={note.etag} onChange={onChange} />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                {notes.length === 0 &&
                    <div className='container alert alert-warning' >
                        No notes To show
                    </div>
                }
                {
                    notes.map((note) => {
                        return <NoteItem note={note} key={note._id} updateNote={updateNote} />
                    }

                    )
                }
            </div>
        </div>
    )
}

export default YourNotes
