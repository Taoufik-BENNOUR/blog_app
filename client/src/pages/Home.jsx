import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import styles from "../styles/home.module.scss"
import axios from "axios"
const Home = () => {
const cat = useLocation().search
const [posts, setposts] = useState([])
const getText = (html)=>{
  const doc = new DOMParser().parseFromString(html,"text/html")
  return doc.body.textContent
}
useEffect(() => {
  const fetchData = async()=>{
    try {
      const response = await axios.get(`/posts/all${cat}`)
      setposts(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
}, [cat])

console.log(posts);
  return (
    <div className={styles.home}>
      <div className={styles.posts}>
        {posts.map((post,i)=>
          <div key={i} className={styles.post}>
            <div className={styles.image}>
              <img src={`../images/${post.image}`} alt={post.title} /> 
            </div>
            <div className={styles.content}>
              <Link to={`/post/${post.postId}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.description)}</p>
              <button>Read more...</button>
            </div>

          </div>
          
          )}
      </div>
    </div>
  )
}

export default Home