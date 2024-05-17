import { api } from "@/utils/api";

export async function Login(body: { email: string, password: string }) {
  const res = await api.post('/login', body)
  return res.data;
}