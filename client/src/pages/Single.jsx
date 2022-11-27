import React from 'react'
import styles from "../styles/single.module.scss"
import { Link } from 'react-router-dom'
import profileImg from "../images/profile.jpg"
import edit from "../images/edit.png";
import remove from "../images/remove.png"
import Menu from '../components/Menu';
const Single = () => {
  return (
    <div className={styles.single}>
      <div className={styles.content}>
      <img src={profileImg} alt='' />
      <div className={styles.user}>
        <img src={profileImg} alt='' />
        <div className={styles.info}>
          <span>Name</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt explicabo quos, praesentium beatae nobis magnam vero, sapiente neque earum recusandae tempora quasi officiis! Error eaque consectetur ut accusantium perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.edit}>
        <Link to="/write?edit=">
          <img src={edit} alt="editButton" />
        </Link>
          <img src={remove} alt="removeButton" />
        </div>
      </div>
      </div>
      <Menu />
    </div>
  )
}

export default Single