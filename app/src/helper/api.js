import axios from 'axios';

export const getTweet = async () => {
  /* try {
    // eslint-disable-next-line no-undef
    const urlString = `${process.env.REACT_APP_API_URL}/tweet/`;
    const response = await axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      url: urlString,
    });
    console.log('response', response);
  } catch (error) {
    console.error('error', error);
  } */

  // eslint-disable-next-line no-undef
  const urlString = `${process.env.REACT_APP_API_URL}/tweet/`;
  await axios({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    url: urlString,
  })
    .then(res => {
      console.log('res', res);
    })
    .catch(err => {
      console.log('err', err);
      return 'catch';
    });
};
