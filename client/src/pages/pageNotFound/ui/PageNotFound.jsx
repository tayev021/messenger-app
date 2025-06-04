import styled from 'styled-components';
import { Link } from 'react-router';
import { HiArrowLeft } from 'react-icons/hi2';

import Background from '../../../shared/ui/Background';

const StyledPageNotFound = styled.div`
  max-width: 35rem;
  position: relative;
  top: 45%;
  transform: translateY(-50%);
  padding: 2rem 3rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: var(--color-sky-100-075);
  box-shadow: var(--box-shadow-medium);
`;

const H2 = styled.h2`
  margin-bottom: 1rem;
  font-size: 3.2rem;
  color: var(--color-sky-950);
`;

const P = styled.p`
  margin-bottom: 4rem;
  text-align: justify;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.4rem 1rem;

  svg {
    color: var(--color-grey-50);
  }

  span {
    margin-left: 1rem;
  }

  &::before {
    content: '';
    width: 3.6rem;
    height: 3.6rem;
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 99rem;
    background: var(--color-sky-500);
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
  }
`;

export function PageNotFound() {
  return (
    <Background>
      <StyledPageNotFound>
        <H2 as="h2">404</H2>
        <P>The page you are looking for could not be found</P>
        <Actions>
          <StyledLink to={-1}>
            <HiArrowLeft />
            <span>Back to Previous Page</span>
          </StyledLink>
          <StyledLink to="/">
            <HiArrowLeft />
            <span>Back to Home Page</span>
          </StyledLink>
        </Actions>
      </StyledPageNotFound>
    </Background>
  );
}
