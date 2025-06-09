import { useContext } from 'react';

import { SearchConversationsContext } from '../context/SearchConversationsContext';

export function useSearchConversationsContext() {
  const context = useContext(SearchConversationsContext);

  if (!context)
    throw new Error(
      'SearchConversationsContext was used outside of SearchConversationsProvider'
    );

  return context;
}
