import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { changePassword as changePasswordAPI } from '../../api/apiPassword';

export function useChangePassword() {
  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate: changePassword } = useMutation({
    mutationFn: changePasswordAPI,
    onSuccess: () => {
      toast.success(
        'You successfully changed your password. Please sign in again.'
      );
      queryClient.setQueryData(['user'], null);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, changePassword };
}
