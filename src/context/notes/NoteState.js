import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const n1 = []

    const [notes, setNotes] = useState(n1)

    //fetch all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGM3NDg3MzcyNzRmYTk3ZDliYWVlIn0sImlhdCI6MTY5NTU3MjY5NH0.Vp5vOYPcl3DXkQVPgsfqMPRmrEoQnF7nBCbCE6RBf44"
            },
        });
        const json = await response.json()
        setNotes(json)
    }
        
    // add notes
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGM3NDg3MzcyNzRmYTk3ZDliYWVlIn0sImlhdCI6MTY5NTU3MjY5NH0.Vp5vOYPcl3DXkQVPgsfqMPRmrEoQnF7nBCbCE6RBf44"
            },
            body: JSON.stringify({title,description,tag}),
        });
        // const json =  response.json();

        const note = {
            "_id": "6511b8a6666ff39f3234dd84",
            "user": "650dc748737274fa97d9baee",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-25T16:43:18.147Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // edit notes
    const editNotes = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGM3NDg3MzcyNzRmYTk3ZDliYWVlIn0sImlhdCI6MTY5NTU3MjY5NH0.Vp5vOYPcl3DXkQVPgsfqMPRmrEoQnF7nBCbCE6RBf44"
            },
            body: JSON.stringify({title,description,tag}),
        });
        const json =  response.json();
        //logic for edit client side
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tag = tag
            }
        }
    }

        // delete notes
    const deleteNote = async (id) => {
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGM3NDg3MzcyNzRmYTk3ZDliYWVlIn0sImlhdCI6MTY5NTU3MjY5NH0.Vp5vOYPcl3DXkQVPgsfqMPRmrEoQnF7nBCbCE6RBf44"
            },
        });
        console.log(response.json)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote,getNotes, editNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

