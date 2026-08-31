import { useQuery } from '@tanstack/react-query';

import { useSession } from '@/shared/providers/auth/model/use-session';

import { getProfile } from '../api';
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
    ...query,
    profile: query.data ?? null,
    isLoading: isSessionLoading || query.isLoading,
  };
};
