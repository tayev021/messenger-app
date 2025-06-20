import styled, { keyframes } from 'styled-components';

import { useShowUserPanelContext } from '../../../shared/lib/hooks/useShowUserPanelContext';
import { Header } from './Header';
import { List } from './List';

const bgAppearance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const UserPanelContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-grey-700-06);
  animation: ${bgAppearance} 0.2s linear 1;
  z-index: 100;
`;

const panelAppearance = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

const StyledUserPanel = styled.div`
  width: 30rem;
  height: 100vh;
  position: relative;
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-right-large);
  animation: ${panelAppearance} 0.3s ease-out 0.2s 1;
  animation-fill-mode: both;
  z-index: 101;
`;

export function UserPanel() {
  const { isShowUserPanel } = useShowUserPanelContext();

  if (!isShowUserPanel) return null;

  return (
    <UserPanelContainer>
      <StyledUserPanel>
        <Header />
        <main>
          <List />
        </main>
      </StyledUserPanel>
    </UserPanelContainer>
  );
}
