import styled from 'styled-components';
import { HiBars3 } from 'react-icons/hi2';

import { SearchConversations } from '../../../features/searchConversations/';

const Header = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.5rem 1rem 0.5rem;
  box-shadow: var(--box-shadow-bottom-smallest);
`;

const MenuBox = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: center;

  svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
`;

export default function SidebarHeader() {
  return (
    <Header>
      <MenuBox>
        <HiBars3 />
      </MenuBox>
      <SearchConversations />
    </Header>
  );
}
