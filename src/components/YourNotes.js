import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';


const YourNotes = () => {
    const context = useContext(noteContext)
    const { notes } = context;
    return (
        <div>
            <h1>YOUR NOTES</h1>
            <div className='row my-3'>
            {
                notes.map((notes) => {
                    return <NoteItem title={notes.tittle} description={notes.description} tag={notes.tag} />
                }
                
                )
            }
            </div>
        </div>
    )
}

export default YourNotes
