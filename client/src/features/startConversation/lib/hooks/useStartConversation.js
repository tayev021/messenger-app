import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { startConversation as startConversationAPI } from '../../../../shared/api/apiConversations';
import { useNavigate } from 'react-router';

export function useStartConversation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isPending: isLoading,
    isSuccess,
    mutate: startConversationWith,
  } = useMutation({
    mutationFn: (id) => {
      return startConversationAPI({ partnerId: id });
    },
    onSuccess: (chatId) => {
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
      navigate(`chats/${chatId}`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, isSuccess, startConversationWith };
}
