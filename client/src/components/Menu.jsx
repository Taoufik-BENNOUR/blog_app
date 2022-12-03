import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "../styles/menu.module.scss"

const Menu = ({postsCat}) => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await axios.get(`/posts/all/?cat=${postsCat}`)
        setposts(response.data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [postsCat])
  return (
    <div className={styles.menu}>
        <h1>Other posts you may like</h1>
        {posts.map((post,i)=>(
            <div className={styles.post} key={i}>
               <img src={post.image} alt="" />     
                <h4>{post.title}</h4>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu