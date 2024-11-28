import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust the URL as needed
});

export const getLands = async () => {
  const response = await api.get('/lands');
  return response.data;
};

export const createLand = async (landData) => {
  const response = await api.post('/lands', landData);
  return response.data;
};

export const deleteLand = async (id) => {
  const response = await api.delete(`/lands/${id}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get('/lands/users');
  return response.data;
};
