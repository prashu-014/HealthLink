import express from "express";
import 'dotenv/config.js'
import cors from 'cors'
import DBconnection from "./config/DBconnection.js";
import PatientRouter from "./routes/patient.route.js";
import AppointmentRouter from "./routes/appointment.route.js";

const app = express()
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT_NO

app.use("/api/v1/patient",PatientRouter)
app.use("/api/v1/appointment",AppointmentRouter)

app.get('/',(req,res)=>{
    res.send("prashant")
})

app.listen(PORT,async ()=>{
    console.log("server is running ",PORT); 
   await DBconnection() 
})