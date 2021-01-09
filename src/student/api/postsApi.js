// TODO: replace with BE API calls
const examplePosts = [
  {
    companyPostID: "1",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Post 1",
    postSubtitle: "subtitle",
    description: "Get a job here",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    validTill: new Date(),
    links: [
      "http://nus.edu.sg/",
    ]
  },
  {
    companyPostID: "2",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Post 2",
    postSubtitle: "subtitle",
    description: "Get a job here",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    validTill: new Date(),
    links: [
      "http://nus.edu.sg/",
    ]
  },
  {
    companyPostID: "3",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Post 3",
    postSubtitle: "subtitle",
    description: "Get a job here",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    validTill: new Date(),
    links: [
      "http://nus.edu.sg/",
    ]
  },
  {
    companyPostID: "4",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Old Post 4",
    postSubtitle: "subtitle",
    description: "Get a job here",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    validTill: new Date(),
    links: [
      "http://nus.edu.sg/",
    ]
  }
]

export const getPostsApi = () => {
  return Promise.resolve(examplePosts);
}
