import styled from 'styled-components';
import { Outlet } from 'react-router';

import { Sidebar } from '../../widgets/sidebar';
import { Background } from '../../shared/ui/Background';
import { UserPanel } from '../../widgets/userPanel';

const StyledAppLayout = styled.div`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr;
`;

export function AppLayout() {
  return (
    <StyledAppLayout>
      <UserPanel />
      <Sidebar />
      <Background as="main">
        <Outlet />
      </Background>
    </StyledAppLayout>
  );
}
