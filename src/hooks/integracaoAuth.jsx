import React, {
  createContext, useState, useContext, useCallback,
} from 'react';
import apiIntegracao from '../services/apiIntegracaoImoveis';

const AuthContextIntegracao = createContext();

const AuthProviderIntegracao = ({ children }) => {
  const [token, setToken] = useState('');
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@Integracao:user');
    if (user) {
      return { user: JSON.parse(user) };
    }
    return {};
  });

  const login = useCallback(
    (username, password) => {
      apiIntegracao.user.login(username, password)
        .then((resp) => apiIntegracao.user.getByUserName(username, resp.data)
          .then((response) => {
            localStorage.setItem('@Integracao:user', JSON.stringify(response));
            setData({ response });
            console.log('tenreei');
          }));
    }, [],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('@Integracao:user');
    setData({});
  }, []);

  return (
    <AuthContextIntegracao.Provider
      value={{ user: data.user, login, logout }}
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

// const login = useCallback(
//     (username, password) => {
//       apiIntegracao.user.login(username, password)
//         .then((resp) => {
//           const user = {
//             username,
//             token: resp.data,
//           };
//           localStorage.setItem('@Integracao:user', JSON.stringify(user));
//           setData({ user });
//         });
//     }, [],
//   );

// const getUserByUsernames = useCallback(
//   (username) => {
//     apiIntegracao.user.getByUserName(username);

//     localStorage.setItem('@Integracao:user', JSON.stringify(user));
//     setData({ user });
//   }, [],
// );

// const login = useCallback(
//     (username, password) => {
//       apiIntegracao.user.login(username, password)
//         .then((resp) => {
//           const user = {
//             username,
//             token: resp.data,
//           };
//           localStorage.setItem('@Integracao:user', JSON.stringify(user));
//           setData({ user });
//         });
//     }, [],
//   );
