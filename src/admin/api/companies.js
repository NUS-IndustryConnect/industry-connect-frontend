import { api } from ".";

const getCompanies = () => {
  // return Promise.resolve(exampleCompanies);
  return api.get("/company/admin")
  .then(response => response.data)
  .catch(error => { throw error });
}

const postCompany = async data => {
  return api.post('/company/create', data)
  .then(response => response.data)
  .catch(error => {
    console.error(error);
    return [];
  });
}

const archiveCompany = async id => {
  return api.put(`/company/archive/${id}`)
  .then(response => response.data);
}

const unarchiveCompany = async id => {
  // TODO: BE API missing
  return id;
}

const updateCompany = async data => {
  return api.put(`/company/update/${data.companyId}`, data)
  .then(response => {
    console.log(response);
    return response.data;
  });
}

const companyApi = {
  getCompanies,
  postCompany,
  updateCompany,
  archiveCompany,
  unarchiveCompany,
}

export default companyApi;
