// https://t.co/UODb0dJZ7W, https://t.co/KIVi8BPXrG
export const parseTweet = tweet => {
  if (tweet?._id && tweet?.tweet_content) {
    const regex = /https:\/\/t.co\/.*$/;
    const returnObject = {
      id: String(tweet?._id),
      tweet_content: tweet?.tweet_content?.replace(regex, ''),
    };
    return returnObject;
  }
  return null;
};
