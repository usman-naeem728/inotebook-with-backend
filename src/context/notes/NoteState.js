import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

    const s1 = {
        "name": "Usman",
        "class":"5b" 
    }

    const [state, setState] = useState(s1)

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "hassan",
                "class": "10c"
            })
        }, 1000);
    }
    return(
        <NoteContext.Provider value={{state:state , update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

