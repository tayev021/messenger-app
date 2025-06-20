import { useMutation, useQueryClient } from '@tanstack/react-query';

import { signout as signoutAPI } from '../../api/apiSignout';
import toast from 'react-hot-toast';

export function useSignout() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: signout } = useMutation({
    mutationFn: signoutAPI,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signout };
}
