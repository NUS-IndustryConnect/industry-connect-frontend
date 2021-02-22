import { api } from ".";

// TODO: replace with BE API calls
const exampleCompanies = [
  {
    companyId: "1",
    companyName: "Shopee",
    companyTier: "Gold",
    companyDescription: "Shopee",
    companyPosts: [ "1", "2", "3" ],
    isActive: true,
  },
]

const getCompanies = () => {
  // return Promise.resolve(exampleCompanies);
  return api.get("/company/admin")
  .then(response => response.data)
  .catch(error => { throw error });
}

const postCompany = async data => {
  return {
    ...data,
    companyId: Math.floor(Math.random() * 1000000),
    companyPosts: [],
    isActive: true,
  }
  // return api.post('/company/create', data);
}

const archiveCompany = async id => {
  return id;
  // return api.post(`/company/archive/${id}`);
}

const unarchiveCompany = async id => {
  return id;
}

const updateCompany = async data => {
  return data;
  // return api.post(`/company/${id}`, data);
}

const companyApi = {
  getCompanies,
  postCompany,
  updateCompany,
  archiveCompany,
  unarchiveCompany,
}

export default companyApi;
