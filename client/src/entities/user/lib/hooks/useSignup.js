import { useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signupAPI } from '../../api/apiAuth';

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate: signup } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      navigate('/', { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signup };
}
