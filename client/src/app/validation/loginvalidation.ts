import { z } from "zod";

const loginvalidation = z.object({
  username: z.string().min(3),
  password: z.string().min(5),
  
});


export default loginvalidation 


