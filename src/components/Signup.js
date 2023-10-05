import React , {useContext, useState, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const context = useContext(noteContext)
  const { signup, token } = context  
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({name:"", email: "", password: "" })
  const onchange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const signuphandle = (e)=>{
      e.preventDefault()
      signup(credentials.name, credentials.email, credentials.password)
  }
  useEffect(()=>{
      console.log("check token from context",token)
      if(token!==""){
        navigate("/")
          window.location.reload()
      }
  },[token])
  return (
    <div>
      <form >
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="name" className="form-control" id="name" aria-describedby="emailHelp" name="name" value={credentials.name} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onchange} value={credentials.password} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={signuphandle}>Signup</button>
      </form>
    </div>
  )
}

export default Signup
