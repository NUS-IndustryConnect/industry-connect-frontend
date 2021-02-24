import axios from 'axios';

import authApi from './auth';
import postsApi from './posts';
import requestsApi from './requests';

const API_URL = "https://winuat11-i.comp.nus.edu.sg/IR3";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 1000
});

const industryApi = {
  auth: authApi,
  posts: postsApi,
  requests: requestsApi,
}

export default industryApi;