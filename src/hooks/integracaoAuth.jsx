import React, {
  createContext, useCallback, useContext,
} from 'react';
import { useUser } from '../components/core/UserProvider';
import apiIntegracao from '../services/apiIntegracaoImoveis';
import { LOCAL_STORAGE_KEYS } from '../constants';

const AuthContextIntegracao = createContext();

const AuthProviderIntegracao = ({ children }) => {
  const { user, setUser } = useUser();

  const login = useCallback(
    async (username, password) => {
      const authResponse = await apiIntegracao.user.login(username, password);
      localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthRoken, authResponse.data);

      if (authResponse) {
        const userResponse = await apiIntegracao.user.getByUserName(username, authResponse.data);

        setUser(userResponse);
      }
    }, [],
  );

  const logout = useCallback(() => {
    // TODO: refatorar para retornar valor equivalente ao
    // initialValue de UserProvider ao inves de null
    setUser(null);
  }, []);

  return (
    <AuthContextIntegracao.Provider
    // TODO: find a place to user, duplicated with UserProvider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContextIntegracao.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContextIntegracao);

  if (!context) {
    throw new Error('useAuth error');
  }
  return context;
}

export { AuthProviderIntegracao, useAuth };
