import React from 'react';
import { UserProvider } from '../components/core/UserProvider/UserProvider';
import { AuthProviderIntegracao } from './AuthProviderIntegracao';
import { UserImvProvider } from '../components/core/UserProvider/UserImvProvider';

export const AppProvider = ({ children }) => (
  <UserProvider>
    <UserImvProvider />
    <AuthProviderIntegracao>
      {children}
    </AuthProviderIntegracao>
    <UserImvProvider />
  </UserProvider>

);
