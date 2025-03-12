import { body } from "express-validator";

export const validatePatient = [
    body("patientName").notEmpty().withMessage("Patient name is required"),
    body("age").isInt({ min: 0 }).withMessage("Age must be a valid number"),
    body("moblieNo")
        .isLength({ min: 10, max: 10 })
        .isNumeric()
        .withMessage("Mobile number must be 10 digits"),
    body("pinCode")
        .isLength({ min: 6, max: 6 })
        .isNumeric()
        .withMessage("Pincode must be a 6-digit number"),
    body("city").notEmpty().withMessage("City is required"),
    body("state").notEmpty().withMessage("State is required"),
    body("emailAddress").isEmail().withMessage("Invalid email address"),
];