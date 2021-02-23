import { api } from ".";

const exampleRequests = [
  {
    companyPostRequestId: "11",
    companyId: "1",
    companyName: "Shopee",
    postTitle: "Request 1",
    postSubtitle: "Sign up by 10 Jan!",
    postDescription: "This is our event description",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: [],
    status: "pending",
    feedback: ""
  }
]

const getRequests = () => {
  // return Promise.resolve(exampleRequests);
  return api.get('/companyPostRequest')
  .then(response => response.data)
  .catch(error => { throw error });
}

const getRequestsByCompany = companyId => {
  return api.get(`/companyPostRequest/${companyId}`);
}

const createRequest = async data => {
  return data;
  // return api.post('/companyPostRequest/create', data)
}

const approveRequest = async ({ companyPostRequestId, approvedBy }) => {
  return companyPostRequestId;
  // return api.put('/companyPostRequest/approve', {
  //   companyPostRequestId,
  //   approvedBy,
  // })
}

const rejectRequest = async ({ companyPostRequestId, feedback }) => {
  return companyPostRequestId;
  // return api.put('/companyPostRequest/reject', {
  //   companyPostRequestId,
  //   feedback
  // }
}

const postRequestApi = {
  getRequests,
  getRequestsByCompany,
  createRequest,
  approveRequest,
  rejectRequest,
}

export default postRequestApi;