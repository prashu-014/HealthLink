import { body } from "express-validator";

export const validateAppointment = [
    body("appointName").notEmpty().withMessage("Patient name is required"),
    body("age").isInt({ min: 18 }).withMessage("Age must be a valid number"),
    body("moblieNo")
        .isLength({ min: 10, max: 10 })
        .isNumeric()
        .withMessage("Mobile number must be 10 digits"),
    body("address").notEmpty().withMessage("address is required"),
    body("time").notEmpty().withMessage("time is required"),
    body("date").notEmpty().withMessage("date is required"),
    body("symptoms").notEmpty().withMessage("symptoms is required"),
];