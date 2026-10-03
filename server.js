const express=require("express")
require("dotenv").config()
const connectDb=require("./src/db/db")
const app=require("./src/app")
const authRouter=require("./src/routes/auth.router")
const cookieParser = require("cookie-parser")

connectDb()

app.use(express.json());
app.use(cookieParser)
app.use("/api/auth",authRouter)
//app.use(cors())
app.listen(process.env.PORT || 5000,()=>{
    console.log("Server is running")
})