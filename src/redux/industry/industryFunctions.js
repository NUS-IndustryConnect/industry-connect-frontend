import { getPostsApi } from "../../student/api/postsApi";

export const getCompanyPostForStudents = async () => {
  console.log('Getting company posts for students from database....');
  let studentCompanyPosts;
  await getPostsApi().then(all => {
    studentCompanyPosts = all
  })
  return {
    displayedPosts: [...studentCompanyPosts]
  };
};
