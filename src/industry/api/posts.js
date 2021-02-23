import { api } from "."

// TODO: company should only be able to access their own company posts
// and not those of other companies
const getPosts = async () => {
  return api.get("/companyPost")
  .then(response => response.data)
  .catch(error => { throw error });
}

const getValidPosts = () => {
  return api.get('/companyPost/valid');
}

// TODO: this should be the implementation of getPosts
// once company authentication is done
const getPostsByCompany = companyID => {
  return api.get(`/companyPost/company/${companyID}`);
}

const getValidPostsByCompany = companyID => {
  return api.get(`/companyPost/company/${companyID}/valid`);
}

const getPostsByUser = companyUserId => {
  return api.get(`/companyPost/user/${companyUserId}`);
}

const createPost = async data => {
  return {
    ...data,
    companyPostID: Math.floor(Math.random() * 10000),
    isActive: true,
    lastUpdated: new Date(),
  }
  // return api.post('/companyPost/create', data);
}

const updatePost = async data => {
  return api.put('/companyPost/update', data)
  .then(response => response.data);
}

const archivePosts = async companyPostId => {
  return api.put(`/companyPost/archive/${companyPostId}`)
  .then(response => response.data);
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
}

export default postsApi;
