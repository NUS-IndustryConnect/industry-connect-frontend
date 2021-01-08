// TODO: link up to BE API (temporary placeholder)
const exampleCompanies = [
  {
    companyID: "1",
    companyName: "Shopee",
    companyTier: "Gold",
    companyDescription: "Shopee",
    companyPosts: [ "1", "2", "3" ]
  },
  {
    companyID: "2",
    companyName: "Grab",
    companyTier: "Gold",
    companyDescription: "Grab",
    companyPosts: []
  },
  {
    companyID: "3",
    companyName: "Google",
    companyTier: "Silver",
    companyDescription: "Google",
    companyPosts: []
  },
  {
    companyID: "4",
    companyName: "Facebook",
    companyTier: "Silver",
    companyDescription: "Facebook",
    companyPosts: []
  },
  {
    companyID: "5",
    companyName: "Indeed",
    companyTier: "Silver",
    companyDescription: "Indeed",
    companyPosts: []
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
    companyPosts: []
  }
  // return fetch('/company/create', {
  //   method: "POST",
  //   body: data,
  // })
}

const deleteCompany = async id => {
  return id;
  // return fetch(`/company/${id}`, {
  //   method: "DELETE"
  // })
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
  deleteCompany,
}

export default companyApi;
