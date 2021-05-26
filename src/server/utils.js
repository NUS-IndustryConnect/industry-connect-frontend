import axios from "axios";

export const isLocalDev = process.env.REACT_APP_IS_LOCAL_DEV === 'TRUE';
export const isDevMode = process.env.REACT_APP_ENV === 'development';

export const ADMIN = 'admin';
export const COMPANY = 'industry';
export const STUDENT = 'student';

export const BASE_URL = isDevMode ? process.env.REACT_APP_DEV_BASE_URL : process.env.REACT_APP_PROD_BASE_URL;
export const AUTH_ENPOINT = isDevMode ? process.env.REACT_APP_DEV_AUTH_ENPOINT : process.env.REACT_APP_PROD_AUTH_ENPOINT;

// ADFS Config
export const CLIENT_ID = isDevMode ? process.env.REACT_APP_DEV_AUTH_CLIENT_ID : process.env.REACT_APP_PROD_AUTH_CLIENT_ID;
export const REDIRECT_URI = isDevMode ? process.env.REACT_APP_DEV_AUTH_REDIRECT : process.env.REACT_APP_PROD_AUTH_REDIRECT;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});
