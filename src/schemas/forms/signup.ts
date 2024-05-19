import { z } from "zod";
import { zodCPF, zodCellPhone, zodEmail, zodPassword, zodUserName } from "../zodHelper";

export const SignupFormSchema = z.object({
  name: zodUserName,
  email: zodEmail,
  password: zodPassword,
  confirmPassword: zodPassword,
  cpf: zodCPF,
  phone: zodCellPhone
}).refine(values => values.password === values.confirmPassword, {message: "As senhas não são iguais", path: ["confirmPassword"]})

export type SignupForm = z.infer<typeof SignupFormSchema>