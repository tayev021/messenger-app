import styled from 'styled-components';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

import { useSearchConversationsContext } from '../../../shared/lib/hooks/useSearchConversationsContext';

const Search = styled.div`
  position: relative;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    top: 0.6rem;
    left: 1.2rem;
    color: var(--color-grey-400);
  }

  &:has(input:focus) svg {
    color: var(--color-sky-400);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem 1rem 0.4rem 4rem;
  border: 2px solid var(--color-grey-300);
  border-radius: 99rem;
  font-size: 1.4rem;
  box-shadow: var(--box-shadow-smallest);

  &::placeholder {
    color: var(--color-grey-400);
  }

  &:focus {
    border-color: var(--color-sky-400);
  }
`;

export function SearchConversations() {
  const { search, handleChange } = useSearchConversationsContext();

  function onChange(e) {
    handleChange(e.target.value);
  }

  return (
    <Search>
      <HiMiniMagnifyingGlass />
      <Input placeholder="Search..." value={search} onChange={onChange} />
    </Search>
  );
}
