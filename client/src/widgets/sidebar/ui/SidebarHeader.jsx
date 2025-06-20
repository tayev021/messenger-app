import styled from 'styled-components';
import { HiBars3 } from 'react-icons/hi2';

import { ToggleShowUserPanel } from '../../../features/toggleShowUserPanel';
import { SearchConversations } from '../../../features/searchConversations/';

const Header = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.5rem 1rem 0.7rem;
  box-shadow: var(--box-shadow-bottom-smallest);
`;

export function SidebarHeader() {
  return (
    <Header>
      <ToggleShowUserPanel>
        <HiBars3 />
      </ToggleShowUserPanel>
      <SearchConversations />
    </Header>
  );
}
