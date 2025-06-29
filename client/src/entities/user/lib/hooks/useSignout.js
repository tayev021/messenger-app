import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signout as signoutAPI } from '../../api/apiAuth';

export function useSignout() {
  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate: signout } = useMutation({
    mutationFn: signoutAPI,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signout };
}
