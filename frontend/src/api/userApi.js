import api from "./api";

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const registerUser = async (user) => {
  const response = await api.post("/users/", user);
  return response.data;
};

// Settings APIs

export const getProfile = async () => {
  const response = await api.get("/settings/profile");
  return response.data;
};

export const updateProfile = async (profile) => {
  const response = await api.put("/settings/profile", profile);
  return response.data;
};