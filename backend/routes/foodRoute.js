import { Router } from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = Router()
//Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        return cb(null , `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})
foodRouter.route("/add").post(upload.single("image"),addFood)
foodRouter.route("/list").get(listFood)
foodRouter.route("/remove").post(removeFood)



export default foodRouter;