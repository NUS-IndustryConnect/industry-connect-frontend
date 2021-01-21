// TODO: replace with BE API calls
const exampleCompanies = [
  {
    companyID: "1",
    companyName: "Shopee",
    companyTier: "Gold",
    companyDescription: "Shopee",
    companyPosts: [ "1", "2", "3" ],
    isActive: true,
  },
  {
    companyID: "2",
    companyName: "Grab",
    companyTier: "Gold",
    companyDescription: "Grab",
    companyPosts: [],
    isActive: true,
  },
  {
    companyID: "3",
    companyName: "Google",
    companyTier: "Silver",
    companyDescription: "Google",
    companyPosts: [],
    isActive: true,
  },
  {
    companyID: "4",
    companyName: "Facebook",
    companyTier: "Silver",
    companyDescription: "Facebook",
    companyPosts: [],
    isActive: true,
  },
  {
    companyID: "5",
    companyName: "Indeed",
    companyTier: "Silver",
    companyDescription: "Indeed",
    companyPosts: [],
    isActive: false,
  }
]

const getCompanies = () => {
  // return fetch('/company/admin');
  return Promise.resolve(exampleCompanies);
}

const postCompany = async data => {
  return {
    ...data,
    companyID: Math.floor(Math.random() * 1000000),
    companyPosts: [],
    isActive: true,
  }
  // return fetch('/company/create', {
  //   method: "POST",
  //   body: data,
  // })
}

const archiveCompany = async id => {
  return id;
  // return fetch(`/company/archive/${id}`, {
  //   method: "POST"
  // })
}

const unarchiveCompany = async id => {
  return id;
}

const updateCompany = async data => {
  return data;
  // return fetch(`/company/${id}`, {
  //   method: "POST",
  //   body: data,
  // })
}

const companyApi = {
  getCompanies,
  postCompany,
  updateCompany,
  archiveCompany,
  unarchiveCompany,
}

export default companyApi;
