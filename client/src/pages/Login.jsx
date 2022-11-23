import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/login.module.scss"

const Login = () => {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p>Wrong password</p>
        <span>Need an account? <Link to={"/register"}>Register</Link></span>
      </form>
    </div>
  )
}

export default Login