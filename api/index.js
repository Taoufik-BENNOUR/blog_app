import express from "express";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/posts",postRoute)

app.listen(5000,()=>{
    console.log("Server connected on port 5000");
})