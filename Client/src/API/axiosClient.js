import axios from "axios";

// Use environment variable for backend URL
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
