import styled from 'styled-components';
import { useEffect, useRef } from 'react';

import { useChat } from '../../../shared/lib/hooks/useChat';
import { useUser } from '../../../shared/lib/hooks/useUser';
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
  const refMessagesList = useRef();
  const { user } = useUser();
  const {
    chat: { messages = [] },
  } = useChat();

  const messagesList = [];
  let previousDay = null;

  useEffect(
    function () {
      if (refMessagesList.current)
        refMessagesList.current.scrollTop =
          refMessagesList.current.scrollHeight;
    },
    [messages.length]
  );

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    let isNewDay = false;

    if (!previousDay || isNewDate(previousDay, message.timestamp)) {
      isNewDay = true;
      previousDay = message.timestamp;
    }

    if (isNewDay) {
      messagesList.push(
        <DateLabel timestamp={message.timestamp} key={message.timestamp} />
      );
    }

    messagesList.push(
      <Message message={message} userId={user.id} key={message.id} />
    );
  }

  return <MessagesList ref={refMessagesList}>{messagesList}</MessagesList>;
}
