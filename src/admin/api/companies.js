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

export const getCompanies = () => {
  // return fetch('/company/admin');
  return Promise.resolve(exampleCompanies);
}

const arrayToObj = (arr, key) => {
  let obj = {};
  arr.forEach(elem => {
    obj[elem[key]] = elem;
  })
  return obj;
}

export const mergeCompanyInfo = async (data) => {
  const rawCompanies = await getCompanies(); // TODO: don't keep calling getCompanies
  const companiesObj = arrayToObj(rawCompanies, "companyID");
  return data.map(
    user => ({
      ...user,
      company: companiesObj[user.companyID]
    })
  );
}

export const postCompany = data => {
  return fetch('/company/create', {
    method: "POST",
    body: data,
  })
}

export const deleteCompany = id => {
  return fetch(`/company/${id}`, {
    method: "DELETE"
  })
}

export const updateCompany = (id, data) => {
  return fetch(`/company/${id}`, {
    method: "POST",
    body: data,
  })
}