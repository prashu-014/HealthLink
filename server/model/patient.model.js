import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
   patientName: {
      type: String,
      require: true
   },
   dob: {
      type: String,
      require: true
   },
   age: {
      type: Number
   },
   moblieNo: {
      type: String,
      require: true
   },
   emailAddress: {
      type: String,
      required: true,
   },
   state: {
      type: String,
      required: true
   },
   city: {
      type: String,
      required: true
   },
   pinCode: {
      type: Number,
   }
});

const PatientSchema = mongoose.model('Patient', patientSchema);

export default PatientSchema;
