import axios from "axios";

// file này dùng để config gọi api của axios
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API;

export const api = axios.create();
api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    throw error;
  }
);
