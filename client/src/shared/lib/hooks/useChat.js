import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { getChat } from '../../api/apiChat';

export function useChat() {
  const { chatId } = useParams();
  const { isLoading, data: chat } = useQuery({
    queryKey: ['chat', chatId],
    queryFn: () => getChat(chatId),
    retry: false,
  });

  return { isLoading, chat };
}
