import styled from 'styled-components';
import { Outlet } from 'react-router';

import { Sidebar } from '../../widgets/sidebar';
import Background from '../../shared/ui/Background';

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Background as="main">
        <Outlet />
      </Background>
    </StyledAppLayout>
  );
}
