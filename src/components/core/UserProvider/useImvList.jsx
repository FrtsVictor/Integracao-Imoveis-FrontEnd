/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { ImvCidadeBairroId } from './UserImvProvider';

export const useImvList = () => {
  const idCidadeBairroList = useContext(ImvCidadeBairroId);

  if (!idCidadeBairroList) {
    throw new Error('In order to use this hook, make sure to be under thes UserProvider');
  }

  return idCidadeBairroList;
};
