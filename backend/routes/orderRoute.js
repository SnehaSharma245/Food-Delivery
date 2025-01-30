import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderContoller.js";
import express from "express"
import authMiddleware from "../middlewares/auth.js"

const orderRouter = express.Router()
orderRouter.route("/place").post(authMiddleware , placeOrder)
orderRouter.route("/verify").post(verifyOrder)
orderRouter.route("/userOrders").post(authMiddleware,userOrders)
orderRouter.route("/list").get(listOrders)
orderRouter.route("/status").post(updateStatus)

export default orderRouter