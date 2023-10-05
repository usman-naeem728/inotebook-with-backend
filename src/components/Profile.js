import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import moment from 'moment/moment'

const Profile = () => {
    const context = useContext(noteContext)
    const { getUser, userData } = context
    useEffect(()=>{
        getUser()
    })

    return (
        <div className='container d-flex justify-content-center text-center'>
        <div className='row mt-5'>
            <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item fw-bold">NAME:</li>
                    <li className="list-group-item fw-bold">EMAIL:</li>
                    <li className="list-group-item fw-bold">Account Created on:</li>
                </ul>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item ">{userData.name}</li>
                    <li className="list-group-item ">{userData.email}</li>
                    <li className="list-group-item">{moment(userData.date).format('MMMM Do YYYY, hh:mm a')}</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Profile
