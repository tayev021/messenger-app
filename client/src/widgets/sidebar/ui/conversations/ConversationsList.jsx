import styled from 'styled-components';

import { useConversations } from '../../../../shared/lib/hooks/useConversations';
import { Spinner } from '../../../../shared/ui/Spinner';
import { Conversation } from './Conversation';
import { NewConversation } from './NewConversation';

const List = styled.ul`
  height: 100%;
  overflow-y: auto;
  scrollbar-color: var(--color-grey-400) transparent;
  scrollbar-width: thin;
`;

export function ConversationsList() {
  const { isLoading, conversations } = useConversations();

  if (isLoading) return <Spinner />;

  const list = conversations.map((conversation) => (
    <Conversation conversation={conversation} key={conversation.id} />
  ));

  list.push(<NewConversation key="new-conversation" />);

  return <List>{list}</List>;
}
