import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import { useEffect } from 'react';


const YourNotes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes } = context;
    
    useEffect(()=>{
        getNotes()
    },[])

    return (
        <div>
            <h1>YOUR NOTES</h1>
            <div className='row my-3'>
            {
                notes.map((note) => {
                    return <NoteItem  note={note} />
                }
                
                )
            }
            </div>
        </div>
    )
}

export default YourNotes
