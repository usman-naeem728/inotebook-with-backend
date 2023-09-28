import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const n1 =
        [
            {
                "_id": "6511b8a6666ff39f3234dd84",
                "user": "650dc748737274fa97d9baee",
                "tittle": "My first notes",
                "description": "InshaAllah Pakistan won this worldcu",
                "tag": "public",
                "date": "2023-09-25T16:43:18.147Z",
                "__v": 0
            },
            {
                "_id": "6511b8a6666ff39f3234dd84",
                "user": "650dc748737274fa97d9baee",
                "tittle": "My second notes",
                "description": "InshaAllah Pakistan won this worldcu",
                "tag": "public",
                "date": "2023-09-25T16:43:18.147Z",
                "__v": 0
            },
            {
                "_id": "6511b8a6666ff39f3234dd84",
                "user": "650dc748737274fa97d9baee",
                "tittle": "My third notes",
                "description": "InshaAllah Pakistan won this worldcu",
                "tag": "public",
                "date": "2023-09-25T16:43:18.147Z",
                "__v": 0
            },
            {
                "_id": "6511b8a6666ff39f3234dd84",
                "user": "650dc748737274fa97d9baee",
                "tittle": "My third notes",
                "description": "InshaAllah Pakistan won this worldcu",
                "tag": "public",
                "date": "2023-09-25T16:43:18.147Z",
                "__v": 0
            },
            {
                "_id": "6511b8a6666ff39f3234dd84",
                "user": "650dc748737274fa97d9baee",
                "tittle": "My third notes",
                "description": "InshaAllah Pakistan won this worldcu",
                "tag": "public",
                "date": "2023-09-25T16:43:18.147Z",
                "__v": 0
            }
        ]


    const [note, setNote] = useState(n1)


    return (
        <NoteContext.Provider value={{note, setNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

