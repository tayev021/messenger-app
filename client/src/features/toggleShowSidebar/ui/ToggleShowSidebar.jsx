import styled from 'styled-components';
import {
  HiArrowLeftOnRectangle,
  HiArrowRightStartOnRectangle,
} from 'react-icons/hi2';

import { useShowSidebarContext } from '../../../shared/lib/hooks/useShowSidebarContext';

const Toggler = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: center;
`;

function ToggleShowSidebar() {
  const { isShowSidebar, toggleShowSideBar } = useShowSidebarContext();

  return (
    <Toggler onClick={toggleShowSideBar}>
      {isShowSidebar ? (
        <HiArrowLeftOnRectangle />
      ) : (
        <HiArrowRightStartOnRectangle />
      )}
    </Toggler>
  );
}

export { ToggleShowSidebar };
