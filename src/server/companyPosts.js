import axios from 'axios';
import { BASE_URL } from './utils';

export const getCompanyPostsStudent = async () => {
  console.log('Getting student company posts from database....');
  const config = {
      headers: {
          'Content-Type': 'application/json',
      },
  };
  let posts;
  await axios
      .get(`${BASE_URL}/companyPost/student`, config)
      .then(res => {
          posts = res.data;
      })
      .catch(err => {
          throw err;
      });
  return posts;
};
