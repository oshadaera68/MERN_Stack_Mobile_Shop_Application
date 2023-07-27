import axios from "../axios.js";

export const getAllItems = async () => {
  return await axios.get("/items");
};

export const saveItem = async (item) => {
  return await axios.post("/items", item);
};

export const updateItem = async (id, data) => {
  return await axios.put(`/items/${id}`, data);
};

export const deleteItem = async (id) => {
  return await axios.delete(`/items/${id}`);
};
