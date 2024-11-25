import axios from "axios";

// Define your base API URL
const API_URL = "http://localhost:3000/api"; // Adjust this to match your backend URL

// Fetch all lands
export const fetchLands = async () => {
  const response = await axios.get(`${API_URL}/lands`);
  return response.data;
};

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

// Fetch admin stats
export const fetchStats = async () => {
  const response = await axios.get(`${API_URL}/admin/stats`);
  return response.data;
};

// Create a new land
export const createLand = async (landData) => {
  const response = await axios.post(`${API_URL}/lands`, landData);
  return response.data;
};

// Delete a land
export const deleteLand = async (id) => {
  const response = await axios.delete(`${API_URL}/lands/${id}`);
  return response.data;
};
