import { z } from "zod";

const appointmentvalidation = z.object({
  name: z.string().min(2),
  age: z.number().min(18),
  mobile: z.string().length(10),
  address: z.string().min(6),
  time: z.string(),
  date: z.string(),
  symptoms:z.string().min(5)
});


export default appointmentvalidation

