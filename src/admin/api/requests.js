import { api } from ".";

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
  return api.post('/companyPostRequest/create', data)
}

const approveRequest = async ({ companyPostRequestId, approvedBy }) => {
  const body = { companyPostRequestId, approvedBy };
  return api.put('/companyPostRequest/approve', body)
  .then(response => response.data);
}

const rejectRequest = async ({ companyPostRequestId, feedback }) => {
  const body = { companyPostRequestId, feedback };
  return api.put('/companyPostRequest/reject', body)
  .then(response => response.data);
}

const postRequestApi = {
  getRequests,
  getRequestsByCompany,
  createRequest,
  approveRequest,
  rejectRequest,
}

export default postRequestApi;