import { z } from "zod";

const patientvalidation = z.object({
  name: z.string().min(2),
  dob: z.string().min(1),
  age: z.number().min(18),
  mobile: z.string().length(10),
  email: z.string().email(),
  state: z.string().min(2),
  city: z.string().min(2),
  pincode: z.string().length(6)
});


export default patientvalidation

