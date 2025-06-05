import styled from 'styled-components';

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 99rem;
  color: var(--color-grey-50);
  background-color: var(--color-sky-400);
  box-shadow: var(--box-shadow-smallest);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--box-shadow-small);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--box-shadow-smallest);
  }
`;

export function Submit({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
