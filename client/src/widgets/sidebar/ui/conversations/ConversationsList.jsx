import styled from 'styled-components';

import { useConversations } from '../../../../shared/lib/hooks/useConversations';
import { Spinner } from '../../../../shared/ui/Spinner';
import { Conversation } from './Conversation';

const List = styled.ul`
  height: 100%;
  overflow-y: auto;
  scrollbar-color: var(--color-grey-400) transparent;
  scrollbar-width: thin;
`;

export function ConversationsList() {
  const { isLoading, conversations } = useConversations();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {conversations.map((conversation) => (
        <Conversation conversation={conversation} key={conversation.id} />
      ))}
    </List>
  );
}
