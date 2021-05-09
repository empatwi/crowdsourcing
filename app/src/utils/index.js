import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';

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

export const about = {
  text:
    'Ajude-nos a criar uma base de dados de classificação dos sentimentos por trás de tweets em português.',
};

export const contacts = [
  {
    desc: 'Back end',
    image: '/images/fabiana.jpg',
    links: [
      { icon: <TwitterIcon />, url: 'https://twitter.com/fabianamasini' },
      {
        icon: <LinkedInIcon />,
        url: 'https://www.linkedin.com/in/fabianamasini',
      },
      {
        icon: <GitHubIcon />,
        url: 'https://github.com/fabianamasini',
      },
    ],
    name: 'Fabiana Masini',
  },
  {
    desc: 'Front end',
    image: '/images/leticia.jpg',
    links: [
      {
        icon: <LinkedInIcon />,
        url: 'https://www.linkedin.com/in/leticia-vigna',
      },
      {
        icon: <GitHubIcon />,
        url: 'https://github.com/letvigna',
      },
    ],
    name: 'Letícia Vigna',
  },
];

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
