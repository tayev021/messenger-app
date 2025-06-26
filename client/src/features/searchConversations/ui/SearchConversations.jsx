import { useSearchConversationsContext } from '../../../shared/lib/hooks/useSearchConversationsContext';
import { SearchInput } from '../../../shared/ui/SearchInput';

export function SearchConversations() {
  const { search, handleChange } = useSearchConversationsContext();

  return (
    <SearchInput
      value={search}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
