import { useQuery } from '@tanstack/react-query';

import { useSession } from '@/app/providers/auth/useSession';

import { getProfile } from '../lib/profile';
import { queryKeys } from '../queryKeys/queryKeys';

export const useProfile = () => {
  const { session, isLoading: isSessionLoading } = useSession();

  const userId = session?.user.id;

  const query = useQuery({
    queryKey: queryKeys.profile.byId(userId ?? ''),
    queryFn: () => getProfile(userId!),
    enabled: !!userId,
  });

  return {
    profile: query.data ?? null,
    isLoading: isSessionLoading || query.isLoading,
  };
};
