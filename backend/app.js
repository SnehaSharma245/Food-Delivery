import express from "express"
import cors from "cors"

export const app = express()

app.use(cors())
app.use(express.json())


//import routes
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"

//routes endpoint
app.use("/api/food" , foodRouter)
app.use("/images" , express.static('uploads'))
app.use("/api/user" , userRouter)
