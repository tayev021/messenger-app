import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  padding: 0.6rem 1.2rem;
  border: 2px solid var(--color-sky-400);
  border-radius: 99rem;
  text-align: center;
  color: var(--color-sky-400);
  box-shadow: var(--box-shadow-smallest);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--box-shadow-small);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--box-shadow-smallest);
  }
`;
