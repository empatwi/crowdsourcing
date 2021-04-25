// https://t.co/UODb0dJZ7W, https://t.co/KIVi8BPXrG
export const parseTweet = tweet => {
  if (tweet?.tweet_content) {
    let { tweet_content: content } = tweet;
    const regex = /https:\/\/t.co\/.*$/;
    return content.replace(regex, '');
  }
  return null;
};
