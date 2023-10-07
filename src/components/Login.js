import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const Login = () => {
    const context = useContext(noteContext)
    const { login, token, error } = context
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const loginSubmit = (e) => {
        e.preventDefault()
        login(credentials.email, credentials.password)
    }
    useEffect(() => {
        // console.log("check token from context", token)
        if (token !== "") {
            window.location.reload()
        }
    }, [token, error])
    return (
        <div>

            <form className='mt-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onchange} value={credentials.password} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={loginSubmit}>Login</button>
            </form>
            {error ?
                <div className="alert alert-danger my-5" role="alert">
                    {error}
                </div> : ""}
        </div>
    )
}

export default Login
