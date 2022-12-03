import React, { useEffect, useState } from 'react'
import styles from "../styles/single.module.scss"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import edit from "../images/edit.png";
import remove from "../images/remove.png"
import Menu from '../components/Menu';
import axios from 'axios';
import moment from "moment"
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
const Single = () => {
  const [post, setpost] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const id = location.pathname.split("/")[2]
  const {currentUser} = useContext(AuthContext)
  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await axios.get(`/posts/${id}`)
        setpost(response.data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [id])

  const handleDelete = async ()=>{
    try {
 await axios.delete(`/posts/delete/${id}`)
 navigate("/")

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.single}>
      <div className={styles.content}>
      <img src={post.image} alt='' />
      <div className={styles.user}>
  {post.userImg&&<img src={post.userImg} alt='userImg' />}     
  <img src={"https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"} alt='userImg' />     
     <div className={styles.info}>
          <span>{post?.username}</span>
          <p>Posted {moment(post.date).fromNow()}</p>
        </div>
        {currentUser?.username ===post?.username &&<div className={styles.edit}>
        <Link to={`/write?edit=${post?.postId}`} state={post}>
          <img src={edit} alt="editButton" />
        </Link>
          <img onClick={handleDelete} src={remove} alt="removeButton" />
        </div>}
      </div> 
      <h1>{post.title}</h1>
       {post.description}
      </div>
      <Menu postsCat={post.cat} />
    </div>
  )
}

export default Single