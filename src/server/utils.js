import axios from "axios";

export const BASE_URL = `https://winuat11-i.comp.nus.edu.sg/IR3`;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});
