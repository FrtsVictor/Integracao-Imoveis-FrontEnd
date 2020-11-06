import React, {
  useEffect, useState, createContext,
} from 'react';
// Api
import { apiIntegracaoImvs } from '../../../services/apiIntegracaoImoveis';
import { useUser } from './useUser';

export const ImvCidadeBairroId = createContext({});

export const UserImvProvider = ({ children }) => {
  const [idCidadeBairro, setIdCidadeBairro] = useState({});
  const { user: { id } } = useUser();

  useEffect(() => {
    const apiList = async () => apiIntegracaoImvs.user.getCidadeBairroId(148)
      .then((response) => {
        const allCidades = response.map((obj) => obj[0]);
        const cidades = [...new Set(allCidades)];

        const allBairros = response.map((obj) => obj[1]);
        const bairros = [...new Set(allBairros)];

        const allIds = response.map((obj) => obj[2]);
        const ids = [...new Set(allIds)];

        setIdCidadeBairro({
          ids,
          bairros,
          cidades,
        });
      });
    apiList();
  }, []);

  return (
    <ImvCidadeBairroId.Provider value={{
      idCidadeBairro,
    }}
    >
      {children}
    </ImvCidadeBairroId.Provider>

  );
};
