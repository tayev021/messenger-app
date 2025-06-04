import { useQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../../api/apiAuth';

function useUser() {
  const {
    isLoading,
    data: user,
    isError,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: false,
  });

  return { isLoading, user, isError, error };
}

export { useUser };
