import api from "./api";

export async function getCurrentUser() {
  try {
    const response = await api.get("/auth/me");

    return response.data.user;
  } catch {
    return null;
  }
}
export async function logout() {
  await api.post("/auth/logout");
}
