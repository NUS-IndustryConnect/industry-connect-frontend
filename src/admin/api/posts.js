// TODO: link up to BE API (temporary placeholder)
const examplePosts = [
  {
    companyPostID: "1",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Post 1",
    postSubtitle: "subtitle",
    postDescription: "Get a job here",
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
    postDescription: "Get a job here",
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
    postDescription: "Get a job here",
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
    companyPostID: "4",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Old Post 4",
    postSubtitle: "subtitle",
    postDescription: "Get a job here",
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

const getPostsByUser = companyUserID => {
  return fetch(`/companyPost/user/${companyUserID}`);
}

const createPost = data => {
  return fetch('/companyPost/create', {
    method: "POST",
    body: data,
  });
}

const updatePost = (id, data) => {
  return fetch(`/companyPost/update/${id}`, {
    method: "POST",
    body: data
  })
}

const archivePosts = companyPostIDs => {
  return fetch('/companyPost/archive', {
    method: "POST",
    body: { companyPostIDs }
  })
}

const deletePosts = companyPostIDs => {
  return fetch('/companyPost/delete', {
    method: "DELETE",
    body: { companyPostIDs }
  })
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
  deletePosts,
}

export default postsApi;