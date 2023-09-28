import React from 'react'

const NoteItem = (props) => {
    return (
        <div className='col-md-3 mx-4 my-3' >
            <div className="card" style={{"width" : "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="card-link">Edit</a>
                    <a href="#" className="card-link">Delete</a>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;
