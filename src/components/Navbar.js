import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [token, setToken] = useState(false)
    const navigate = useNavigate()
    let location = useLocation();

    const logout = () => {
        localStorage.removeItem("token")
        navigate('/')
        window.location.reload()
    }

    useEffect(() => {
        // finding token 
        let i;
        for (i = 0; i < localStorage.length; i++) {
            let findingToken = localStorage.key(i);
            if (findingToken === "token") {
                setToken(true)
            }
        }
    },[logout])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Notebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {token ?
                            <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/addnote" ? "active" : ""}`} aria-current="page" to="/addnote">Add Note</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/yournotes" ? "active" : ""}`} aria-current="page" to="/yournotes">Your Notes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`} aria-current="page" to="/profile">Profile</Link>
                                    </li>
                                </ul>
                                <Link className="btn btn-outline-success mx-1" role='button' type="submit" onClick={logout}>logout</Link>
                            </>
                            : <>
                                <Link className="btn btn-outline-success mx-1" to={'/'} role='button' type="submit">Login</Link>
                                <Link className="btn btn-outline-success mx-1" to={'/signup'} role='button' type="submit">Signup</Link>
                            </>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
