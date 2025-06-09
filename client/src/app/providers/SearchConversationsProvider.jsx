import { useState } from 'react';

import { SearchConversationsContext } from '../../shared/lib/context/SearchConversationsContext';

export function SearchConversationsProvider({ children }) {
  const [search, setSearch] = useState('');

  const handleChange = setSearch;

  return (
    <SearchConversationsContext.Provider value={{ search, handleChange }}>
      {children}
    </SearchConversationsContext.Provider>
  );
}
