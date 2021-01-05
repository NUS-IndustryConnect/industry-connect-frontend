import { mergeCompanyInfo } from './companies'

// TODO: link up to BE API (temporary placeholder)
const exampleApprovedPosts = [
  {
    postID: "1",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    videoURL: "https://www.youtube.com/watch?v=3Ii4CFYAnkI",
    embeddedVideoURL: "https://www.youtube.com/embed/3Ii4CFYAnkI",
    link: "https://careers.shopee.sg/students/",
    lastUpdated: new Date(),
    relatedJobs: []
  },
  {
    postID: "2",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    videoURL: "https://www.youtube.com/watch?v=3Ii4CFYAnkI",
    embeddedVideoURL: "https://www.youtube.com/embed/3Ii4CFYAnkI",
    link: "https://careers.shopee.sg/students/",
    lastUpdated: new Date(),
    relatedJobs: []
  },
  {
    postID: "3",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    videoURL: "https://www.youtube.com/watch?v=3Ii4CFYAnkI",
    embeddedVideoURL: "https://www.youtube.com/embed/3Ii4CFYAnkI",
    link: "https://careers.shopee.sg/students/",
    lastUpdated: new Date(),
    relatedJobs: []
  },
  {
    postID: "4",
    companyID: "1",
    companyPostTitle: "New internship opportunity at Shopee",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
    videoURL: "https://www.youtube.com/watch?v=3Ii4CFYAnkI",
    embeddedVideoURL: "https://www.youtube.com/embed/3Ii4CFYAnkI",
    link: "https://careers.shopee.sg/students/",
    lastUpdated: new Date(),
    relatedJobs: []
  }
]

export const getApprovedPosts = () => {
  return Promise.resolve(exampleApprovedPosts);
}

export const getPostsApi = async () => {
    return await getApprovedPosts().then(mergeCompanyInfo);
}
