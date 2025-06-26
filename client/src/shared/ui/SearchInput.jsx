import styled from 'styled-components';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const StyledSearch = styled.div`
  width: 100%;
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
  color: var(--color-grey-800);
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-smallest);

  &::placeholder {
    color: var(--color-grey-400);
  }

  &:focus {
    border-color: var(--color-sky-400);
  }
`;

export function SearchInput({ value, onChange }) {
  return (
    <StyledSearch>
      <HiMiniMagnifyingGlass />
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </StyledSearch>
  );
}
