import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../styles/login.module.scss"
import axios from "axios"
const Register = () => {
  const navigate = useNavigate()
  const [inputs, setinputs] = useState({
    username:"",
    email:"",
    password:""
  })
  const [error, seterror] = useState(null)
  const handleChange = (e) =>{
    setinputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      await axios.post("/auth/register",inputs)
      navigate("/login")

    } catch (error) {
      seterror(error.response.data);
    }
  }
  return (
    <div className={styles.login}>
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="username" name="username" onChange={(e)=>handleChange(e)} required/>
      <input type="email" placeholder="email" name="email" onChange={handleChange} required />
      <input type="password" placeholder="password"  name="password" onChange={handleChange} required/>
      <button onClick={(e)=>handleSubmit(e)}>Register</button>
      {error && <p>{error}</p>}
      <span>Do have an account? <Link to={"/login"}>Login</Link></span>
    </form>
  </div>
  )
}

export default Register