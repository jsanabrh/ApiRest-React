import mongoose from "mongoose";

export const connectDB = async() => {
    try{await mongoose.connect('mongodb+srv://admin:admin123@cluster1.v0smtrp.mongodb.net/merndb');
    console.log("Servidor iniciado")
}catch(error){
    console.log(error)
}}
