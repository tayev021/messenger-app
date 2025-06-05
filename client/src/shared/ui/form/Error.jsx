import styled from 'styled-components';

const StyledError = styled.span`
  position: absolute;
  top: -2.2rem;
  left: 0;
  font-size: 1.3rem;
  font-style: italic;
  color: var(--color-red-500);
`;

export function Error({ error }) {
  if (!error) return null;

  return <StyledError>{error}</StyledError>;
}
