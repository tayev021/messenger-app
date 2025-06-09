import { useQuery } from '@tanstack/react-query';

import { getConversations } from '../../api/apiConversations';

export function useConversations() {
  const { isLoading, data: conversations } = useQuery({
    queryKey: ['conversations'],
    queryFn: getConversations,
  });

  return { isLoading, conversations };
}
