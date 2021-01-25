// TODO: replace with BE API calls
const examplePosts = [
  {
    companyPostID: "1",
    companyID: "1",
    companyName: "Shopee",
    postTitle: "Post 1",
    postSubtitle: "subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
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
    companyName: "GovTech",
    postTitle: "Post 2",
    postSubtitle: "subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
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
    companyName: "DSTA",
    postTitle: "Post 3",
    postSubtitle: "subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
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
    companyName: "IMDA",
    postTitle: "Post 4",
    postSubtitle: "subtitle",
    description: "Body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pulvinar quis consectetur vel, tristique vel tellus. Praesent aliquet, justo quis tempus porta, metus neque ultricies justo, a lobortis nibh odio sit amet dolor. Nulla facilisi. Sed sem ante, tempus id ullamcorper vitae, efficitur nec risus. Sed luctus nibh in volutpat rutrum. In hac habitasse platea dictumst. Donec sit amet enim vel magna laoreet sagittis sed at tortor. Etiam laoreet luctus metus ac dignissim.",
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
