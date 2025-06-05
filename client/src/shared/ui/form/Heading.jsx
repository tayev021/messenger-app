import styled from 'styled-components';

const H3 = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;

export function Heading({ children }) {
  return <H3>{children}</H3>;
}
