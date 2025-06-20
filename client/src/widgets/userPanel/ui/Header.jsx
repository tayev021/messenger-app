import styled, { keyframes } from 'styled-components';
import { HiXMark } from 'react-icons/hi2';

import { ToggleShowUserPanel } from '../../../features/toggleShowUserPanel';
import { UserAvatar } from '../../../shared/ui/UserAvatar';
import { useUser } from '../../../shared/lib/hooks/useUser';

const StyledHeader = styled.header`
  margin-bottom: 4rem;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(90deg);
  }
`;

const ToggleContainer = styled.div`
  display: inline-block;
  position: relative;
  top: 1rem;
  left: 0.5rem;

  &:hover {
    animation: ${spin} 0.2s linear 1;
  }
`;

const FullName = styled.h4`
  font-size: 2.2rem;
  text-align: center;
  color: var(--color-sky-800);
`;

export function Header() {
  const { user } = useUser();

  return (
    <StyledHeader>
      <ToggleContainer>
        <ToggleShowUserPanel>
          <HiXMark />
        </ToggleShowUserPanel>
      </ToggleContainer>

      <UserAvatar />
      <FullName>{`${user.name} ${user.surname}`}</FullName>
    </StyledHeader>
  );
}
