import axios from 'axios';

import announcements from './announcements';
import companies from './companies';
import users from './users';
import posts from './posts';
import requests from './requests';

const API_URL = "https://winuat11-i.comp.nus.edu.sg/IR3";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 1000
});

const adminApi = {
  announcements,
  companies,
  users,
  posts,
  requests
}

export default adminApi;