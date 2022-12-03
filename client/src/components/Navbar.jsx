import React from 'react'
import {Link} from "react-router-dom"
import styles from "../styles/navbar.module.scss"
import logo from "../images/logo.png"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const {currentUser,Logout} = useContext(AuthContext)
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to={"/"}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"  />
        </div>
        </Link>
        <div className={styles.links}>
          <Link to="/?cat=art"><h6>ART</h6></Link>
          <Link to="/?cat=technology"><h6>TECHNOGOLY</h6></Link>
          <Link to="/?cat=food"><h6>FOOD</h6></Link>
          <Link to="/?cat=sport"><h6>SPORT</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser?<span onClick={Logout}>logout</span>:<Link className={styles.login} to="/login">Login</Link>}
          <span className={styles.write}>
            <Link to="/write">write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar