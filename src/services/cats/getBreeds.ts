import { api } from "@/utils/api";

export async function getBreeds() {
  if (api.defaults.headers.authorization === undefined) {
    return {};
  }
  const response = await api.get(`/breed/-1`);
  return response.data;
}
