import { LoginForm } from "@/schemas/forms/login";
import { api } from "@/utils/api";

export async function Login(body: LoginForm) {
  const res = await api.post('/login', body)
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('user', res.data.name);
  localStorage.setItem('id',res.data.userid);
  return res.data;
}