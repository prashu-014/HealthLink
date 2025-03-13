import { validationResult } from "express-validator";
import AppointmentSchema from "../model/appointment.model.js";

const appointmentController = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { appointName, age, moblieNo, address, time, date, symptoms } = req.body

    try {
        const existAppoint = await AppointmentSchema.findOne({
            $or: [
                { appointName: appointName.toLowerCase() },
                { moblieNo: moblieNo }
            ]
        })

        if (existAppoint) {
            return res.status(401).json({
                status: false,
                message: "Already have a Appointment"
            })
        }

        const newAppoint = new AppointmentSchema({
            appointName,
            age,
            moblieNo,
            address,
            time,
            date,
            symptoms,
        });


        await newAppoint.save();

        return res.status(201).json({
            status: true,
            message: "Patient registered successfully",
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })
    }

}

export default appointmentController