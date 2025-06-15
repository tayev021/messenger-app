import styled from 'styled-components';
import { Link, useNavigate } from 'react-router';
import { HiArrowLeft } from 'react-icons/hi';

import { Chat } from '../../../widgets/chat';
import { useEffect } from 'react';
import { SendMessage } from '../../../features/sendMessage/';
import { useChat } from '../../../shared/lib/hooks/useChat';
import { PageLoading } from '../../pageLoading';

const StyledChatPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content minmax(12rem, 1fr) min-content;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  border-left: 2px solid var(--color-grey-300);
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-bottom-small);
  z-index: 1;
`;

const StyledLink = styled(Link)`
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
    transition: all 0.2s ease;
  }

  &:hover svg {
    color: var(--color-sky-500);
  }
`;

const Heading = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Footer = styled.footer`
  padding: 1rem 2rem;
  border-left: 2px solid var(--color-grey-300);
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-top-small);
  z-index: 1;
`;

export function ChatPage() {
  const navigate = useNavigate();
  const { isLoading, chat } = useChat();

  useEffect(
    function () {
      const closeChatPage = (e) => e.key === 'Escape' && navigate('/');
      document.addEventListener('keydown', closeChatPage);

      return () => document.removeEventListener('keydown', closeChatPage);
    },
    [navigate]
  );

  if (isLoading) return <PageLoading />;

  return (
    <StyledChatPage>
      <Header>
        <StyledLink to="/">
          <HiArrowLeft />
        </StyledLink>
        <Heading>Chat with {chat.partnerFullName}</Heading>
        <div> {/*TODO**/}</div>
      </Header>
      <main>
        <Chat />
      </main>
      <Footer>
        <SendMessage />
      </Footer>
    </StyledChatPage>
  );
}
