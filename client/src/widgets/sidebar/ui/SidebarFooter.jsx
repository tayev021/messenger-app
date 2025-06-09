import styled from 'styled-components';

import { ToggleShowSidebar } from '../../../features/toggleShowSidebar/';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.5rem;
  box-shadow: var(--box-shadow-top-smallest);

  svg {
    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;
  }
`;

const Copyright = styled.p`
  margin-left: 1rem;
  font-size: 1.2rem;
  text-align: center;
  white-space: nowrap;
  color: var(var(--color-grey-600));
`;

const TelegramLink = styled.a`
  margin-left: 5px;
  border-bottom: 2px solid transparent;
  color: var(--color-sky-600);

  &:hover {
    border-color: var(--color-sky-600);
  }
`;

export function SidebarFooter() {
  return (
    <Footer>
      <ToggleShowSidebar />
      <Copyright>
        &copy; 2025 Eugene Taranov
        <TelegramLink href="https://t.me/tayev" target="_blank">
          t.me/tayev
        </TelegramLink>
      </Copyright>
    </Footer>
  );
}
