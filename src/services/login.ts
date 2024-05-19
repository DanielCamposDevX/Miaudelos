import { LoginForm } from "@/schemas/forms/login";
import { api } from "@/utils/api";

export async function Login(body: LoginForm) {
  const res = await api.post('/login', body)
  return res.data;
}