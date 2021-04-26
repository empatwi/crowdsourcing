/* eslint-disable no-undef */
import axios from 'axios';

export const getTweet = async () => {
  const urlString = `${process.env.REACT_APP_API_URL}/tweet/`;
  return await axios({ method: 'GET', url: urlString })
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
  const urlString = `${process.env.REACT_APP_API_URL}/tweet/${id}/`;
  await axios({
    data: {
      classification: booleanValue,
      created_at: new Date().toISOString(),
    },
    method: 'PUT',
    url: urlString,
  })
    .then(res => {
      console.log('updateTweet res', res);
    })
    .catch(err => {
      console.log('\n==> Error log in updateTweet:\n', err);
    });
};
