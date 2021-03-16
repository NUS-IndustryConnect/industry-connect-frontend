import { api } from "../utils";

const getCompanies = () => {
  console.log('Getting companies from database....');
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
  return api.put(`/company/unarchive/${id}`)
  .then(response => response.data);
}

const updateCompany = async data => {
  return api.put(`/company/update/${data.companyId}`, data)
  .then(response => response.data);
}

const companies = {
  getCompanies,
  postCompany,
  updateCompany,
  archiveCompany,
  unarchiveCompany,
}

export default companies;
