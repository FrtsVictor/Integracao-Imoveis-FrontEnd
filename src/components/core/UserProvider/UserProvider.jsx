/* eslint-disable import/prefer-default-export */
import React, {
  createContext, useState,
} from 'react';

const initialValue = {
  user: {
    id: null,
    username: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    token: undefined,
  },
  setUser: () => {},
  clearUser: () => {},
};

export const UserContext = createContext(initialValue);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue.user);
  const clearUser = () => setUser(initialValue.user);

  //   useEffect(() => {
  // getFromLocalState + setUser
  //   }, []);

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
