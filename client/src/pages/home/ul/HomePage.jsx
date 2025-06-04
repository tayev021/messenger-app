import styled from 'styled-components';

const StyledHomePage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const H2 = styled.h2`
  padding: 0.5rem 3rem;
  border-radius: 99rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey-50);
  background-color: var(--color-grey-700-06);
  box-shadow: var(--box-shadow-small);
`;

export function HomePage() {
  return (
    <StyledHomePage>
      <H2>Choose who to write to</H2>
    </StyledHomePage>
  );
}
