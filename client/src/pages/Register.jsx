import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/login.module.scss"

const Register = () => {
  return (
    <div className={styles.login}>
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="username" />
      <input type="email" placeholder="email" required />
      <input type="password" placeholder="password" />
      <button>Login</button>
      <p>email must</p>
      <span>Do have an account? <Link to={"/login"}>Login</Link></span>
    </form>
  </div>
  )
}

export default Register