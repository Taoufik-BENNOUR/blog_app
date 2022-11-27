import React, { useState } from 'react'
import {Link} from "react-router-dom"
import styles from "../styles/home.module.scss"
const Home = () => {

  const posts = [{albumId: 1, id: 1, title: 'accusamus beatae ad facilis cum similique qui sunt', url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952'}
 ,
  {albumId: 1, id: 2, title: 'reprehenderit est deserunt velit ipsam', url: 'https://via.placeholder.com/600/771796', thumbnailUrl: 'https://via.placeholder.com/150/771796'}
 ,
  {albumId: 1, id: 3, title: 'officia porro iure quia iusto qui ipsa ut modi', url: 'https://via.placeholder.com/600/24f355', thumbnailUrl: 'https://via.placeholder.com/150/24f355'}
 ,
  {albumId: 1, id: 4, title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae', url: 'https://via.placeholder.com/600/d32776', thumbnailUrl: 'https://via.placeholder.com/150/d32776'}
,
  {albumId: 1, id: 5, title: 'natus nisi omnis corporis facere molestiae rerum in', url: 'https://via.placeholder.com/600/f66b97', thumbnailUrl: 'https://via.placeholder.com/150/f66b97'}
,
  ]

  return (
    <div className={styles.home}>
      <div className={styles.posts}>
        {posts.map(post=>
          <div className={styles.post}>
            <div className={styles.image}>
              <img src={post.url} alt={post.title} /> 
            </div>
            <div className={styles.content}>
              <Link to={`/post/${post.id}`}>
                <h1>{post.title.slice(0,5)}</h1>
              </Link>
              <p>{post.title}</p>
              <button>Read more...</button>
            </div>

          </div>
          
          )}
      </div>
    </div>
  )
}

export default Home