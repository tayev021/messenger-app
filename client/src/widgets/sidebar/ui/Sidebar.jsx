import styled from 'styled-components';

import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';

import { useShowSidebarContext } from '../../../shared/lib/hooks/useShowSidebarContext';

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

const List = styled.ul`
  height: 100%;
  overflow-y: auto;

  scrollbar-color: var(--color-grey-400) transparent;
  scrollbar-width: thin;
`;

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 2px solid var(--color-grey-300);
  }

  &:first-child {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: var(--color-grey-200-08);
  }

  span {
    display: inline-block;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: orange;
  }

  p {
    font-size: 1.4rem;
  }
`;

export function Sidebar() {
  const { isShowSidebar } = useShowSidebarContext();

  return (
    <StyledSidebar $isShowSidebar={isShowSidebar}>
      <SidebarHeader />
      <main>
        <List>
          <ListItem>
            <span></span>
            <div>
              <h5>Chat Title Placeholder</h5>
              <p>Some text placeholder</p>
            </div>
          </ListItem>
          <ListItem>
            <span></span>
            <div>
              <h5>Chat Title Placeholder</h5>
              <p>Some text placeholder</p>
            </div>
          </ListItem>
          <ListItem>
            <span></span>
            <div>
              <h5>Chat Title Placeholder</h5>
              <p>Some text placeholder</p>
            </div>
          </ListItem>
        </List>
      </main>
      <SidebarFooter />
    </StyledSidebar>
  );
}
