import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())


//import routes
import foodRouter from "./routes/foodRoute.js"

//routes endpoint
app.use("/api/food" , foodRouter)
app.use("/images" , express.static('uploads'))
export {app}