import axios from 'axios';

export const getTweet = async () => {
  // eslint-disable-next-line no-undef
  const urlString = `${process.env.REACT_APP_API_URL}/tweet/`;
  return await axios({ method: 'GET', url: urlString })
    .then(res => {
      if (res?.status === 200 && res?.data?.length === 1) return res?.data[0];
      return null;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};
