import axios from 'axios';
import { BASE_URL } from './utils';

export const getAnnouncementsStudent = async () => {
  console.log('Getting student announcements from database....');
  const config = {
      headers: {
          'Content-Type': 'application/json',
      },
  };
  let announcements;
  await axios
      .get(`${BASE_URL}/announcement/student`, config)
      .then(res => {
          announcements = res.data.data;
      })
      .catch(err => {
          throw err;
      });
  return announcements;
};
