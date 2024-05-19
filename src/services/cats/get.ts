import { api } from "@/utils/api";

export async function getCats() {
  if (api.defaults.headers.authorization === undefined) {
    return {};
  }
  const response = await api.get(`/cats`);
  return response.data;
}
