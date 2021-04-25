import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export const header = {
  tabs: [
    { id: 0, value: 'Início' },
    { id: 1, value: 'Sobre' },
    { id: 2, value: 'Contato' },
  ],
};

export const main = {
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
