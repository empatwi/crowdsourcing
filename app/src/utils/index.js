import { decode } from 'ent';

export const parseTweet = tweet => {
  if (tweet?._id && tweet?.tweet_content) {
    const returnObject = {
      id: String(tweet?._id),
      tweet_content: decodeHTML(tweet?.tweet_content),
    };
    return returnObject;
  }
  return null;
};

export const decodeHTML = content => {
  // Removes strings with the format: https://t.co/UODb0dJZ7W, https://t.co/KIVi8BPXrG
  const regex = /https:\/\/t.co\/.*$/;
  content.replace(regex, '');

  // Decodes HTML entities such as "&amp;" (&), "&lt;" (<), etc
  return decode(content);
};
