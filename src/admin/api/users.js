import { mergeCompanyInfo } from "./companies";

const exampleUsers = [
  {
    companyUserID: "1",
    companyID: "1",
    userEmail: "blah1@example.com",
    lastLogin: new Date(),
    userPosts: ["1", "2", "3"]
  },
  {
    companyUserID: "2",
    companyID: "1",
    userEmail: "blah2@example.com",
    lastLogin: new Date(),
    userPosts: []
  },
  {
    companyUserID: "3",
    companyID: "1",
    userEmail: "blah3@example.com",
    lastLogin: new Date(),
    userPosts: []
  },
  {
    companyUserID: "4",
    companyID: "2",
    userEmail: "blah4@example.com",
    lastLogin: new Date(),
    userPosts: []
  },
  {
    companyUserID: "5",
    companyID: "3",
    userEmail: "blah5@example.com",
    lastLogin: new Date(),
    userPosts: []
  }
]

const getRawUsers = () => {
  return Promise.resolve(exampleUsers);
}

export const getCompanyUsers = async () => {
  const rawUsers = await getRawUsers();
  return mergeCompanyInfo(rawUsers);
}