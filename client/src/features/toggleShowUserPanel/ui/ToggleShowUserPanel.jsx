import styled from 'styled-components';

import { useShowUserPanelContext } from '../../../shared/lib/hooks/useShowUserPanelContext';

const Toggler = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: center;

  svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
`;

export function ToggleShowUserPanel({ children }) {
  const { toggleShowUserPanel } = useShowUserPanelContext();

  return <Toggler onClick={toggleShowUserPanel}>{children}</Toggler>;
}
