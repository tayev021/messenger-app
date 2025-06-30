import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { HiEye, HiOutlineClock } from 'react-icons/hi2';

import { useWatchMessage } from '../lib/hooks/useWatchMessage';
import { Images } from './Images';
import { getTime } from '../lib/utils/getTime';

const StyledMessage = styled.li`
  width: 70%;
  min-width: 30rem;
  max-width: 50rem;
  position: relative;
  right: 0;
  border-radius: 1.2rem;
  box-shadow: var(--box-shadow-medium);
  transition: all 1s linear;

  background-color: ${(props) =>
    !props.$isMyMessage && !props.$isWatched
      ? 'var(--color-sky-200)'
      : 'var(--color-grey-50)'};
  ${(props) =>
    props.$isMyMessage &&
    'align-self: flex-end; border-bottom-right-radius: 0;'}
  ${(props) => !props.$isMyMessage && `border-bottom-left-radius: 0;`}

  &::after {
    content: '';
    width: 1.1rem;
    height: 1rem;
    display: block;
    position: absolute;
    bottom: 0;

    ${(props) => (props.$isMyMessage ? `right: -1rem;` : 'left: -1rem;')}
    transition: all 1s linear;
    background-color: ${(props) =>
      !props.$isMyMessage && !props.$isWatched
        ? 'var(--color-sky-200)'
        : 'var(--color-grey-50)'};
    clip-path: ${(props) =>
      props.$isMyMessage
        ? `polygon(0 0, 0% 100%, 100% 100%);`
        : 'polygon(100% 0, 0% 100%, 100% 100%);'};
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 1.2rem;
`;

const Heading = styled.h5`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-sky-600);
`;

const Watched = styled(HiEye)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${(props) =>
    props.$isWatched ? 'var(--color-sky-600)' : 'var(--color-grey-200)'};
`;

const Text = styled.p`
  margin: 1rem 2rem 0.2rem;
  font-size: 1.4rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0.4rem 1.2rem;
  color: var(--color-grey-600);

  svg {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;
  }
`;

const Time = styled.div`
  font-size: 1.1rem;
`;

export function Message({ message, userId, refFirstUnwatched = null }) {
  const refMessage = useRef();
  const { watchMessage } = useWatchMessage();

  const isMyMessage = userId === message.authorId;
  let isWatched = !!message.isWatched.length;

  useEffect(
    function () {
      if (!isMyMessage && !isWatched) {
        const current = refMessage?.current;

        if (current) {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) watchMessage(message.id);
            },
            { threshold: 1 }
          );

          observer.observe(current);

          return () => observer.unobserve(current);
        }
      }
    },
    [isMyMessage, isWatched, message, refMessage, watchMessage]
  );

  return (
    <StyledMessage
      ref={refMessage}
      $isMyMessage={isMyMessage}
      $isWatched={isWatched}
    >
      <Header ref={refFirstUnwatched}>
        <Heading>{message.authorFullName}</Heading>
        {isMyMessage && <Watched $isWatched={isWatched} />}
      </Header>
      <main>
        <Images images={message.images} />
        {message.text && <Text>{message.text}</Text>}
      </main>
      <Footer>
        <HiOutlineClock />
        <Time>{getTime(message.timestamp)}</Time>
      </Footer>
    </StyledMessage>
  );
}
