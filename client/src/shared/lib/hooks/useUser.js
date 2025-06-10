import { useQuery } from '@tanstack/react-query';

import { getMe } from '../../api/apiAuth';

export function useUser() {
  const {
    isLoading,
    data: user,
    isError,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getMe,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { isLoading, user, isError, error };
}
