import { z } from "zod";
import { zodEmail, zodPassword } from "../zodHelper";

export const LoginFormSchema = z.object({
  email: zodEmail,
  password: zodPassword
})

export type LoginForm = z.infer<typeof LoginFormSchema>