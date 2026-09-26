const express=require("express")
require("dotenv").config()
const connectDb=require("./src/db/db")
const app=require("./src/app")
connectDb()

app.use(express.json());

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server is running")
})