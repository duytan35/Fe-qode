import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.serverUrl,
});

export default axiosClient;
