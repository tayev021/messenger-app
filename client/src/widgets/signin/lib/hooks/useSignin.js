import { useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signin as signinAPI } from '../../../../shared/api/apiAuth';

function useSignin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: signin } = useMutation({
    mutationFn: signinAPI,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      navigate('/', { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signin };
}

export { useSignin };
