import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    
    const host = "http://localhost:5000"
    const n1 = []
    const [notes, setNotes] = useState(n1)
    const [token,setToken] = useState("")
    const [userData,setUserData] = useState({})
    //signup endponit
    const signup = async (name,email,password) => {
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({name, email, password}),
        });
        const json = await response.json()
        console.log("success",json)
        localStorage.setItem("token",json.authToken)
        setToken(json.authToken)
    }
    //login endpoint
    const login = async (email,password) => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({email, password}),
        });
        const json = await response.json()
        console.log("success",json)
        localStorage.setItem("token",json.authToken)
        setToken(json.authToken)
    }
    // get user personal data
    const getUser = async () => {
        const response = await fetch(`${host}/api/auth/getuser/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json()
        setUserData(json)
    } 
    //fetch all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
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
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag}),
        });
        const note =  response.json();
        setNotes(notes.concat(note))
    }

    // edit notes
    const editNotes = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag}),
        });
        const json =  response.json();
        console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes))
        //logic for edit client side
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title
                newNotes[index].description = description
                newNotes[index].tag = tag
            }
            break;
        }
        setNotes(newNotes)
    }

        // delete notes
    const deleteNote = async (id) => {
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        console.log(response.json)
        const newNotes2 = notes.filter((notes) => { return notes._id !== id })
        setNotes(newNotes2)
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote,getNotes, editNotes, login,signup,getUser,userData, token }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

