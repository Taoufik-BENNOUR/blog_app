import express from "express";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import cookieParser from "cookie-parser";
import multer from "multer"
const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/images/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
  
      }
  })
const upload = multer({storage:storage})

app.post("/api/upload",upload.single("file"),(req,res)=>{
    const file=req.file
    res.status(200).json(file.filename)
})

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/posts",postRoute)

app.listen(5000,()=>{
    console.log("Server connected on port 5000");
})