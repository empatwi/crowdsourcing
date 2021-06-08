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
  cancel: 'Cancelar',
  confirm: 'Confirmar denúncia',
  confirmText:
    'Você tem certeza que deseja denunciar este tweet como conteúdo impróprio? Esta ação é irreversível.',
  disclaimer:
    'Não nos responsabilizamos por qualquer conteúdo ofensivo. Os tweets apresentados não são de nossa autoria.',
  negative: 'Negativo',
  nullTweetText:
    'Opa! Parece que não temos conteúdo para te mostrar neste momento.',
  okay: 'Ok',
  positive: 'Positivo',
  reportText: 'Denunciar conteúdo ofensivo',
  subTopText: 'O nosso sucesso depende da sua ajuda!',
  topText: 'Contribua com o empatwi',
  tweetTopText: 'Qual é o sentimento deste comentário?',
};

export const about = {
  text: [
    'Ajude-nos a criar uma base de dados com a classificação de sentimentos por trás de tweets aleatórios em português.',
    'Cada classificação ajudará a alimentar uma base de dados que será utilizada no treinamento de um algoritmo de aprendizagem de máquina, referente à nossa pesquisa sobre Processamento de Linguagem Natural em português. Ou seja, cada contribuição é importante! <3',
    'ㅤㅤㅤ',
    'Mas por que não utilizar uma já pronta?',
    'As bases de dados já existentes ou são apenas para textos curtos em inglês, ou para textos em português que são longos demais para o nosso objetivo, que se limita pelos 240 caracteres permitidos pelo Twitter.',
    'ㅤㅤㅤ',
    'Vale reforçar que os textos apresentados para classificação são tweets reais retirados diretamente da rede social, e não de autoria nossa. Se não entender algum comentário ou não souber como o classificar, tudo bem! Mesmo assim, escolha a opção que mais pareça correta para a situação.',
    'ㅤㅤㅤ',
    'Alguma dúvida ou comentário? Entre em contato conosco pelo empatwiapp@gmail.com ou através das nossas redes sociais encontradas na aba de contato.',
    'Desde já, obrigada pela ajuda! :)',
  ],
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
