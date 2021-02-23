// TODO: replace with BE API calls
const examplePosts = [
  {
    companyPostID: "1",
    companyID: "1",
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
  },
  {
    companyPostID: "2",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Post 2",
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
  },
  {
    companyPostID: "3",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Post 3",
    postSubtitle: "subtitle",
    description: "Get a job here",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    validTill: new Date(),
    approvedBy: "approver",
    isActive: false,
    links: [
      "http://nus.edu.sg/",
    ]
  }
]

const getPosts = async () => {
  // return fetch('/companyPost')
  return Promise.resolve(examplePosts)
}

const getValidPosts = () => {
  return fetch('/companyPost/valid');
}

const getPostsByCompany = companyID => {
  return fetch(`/companyPost/company/${companyID}`);
}

const getValidPostsByCompany = companyID => {
  return fetch(`/companyPost/company/${companyID}/valid`);
}

const getPostsByUser = companyUserId => {
  return fetch(`/companyPost/user/${companyUserId}`);
}

const createPost = async data => {
  return {
    ...data,
    companyPostID: Math.floor(Math.random() * 10000),
    isActive: true,
    lastUpdated: new Date(),
  }
  // return fetch('/companyPost/create', {
  //   method: "POST",
  //   body: data,
  // });
}

const updatePost = async data => {
  return data;
  // return fetch(`/companyPost/update/${data.id}`, {
  //   method: "POST",
  //   body: data
  // })
}

const archivePosts = async companyPostIDs => {
  return companyPostIDs;
  // return fetch('/companyPost/archive', {
  //   method: "POST",
  //   body: { companyPostIDs }
  // })
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
