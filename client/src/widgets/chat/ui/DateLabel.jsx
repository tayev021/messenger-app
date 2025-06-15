import styled from 'styled-components';

const StyledDateLabel = styled.li`
  align-self: center;
  padding: 0.4rem 2.4rem;
  border-radius: 99rem;
  font-size: 1.3rem;
  color: var(--color-grey-50);
  background-color: var(--color-grey-700-06);
  box-shadow: var(--box-shadow-small);
`;

export function DateLabel({ timestamp }) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return <StyledDateLabel>{`${day} ${month} ${year}`}</StyledDateLabel>;
}
