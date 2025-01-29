import express from "express"
import { loginUser , registerUser } from "../controllers/userController.js"
import multer from "multer"
const userRouter = express.Router()
const upload = multer()
userRouter.route("/register").post(upload.none(),registerUser)
userRouter.route("/login").post(loginUser)

export default userRouter