import { placeOrder, userOrders, verifyOrder } from "../controllers/orderContoller.js";
import express from "express"
import authMiddleware from "../middlewares/auth.js"

const orderRouter = express.Router()
orderRouter.route("/place").post(authMiddleware , placeOrder)
orderRouter.route("/verify").post(verifyOrder)
orderRouter.route("/userOrders").post(authMiddleware,userOrders)

export default orderRouter