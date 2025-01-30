import express from "express"
import cors from "cors"

export const app = express()

app.use(cors())

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//import routes
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js";

//routes endpoint
app.use("/api/food" , foodRouter)
app.use("/images" , express.static('uploads'))
app.use("/api/user" , userRouter)
app.use("/api/cart" , cartRouter)
app.use("/api/order" , orderRouter)
