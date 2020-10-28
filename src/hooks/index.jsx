import React from 'react';
import { UserProvider } from '../components/core/UserProvider';
import { AuthProviderIntegracao } from './integracaoAuth';

const AppProvider = ({ children }) => (
  <UserProvider>
    <AuthProviderIntegracao>
      {children}
    </AuthProviderIntegracao>
  </UserProvider>

);

export default AppProvider;
