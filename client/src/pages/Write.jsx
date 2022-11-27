import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from "../styles/write.module.scss"
const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.write}>
      <div className={styles.content}>
        <input type="text" placeholder='Title' />
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
            <input type="file" id={styles.file} />
            <label htmlFor="file">Upload</label>
            <div className={styles.buttons}>
              <button>Save as a draft</button>
              <button>UPDATE</button>
            </div>
          </div>
          <div className={styles.item}>
            <h1>Category</h1>
            <div className={styles.category}>
              <input type="radio" name="cat" value="art" id="art"/>
              <label htmlFor="art">Art</label>
            </div>
            <div className={styles.category}>
              <input type="radio" name="cat" value="technology" id="technology"/>
              <label htmlFor="technology">Technology</label>
            </div> 
             <div className={styles.category}>
              <input type="radio" name="cat" value="food" id="food"/>
              <label htmlFor="food">Food</label>
            </div>
             <div className={styles.category}>
              <input type="radio" name="cat" value="sport" id="sport"/>
              <label htmlFor="sport">Sport</label>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Write