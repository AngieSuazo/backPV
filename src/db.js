import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Pantanostest");
        console.log(">>>>>>>>DB is connected");
    } catch (error){
        console.log(error);
    }
};

//  mongodb://127.0.0.1:27017/Pantanostest
//mongodb+srv://kevin:admin123@cluster0.hbtx1z0.mongodb.net/Pantanostest