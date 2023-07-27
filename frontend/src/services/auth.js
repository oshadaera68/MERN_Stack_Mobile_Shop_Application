import axios from '../axios.js';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/', { username, password });
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};
