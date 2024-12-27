import mongoose from "mongoose";
import {DBName} from "../constants.js"

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DBName}`)
        console.log(connectionInstance.connection.host);
    } catch (error) {
        console.log("Connection error: " , error)
        process.exit(1)
    }
}

export default connectDB;