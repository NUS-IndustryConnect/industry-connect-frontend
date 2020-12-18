import { mergeCompanyInfo } from "./companies";

const exampleApprovedPosts = [
  {
    postID: "1",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Get a job here",
    videoURL: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: []
  },
  {
    postID: "2",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Get a job here",
    videoURL: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: []
  },
  {
    postID: "3",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Get a job here",
    videoURL: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: []
  },
  {
    postID: "4",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Get a job here",
    videoURL: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: []
  }
]

export const getApprovedPosts = () => {
  return Promise.resolve(exampleApprovedPosts);
}

const pendingPosts = [
  {
    postID: "1",
    companyID: "1",
    companyPostTitle: "NEW Job opportunities",
    description: "Get a job here",
    videoURL: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: [],
    isRejected: false,
  },
  {
    postID: "2",
    companyID: "1",
    companyPostTitle: "NEW Job opportunities",
    description: "Get a job here",
    videoURL: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: [],
    isRejected: false,
  },
]

export const getPendingPosts = () => {
  return Promise.resolve(pendingPosts);
}

export const getPosts = async () => {
  const approved = await getApprovedPosts().then(mergeCompanyInfo);
  const pending = await getPendingPosts().then(mergeCompanyInfo);

  return { approved, pending }
}