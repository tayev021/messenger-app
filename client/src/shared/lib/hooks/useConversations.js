import { useQuery } from '@tanstack/react-query';

import { getConversations } from '../../api/apiConversations';
import { useSearchConversationsContext } from './useSearchConversationsContext';

export function useConversations() {
  const { isLoading, data: conversations } = useQuery({
    queryKey: ['conversations'],
    queryFn: getConversations,
    refetchInterval: 5000,
  });
  const { search } = useSearchConversationsContext();

  let searchedConversations = [];

  if (search) {
    searchedConversations = conversations.filter(
      ({ partnerName, partnerSurname }) => {
        const title = `${partnerName} ${partnerSurname}`.toLowerCase();
        return title.includes(search.toLowerCase());
      }
    );
  } else {
    searchedConversations = conversations;
  }

  return { isLoading, conversations: searchedConversations };
}
