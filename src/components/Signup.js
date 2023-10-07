import React, { useContext, useState, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const context = useContext(noteContext)
  const { signup, token, error } = context
  const navigate = useNavigate()
  // const [userImg,setUserimg] = useState({file:""})
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const signuphandle = (e) => {
    e.preventDefault()
    signup(credentials.name, credentials.email, credentials.password)
  }
//-------------convert image to base64----------------
  // function converttobase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader()
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result)
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error)
  //     }
  //   })
  // }
  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0]
  //   const base64 = await converttobase64(file)
  //   console.log(base64)
  //   setUserimg({...userImg, file: base64})
  // }
  useEffect(() => {

    if (token !== "" ) {
      window.location.reload()
      navigate("/")
    }
  }, [token,error])
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
           <a style={{color:"red"}}>{(error? error : "")}</a> 
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onchange} value={credentials.password} />
        {credentials.password.length<5 && !credentials.password.length==0 && <a style={{color:"red"}}>MUST BE ATLEAST 5 CHARACTERS</a> }
        </div>
        <button disabled={credentials.password.length<5 || credentials.email.length==0 || credentials.name.length==0} type="submit" className="btn btn-primary" onClick={signuphandle}>Signup</button>
      </form>
    </div>
  )
}

export default Signup
