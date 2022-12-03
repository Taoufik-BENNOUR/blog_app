import express from "express"
import  {addPost, deletePost, getPost, getPosts, updatePost}  from "../controllers/postController.js"

const router = express.Router()

router.get("/all",getPosts)
router.get("/:id",getPost)
router.post("/add",addPost)
router.put("/update/:id",updatePost)
router.delete("/delete/:id",deletePost)



export default router