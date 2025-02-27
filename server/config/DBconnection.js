import mongoose from "mongoose";

async function DBconnection() {
    mongoose.connect('mongodb://0.0.0.0')
    console.log('DB connected');
} 

export default DBconnection