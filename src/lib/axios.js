import axios from "axios";

export const productApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/product`,
});