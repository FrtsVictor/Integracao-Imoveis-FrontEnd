import { Loading } from 'react-loading-ui';

export const loadSettings = {
  title: 'Carregando',
  text: 'Por favor aguarde! \n \n',
  progress: false,
  progressedClose: true,
  theme: 'dark',
};
export const Loadings = Loading(loadSettings);
