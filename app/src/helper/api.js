/* eslint-disable no-undef */
import axios from 'axios';
const baseURL = `${process.env.REACT_APP_API_URL_DEV}/tweet/`;

export const getTweet = async () => {
  return await axios({ method: 'GET', url: baseURL })
    .then(res => {
      if (res?.status === 200 && res?.data?.length === 1) return res?.data[0];
      return null;
    })
    .catch(err => {
      console.log('\n==> Error log in getTweet:\n', err);
      return null;
    });
};

export const updateTweet = async (booleanValue, id) => {
  const url = `${baseURL}${id}/`;
  await axios({
    data: {
      classification: booleanValue,
      created_at: new Date()?.toISOString(),
    },
    method: 'PUT',
    url: url,
  })
    .then(() => {
      console.log('\n> Success log in updateTweet! :D');
    })
    .catch(err => {
      console.log('\n==> Error log in updateTweet:\n', err);
    });
};
