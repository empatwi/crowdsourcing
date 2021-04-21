import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export const header = {
  tabs: [{ value: 'Início' }, { value: 'Sobre' }, { value: 'Contato' }],
};

export const footer = {
  links: [
    { icon: <TwitterIcon />, url: 'https://twitter.com/empatwi' },
    { icon: <GitHubIcon />, url: 'https://github.com/empatwi' },
  ],
  text: '© Empatwi 2021',
};
