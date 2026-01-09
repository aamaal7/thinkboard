import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/actions",
});

export default api;
