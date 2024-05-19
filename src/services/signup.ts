import { SignupForm } from "@/schemas/forms/signup";
import { api } from "@/utils/api";

export async function Signup(body: SignupForm) {
  const res = await api.post('/signup', body)
  return res.data;
}