import React from 'react';
import { UserProvider } from '../components/core/UserProvider/UserProvider';
import { AuthProviderIntegracao } from './AuthProviderIntegracao';

export const AppProvider = ({ children }) => (
  <UserProvider>
    <AuthProviderIntegracao>
      {children}
    </AuthProviderIntegracao>
  </UserProvider>

);
