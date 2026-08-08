import { useContext } from 'react';

import { AuthContext } from './AuthContext';

export const useSession = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useSession must be used within AuthProvider');
  }

  return context;
};
