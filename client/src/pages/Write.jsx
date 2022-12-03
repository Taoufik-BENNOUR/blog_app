import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';
import Category from '../components/Category';

import styles from "../styles/write.module.scss"
const Write = () => {
  const state = useLocation().state
  const [title, settitle] = useState(state?.title||"");
  const [value, setValue] = useState(state?.description||"");
  const [file, setfile] = useState(null);
  const [cat, setcat] = useState(state?.cat||"");

const categories = ["food","technology","art"]
  const upload = async ()=>{
    try {
      const formData = new FormData()
      formData.append("file",file)
      const response = await axios.post("/upload",formData)
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
   const imgUrl =await upload()
   try {
    state? await axios.put(`/posts/update/${state.postId}`,{title,description:value,cat,image:file?imgUrl:""})
    :await axios.post(`/posts/add`,{title,description:value,cat,image:file?imgUrl:"",date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")})

   } catch (error) {
    console.log(error);
   }

  }
  return (
    <div className={styles.write}>
      <div className={styles.content}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)} />
        <div className={styles.editorContainer}>
         <ReactQuill className={styles.editor} theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
        <div className={styles.menu}>
          <div className={styles.item}>
            <h1>Publish</h1>
            <span>
              <b>Status:</b>Draft
            </span>
            <span>
              <b>Visibility:</b>Public
            </span>
            <input  type="file" id="file" onChange={(e)=>setfile(e.target.files[0])} style={{display:'none'}} />
            <label htmlFor="file">Upload</label>
            <div className={styles.buttons}>
              <button>Save as a draft</button>
              <button onClick={handleSubmit}>Publish</button>
            </div>
          </div>
          <div className={styles.item}>
        <h1>Category</h1>
            {categories.map((category,i)=><Category  cat={cat} setcat={setcat} category={category} key={i}/>)} 
         </div>
      </div>
    </div>
  )
}

export default Write