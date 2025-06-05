import styled from 'styled-components';

const StyledRow = styled.div`
  position: relative;

  svg {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.8rem;
    left: 1.6rem;
    color: var(--color-grey-400);
  }

  &:has(input:focus) svg {
    color: var(--color-sky-400);
  }
`;

export function Row({ children }) {
  return <StyledRow>{children}</StyledRow>;
}
