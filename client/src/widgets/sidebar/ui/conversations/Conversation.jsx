import styled from 'styled-components';

import { NavLink } from 'react-router';
import { URL } from '../../../../shared/constants/constants';
import { Avatar } from '../../../../shared/ui/Avatar';

const ListItem = styled.li`
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

const StyledNavLink = styled(NavLink)`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  &.active {
    color: var(--color-grey-50);
    background-color: var(--color-sky-500);
  }

  &.active h5 {
    color: var(--color-grey-50);
  }

  &.active span {
    color: var(--color-sky-500);
    background-color: var(--color-grey-50);
  }
`;

const ConversationBody = styled.div`
  padding: 0.5rem 0;
`;

const Heading = styled.h5`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-sky-600);
`;

const Unwatched = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-grey-50);
  background-color: var(--color-sky-500);
`;

const LastMessage = styled.p`
  font-size: 1.4rem;
`;

export function Conversation({ conversation }) {
  const { partnerName, partnerSurname, lastMessage } = conversation;
  const fullName = `${partnerName} ${partnerSurname}`;
  const partnerInitials = partnerName[0] + partnerSurname[0];
  const conversationAvatar = conversation.avatar
    ? `${URL}/avatars/${conversation.avatar}`
    : '';
  const unwatched = conversation.unwatched > 9 ? '9+' : conversation.unwatched;

  return (
    <ListItem>
      <StyledNavLink to={`chats/${conversation.id}`}>
        <Avatar
          imageSrc={conversationAvatar}
          initials={partnerInitials}
          type="inline"
          size="small"
        />
        <ConversationBody>
          <Heading>
            {fullName}
            {conversation.unwatched > 0 && <Unwatched>{unwatched}</Unwatched>}
          </Heading>
          <LastMessage>{lastMessage}</LastMessage>
        </ConversationBody>
      </StyledNavLink>
    </ListItem>
  );
}
