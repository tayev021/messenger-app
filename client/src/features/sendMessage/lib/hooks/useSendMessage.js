import { useParams } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { sendMessage as sendMessageAPI } from '../../api/apiMessage';

export function useSendMessage() {
  const { chatId } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, mutate: sendMessage } = useMutation({
    mutationFn: (message) => sendMessageAPI({ chatId, message }),
    onSuccess: (chat) => {
      queryClient.setQueryData(['chat', chatId], chat);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, sendMessage };
}
