import { api } from "../utils";

const getRequestsByCompany = companyId => {
  return api.get(`/companyPostRequest/${companyId}`)
  .then(response => response.data);;
}

const createRequest = data => {
  return api.post('/companyPostRequest/create', data);
}

const companyPostRequests = {
  getRequestsByCompany,
  createRequest,
}

export default companyPostRequests;
