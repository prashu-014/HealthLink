import mongoose from "mongoose";

async function DBconnection() {
    try{
        mongoose.connect('mongodb://0.0.0.0/healthlink')
        console.log('DB connected');
    }
    catch(err){
        console.log(err)
    }
} 

export default DBconnection