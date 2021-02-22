import { api } from "."

// TODO: replace with BE API calls
const examplePosts = [
  {
    companyPostId: "1",
    companyId: "1",
    companyName: "Shopee",
    postTitle: "Post 1",
    postSubtitle: "subtitle",
    description: "Get a job here",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    validTill: new Date(),
    approvedBy: "approver",
    isActive: true,
    links: [
      "http://nus.edu.sg/",
    ]
  }
]

const getPosts = async () => {
  // return Promise.resolve(examplePosts)
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

const getPostsByUser = companyUserID => {
  return api.get(`/companyPost/user/${companyUserID}`);
}

const createPost = async data => {
  return {
    ...data,
    companyPostId: Math.floor(Math.random() * 10000),
    isActive: true,
    lastUpdated: new Date(),
  }
  // return api.post('/companyPost/create', data);
}

const updatePost = async data => {
  return data;
  // return api.post(`/companyPost/update/${data.id}`, data);
}

const archivePosts = async companyPostIds => {
  return companyPostIds;
  // return api.post('/companyPost/archive', { companyPostIds });
}

const unarchivePosts = async companyPostIds => {
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
