import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 1.2rem 0.6rem 5rem;
  border: 2px solid var(--color-sky-400);
  border-radius: 99rem;
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-smallest);

  ${(props) => props.type === 'file' && 'display: none;'}

  &::placeholder {
    color: var(--color-grey-500);
  }
`;
