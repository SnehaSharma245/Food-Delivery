import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {app} from "./app.js"

dotenv.config({
    path: "./.env",
})

import connectDB from "./config/db.js"
const port = process.env.PORT || 4000
connectDB()
.then(
    ()=>{
        app.get("/" , (req,res)=>{
            res.send("Api Working")
        })
        app.listen(port , () => {
            console.log(`Server is running on port http://localhost:${port}`)
        })
    }
)
.catch((err)=>{
    console.log("MONGO DB connection failed!" , err)
})