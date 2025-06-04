import styled from 'styled-components';

import { HiBars3, HiMiniMagnifyingGlass } from 'react-icons/hi2';

const Header = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.5rem 1rem 0.5rem;
  box-shadow: var(--box-shadow-bottom-smallest);

  svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
`;

const MenuBox = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: center;
`;

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

export default function SidebarHeader() {
  return (
    <Header>
      <MenuBox>
        <HiBars3 />
      </MenuBox>
      <Search>
        <HiMiniMagnifyingGlass />
        <Input placeholder="Search..." />
      </Search>
    </Header>
  );
}
