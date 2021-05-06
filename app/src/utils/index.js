import { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Home from '../pages';

const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

export const navBar = [
  { component: Home, path: '/', title: 'Início' },
  { component: About, path: '/about', title: 'Sobre' },
  { component: Contact, path: '/contact', title: 'Contato' },
];

export const main = {
  negative: 'Negativo',
  nullTweetText:
    'Opa! Parece que não temos conteúdo para te mostrar neste momento.',
  positive: 'Positivo',
  subTopText: 'O nosso sucesso depende da sua ajuda!',
  topText: 'Contribua com o empatwi',
  tweetTopText: 'Qual é o sentimento deste comentário?',
};

export const footer = {
  links: [
    { icon: <TwitterIcon />, url: 'https://twitter.com/empatwi' },
    { icon: <GitHubIcon />, url: 'https://github.com/empatwi' },
  ],
  text: '© Empatwi 2021',
};

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
