import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.serverUrl,
  withCredentials: true,
});

export default axiosClient;
