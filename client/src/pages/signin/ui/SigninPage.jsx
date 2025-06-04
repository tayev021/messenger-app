import styled from 'styled-components';
import { Link } from 'react-router';

import Background from '../../../shared/ui/Background';
import { Signin } from '../../../widgets/signin';

const StyledSigninPage = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Footer = styled.footer`
  width: 32rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-medium);
`;

const P = styled.p`
  text-align: center;
`;

const StyledLink = styled(Link)`
  border-bottom: 2px solid transparent;
  color: var(--color-sky-500);

  &:hover {
    border-color: var(--color-sky-500);
  }
`;

export function SigninPage() {
  return (
    <StyledSigninPage>
      <Signin />
      <Footer>
        <P>
          New to Messenger? <StyledLink to="/signup">Signup!</StyledLink>
        </P>
      </Footer>
    </StyledSigninPage>
  );
}
