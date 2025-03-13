import express from 'express'
import { validateAppointment } from '../validation/appointmentValidation.js';
import appointmentController from '../controller/appointment.controller.js';

const router = express.Router()

router.post('/', validateAppointment, appointmentController)

export default router;