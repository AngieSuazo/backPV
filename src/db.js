import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://nattriose:njRE1401@pantanos.je1d1pg.mongodb.net/?retryWrites=true&w=majority");
        console.log(">>>>>>>>DB is connected");
    } catch (error){
        console.log(error);
    }
};