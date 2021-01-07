const exampleRequests = [
  {
    companyPostId: "1",
    companyId: "1",
    companyName: "Shopee",
    postTitle: "Request 1",
    postSubtitle: "Sign up by 10 Jan!",
    description: "This is our event description",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: [],
    status: "pending",
    feedback: ""
  },
  {
    companyPostId: "2",
    companyId: "1",
    companyName: "Shopee",
    postTitle: "Request 2",
    postSubtitle: "Sign up by 10 Jan!",
    description: "This is our event description",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: [],
    status: "pending",
    feedback: ""
  },
  {
    companyPostId: "3",
    companyId: "1",
    companyName: "Shopee",
    postTitle: "Request 3",
    postSubtitle: "Sign up by 10 Jan!",
    description: "This is our event description",
    videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
    lastUpdated: new Date(),
    relatedJobs: [],
    status: "rejected",
    feedback: ""
  }
]

const getRequests = () => {
  return Promise.resolve(exampleRequests);
  // return fetch('/companyPostRequest');
}

const getRequestsByCompany = companyID => {
  return fetch(`/companyPostRequest/${companyID}`);
}

const createRequest = data => {
  return fetch('/companyPostRequest/create', {
    method: "POST",
    body: data,
  })
}

const approveRequest = (companyPostRequestID, approvedBy) => {
  return fetch('/companyPostRequest/approve', {
    method: "POST",
    body: {
      companyPostRequestID,
      approvedBy,
    }
  })
}

const rejectRequest = (companyPostRequestID, feedback) => {
  return fetch('/companyPostRequest/reject', {
    method: "POST",
    body: {
      companyPostRequestID,
      feedback
    }
  })
}

const postRequestApi = {
  getRequests,
  getRequestsByCompany,
  createRequest,
  approveRequest,
  rejectRequest,
}

export default postRequestApi;