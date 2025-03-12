import express from 'express'
import patientcontroller from '../controller/patient.controller.js'
import { validatePatient } from '../validation/patientValidation.js';

const router = express.Router()

router.post('/', validatePatient, patientcontroller)

export default router;