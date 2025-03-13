import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    appointName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    moblieNo: {
        type: String,
        require: true
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    symptoms: {
        type: String,
    }

});

const AppointmentSchema = mongoose.model('Appointment', appointmentSchema);

export default AppointmentSchema;
