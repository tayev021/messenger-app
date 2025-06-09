import styled from 'styled-components';

import { Background } from '../../../shared/ui/Background';
import { Signup } from '../../../widgets/signup';

const StyledSignupPage = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export function SignupPage() {
  return (
    <StyledSignupPage>
      <Signup />
    </StyledSignupPage>
  );
}
