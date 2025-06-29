import styled from 'styled-components';
import { useEffect, useRef } from 'react';

import { useChat } from '../../../shared/lib/hooks/useChat';
import { useUser } from '../../../entities/user';
import { isNewDate } from '../../../shared/lib/utils/isNewDate';
import { DateLabel } from './DateLabel';
import { Message } from '../../../entities/message/ui/Message';

const MessagesList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  overflow-y: auto;
  scrollbar-color: var(--color-grey-500) transparent;
  scrollbar-width: thin;

  & > :first-child {
    margin-top: auto;
  }
`;

export function Chat() {
  const refFirstUnwatched = useRef();
  const refEnd = useRef();
  const { user } = useUser();
  const {
    chat: { messages = [] },
  } = useChat();

  const messagesList = [];
  let firstUnwatched = null;
  let previousDay = null;

  useEffect(
    function () {
      if (refFirstUnwatched?.current) {
        refFirstUnwatched.current?.scrollIntoView(false);
      } else if (refEnd?.current) {
        refEnd.current?.scrollIntoView(false);
      }
    },
    [messages.length]
  );

  for (let message of messages) {
    if (!previousDay || isNewDate(previousDay, message.timestamp)) {
      messagesList.push(
        <DateLabel timestamp={message.timestamp} key={message.timestamp} />
      );

      previousDay = message.timestamp;
    }

    if (
      !firstUnwatched &&
      message.authorId !== user.id &&
      !message.isWatched.includes(user.id)
    ) {
      firstUnwatched = message.id;
    }

    messagesList.push(
      <Message
        message={message}
        userId={user.id}
        key={message.id}
        refFirstUnwatched={
          firstUnwatched === message.id ? refFirstUnwatched : null
        }
      />
    );
  }

  return (
    <MessagesList>
      {messagesList}
      <div ref={refEnd}></div>
    </MessagesList>
  );
}
