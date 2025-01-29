import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken = (id) =>{
   return jwt.sign({id} , process.env.JWT_SECRET)
}
//login user
const loginUser = async (req,res) =>{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if(!user) {
            return res.json({success:false , message: "User doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false, message: "Invalid password"})
        }

        const token = createToken(user._id)
        res.json({success:true , token})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"})
    }
}

const registerUser = async (req,res)=>{
   
    const {name ,email ,password} = req.body;
    console.log(req.headers)
    console.log(req.body);
    try {
        // checking is user already exists
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false , message: "Email already exists"})
        }
        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false , message: "Invalid email format"})
        }
        if(password.length < 8){
            return res.json({success:false , message: "Password must be at least 8 characters long"})
        }
        //hasing password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)
        const newUser = userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true , token})

    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"})
    }
}

export {loginUser,registerUser}