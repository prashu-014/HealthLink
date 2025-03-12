import { validationResult } from "express-validator";
import PatientSchema from "../model/patient.model.js";

const patientController = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { patientName, age, moblieNo, pinCode, city, state, emailAddress } = req.body

    try {
        const existPatient = await PatientSchema.findOne({
            $or: [
                { patientName: patientName.toLowerCase() },
                { moblieNo: moblieNo }
            ]
        })

        if (existPatient) {
            return res.status(401).json({
                status: false,
                message: "Already have a Patient"
            })
        }

        const newPatient = new PatientSchema({
            patientName,
            age,
            moblieNo,
            pinCode,
            city,
            state,
            emailAddress,
        });


        await newPatient.save();

        return res.status(201).json({
            status: true,
            message: "Patient registered successfully",
            patient: newPatient,
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })
    }




}

export default patientController