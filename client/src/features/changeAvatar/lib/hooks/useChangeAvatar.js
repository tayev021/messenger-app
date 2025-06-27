import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { changeAvatar as changeAvatarAPI } from '../../api/apiAvatar';

export function useChangeAvatar() {
  const queryClient = useQueryClient();

  const {
    isPending: isLoading,
    isSuccess,
    mutate: changeAvatar,
  } = useMutation({
    mutationFn: changeAvatarAPI,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, isSuccess, changeAvatar };
}
