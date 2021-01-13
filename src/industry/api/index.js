import authApi from './auth';
import postsApi from './posts';
import requestsApi from './requests';

const industryApi = {
  auth: authApi,
  posts: postsApi,
  requests: requestsApi,
}

export default industryApi;