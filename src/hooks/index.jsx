import React from 'react';
import { AuthProviderIntegracao } from './integracaoAuth';

const AppProvider = ({ children }) => (
  <AuthProviderIntegracao>
    {children}
  </AuthProviderIntegracao>
);

export default AppProvider;
