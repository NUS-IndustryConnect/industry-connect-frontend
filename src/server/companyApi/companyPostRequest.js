import { api } from "../utils";

// TODO: WAITING FOR COMPANY AUTHENTICATION
// company should only be able to access their own company requests
// and not those of other companies
const getRequests = () => {
  return api.get('/companyPostRequest')
    .then(response => response.data)
    .catch(error => { throw error });
}

// TODO: WAITING FOR COMPANY AUTHENTICATION
// this should be the implementation of getRequests
// once company authentication is done
const getRequestsByCompany = companyId => {
  return api.get(`/companyPostRequest/${companyId}`);
}


const createRequest = data => {
  return api.post('/companyPostRequest/create', data);
}

const companyPostRequests = {
  getRequests,
  getRequestsByCompany,
  createRequest,
}

export default companyPostRequests;
