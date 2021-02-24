import { api } from "."

const getPosts = async () => {
  return api.get("/companyPost")
  .then(response => response.data)
  .catch(error => { throw error });
}

const getValidPosts = () => {
  return api.get('/companyPost/valid');
}

const getPostsByCompany = companyId => {
  return api.get(`/companyPost/company/${companyId}`);
}

const getValidPostsByCompany = companyId => {
  return api.get(`/companyPost/company/${companyId}/valid`);
}

const getPostsByUser = companyUserId => {
  return api.get(`/companyPost/user/${companyUserId}`);
}

const createPost = async data => {
  return api.post('/companyPost/create', data)
  .then(response => {
    return response.data.data;
  })
  .catch(error => {
    console.error(error);
    return [];
  });;
}

const updatePost = async data => {
  return api.put('/companyPost/update', data)
  .then(response => response.data);
}

const archivePosts = async companyPostId => {
  return api.put(`/companyPost/archive/${companyPostId}`)
  .then(response => response.data);
}

const unarchivePosts = async companyPostIds => {
  // TODO: BE API missing
  return companyPostIds;
}

const postsApi = {
  getPosts,
  getValidPosts,
  getPostsByCompany,
  getValidPostsByCompany,
  getPostsByUser,
  createPost,
  updatePost,
  archivePosts,
  unarchivePosts,
}

export default postsApi;
