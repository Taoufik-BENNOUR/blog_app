import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../styles/login.module.scss"
import axios from "axios"
const Login = () => {
  const [inputs, setinputs] = useState({
    username:"",
    password:""
  })
  const [error, seterror] = useState(null)
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setinputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      await axios.post("/auth/login",inputs)
      navigate("/")
    } catch (error) {
      seterror(error.response.data);
    }
  }
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" name="username" onChange={handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit} >Login</button>
        {error&& <p>{error}</p>}
        <span>Need an account? <Link to={"/register"}>Register</Link></span>
      </form>
    </div>
  )
}

export default Login