import { useParams } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { watchMessage as watchMessageAPI } from '../../api/apiMessage';

export function useWatchMessage() {
  const { chatId } = useParams();
  const queryClient = useQueryClient();

  const { mutate: watchMessage } = useMutation({
    mutationFn: (messageId) => watchMessageAPI({ chatId, messageId }),
    onSuccess: (chat) => {
      queryClient.setQueryData(['chat', chatId], chat);
    },
    onError: (err) => toast.error(err.message),
  });

  return { watchMessage };
}
