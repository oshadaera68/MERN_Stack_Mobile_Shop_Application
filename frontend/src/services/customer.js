import axios from "../axios.js";

export const getAllUsers = async () => {
  return await axios.get('/customer');
};

export const saveUser = async (data) => {
  return await axios.post('/customer', data);
};

export const updateUser = async (id, data) => {
  return await axios.put(`/customer/${id}`, data);
};

export const deleteUser = async (id) => {
  return await axios.delete(`/customer/${id}`);
};
