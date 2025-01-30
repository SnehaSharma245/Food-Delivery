import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      " mongodb+srv://snehav2109:Snehas_874@cluster0.v6b7c.mongodb.net/snehaDB"
    )
    .then(() => console.log("DB Connected"));
};
