import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string({message: "Digite seu email"}).email("Insira um email válido"),
  password: z.string({message: "Digite sua senha"}).min(6, "A senha deve ter no mínimo 6 caracteres")
})

export type LoginForm = z.infer<typeof LoginFormSchema>