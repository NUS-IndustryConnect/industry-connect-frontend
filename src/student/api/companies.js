// TODO: replace with BE API calls
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
  return Promise.resolve(exampleCompanies);
}
