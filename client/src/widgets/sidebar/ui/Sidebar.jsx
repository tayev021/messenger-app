import styled from 'styled-components';

import { SidebarHeader } from './SidebarHeader';
import { SidebarFooter } from './SidebarFooter';

import { useShowSidebarContext } from '../../../shared/lib/hooks/useShowSidebarContext';
import { ConversationsList } from './conversations/ConversationsList';

const StyledSidebar = styled.aside`
  width: ${(props) => (props.$isShowSidebar ? '30rem' : '5.5rem')};
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content minmax(12rem, 1fr) min-content;
  box-shadow: var(--box-shadow-right-large);
  transition: all 0.2s ease;
  overflow: hidden;
`;

export function Sidebar() {
  const { isShowSidebar } = useShowSidebarContext();

  return (
    <StyledSidebar $isShowSidebar={isShowSidebar}>
      <SidebarHeader />
      <main>
        <ConversationsList />
      </main>
      <SidebarFooter />
    </StyledSidebar>
  );
}
