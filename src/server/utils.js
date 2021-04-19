import axios from "axios";

const isDev = process.env.REACT_APP_ENV === 'development';

export const BASE_URL = isDev ? process.env.REACT_APP_DEV_BASE_URL : process.env.REACT_APP_PROD_BASE_URL;
export const AUTH_ENPOINT = isDev ? process.env.REACT_APP_DEV_AUTH_ENPOINT : process.env.REACT_APP_PROD_AUTH_ENPOINT;

// ADFS Config
export const CLIENT_ID = isDev ? process.env.REACT_APP_DEV_AUTH_CLIENT_ID : process.env.REACT_APP_PROD_AUTH_CLIENT_ID;
export const REDIRECT_URI = isDev ? process.env.REACT_APP_DEV_AUTH_REDIRECT : process.env.REACT_APP_PROD_AUTH_REDIRECT;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});
