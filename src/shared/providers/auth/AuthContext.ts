import type { Session } from '@supabase/supabase-js';

import { createContext } from 'react';

export type AuthContextValue = {
  session: Session | null;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
