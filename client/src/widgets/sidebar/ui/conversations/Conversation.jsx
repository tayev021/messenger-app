import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 2px solid var(--color-grey-300);
  }

  &:first-child {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: var(--color-grey-200-08);
  }
`;

const Avatar = styled.span`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--color-grey-50);
  background-color: var(--color-sky-500);
`;

const LastMessage = styled.p`
  font-size: 1.4rem;
`;

export function Conversation({ conversation }) {
  const { partnerName, partnerSurname, lastMessage } = conversation;
  const avatarText = `${partnerName[0]}${partnerSurname[0]}`;
  const title = `${partnerName} ${partnerSurname}`;

  return (
    <ListItem>
      <Avatar>{avatarText}</Avatar>
      <div>
        <h5>{title}</h5>
        <LastMessage>{lastMessage}</LastMessage>
      </div>
    </ListItem>
  );
}
