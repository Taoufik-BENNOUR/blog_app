import React, { useState } from "react";
import styles from "../styles/write.module.scss"

const Category = ({cat,setcat,category}) => {
  return (
    <>
        <div className={styles.category}>
          <input
            type="radio"
            checked={cat === category}
            name={"cat"}
            value={category}
            id={category}
            onChange={(e) => setcat(e.target.value)}
          />
          <label htmlFor={category}>{category}</label>
        </div>


    </>
  );
};

export default Category;
