import React from 'react'
import {Link} from "react-router-dom"
import styles from "../styles/navbar.module.scss"
import logo from "../images/logo.png"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"  />
        </div>
        <div className={styles.links}>
          <Link to="/?car=art"><h6>ART</h6></Link>
          <Link to="/?car=technology"><h6>TECHNOGOLY</h6></Link>
          <Link to="/?car=food"><h6>FOOD</h6></Link>
          <Link to="/?car=sport"><h6>SPORT</h6></Link>
          <span>Name</span>
          <span>logout</span>
          <span className={styles.write}>
            <Link to="/write">write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar