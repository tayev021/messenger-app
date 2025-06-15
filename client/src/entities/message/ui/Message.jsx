import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { HiEye, HiOutlineClock } from 'react-icons/hi2';

import { formatDateNumber } from '../../../shared/lib/utils/formatDateNumber';
import { useWatchMessage } from '../lib/hooks/useWatchMessage';

const StyledMessage = styled.li`
  width: 70%;
  min-width: 30rem;
  max-width: 50rem;
  position: relative;
  right: 0;
  padding: 0.8rem 1.6rem 0.4rem 1.2rem;
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

const Main = styled.main`
  margin: 0.2rem 1.4rem;
  font-size: 1.4rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
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

function getTime(timestamp) {
  const date = new Date(timestamp);
  const hours = formatDateNumber(date.getHours());
  const minutes = formatDateNumber(date.getMinutes());

  return `${hours}:${minutes}`;
}

export function Message({ message, userId }) {
  const refMessage = useRef();
  const { watchMessage } = useWatchMessage();

  const isMyMessage = userId === message.authorId;
  let isWatched = !!message.isWatched.length;

  useEffect(
    function () {
      if (!isMyMessage && !isWatched) {
        const observer = new IntersectionObserver(
          () => setTimeout(() => watchMessage(message.id), 1000),
          { threshold: 1.0 }
        );

        observer.observe(refMessage.current);
      }
    },
    [isMyMessage, isWatched, message.id, watchMessage]
  );

  return (
    <StyledMessage
      ref={refMessage}
      $isMyMessage={isMyMessage}
      $isWatched={isWatched}
    >
      <Header>
        <Heading>{message.authorFullName}</Heading>
        {isMyMessage && <Watched $isWatched={isWatched} />}
      </Header>
      <Main>{message.text}</Main>
      <Footer>
        <HiOutlineClock />
        <Time>{getTime(message.timestamp)}</Time>
      </Footer>
      {/* <TailIcon $isMyMessage={isMyMessage} $isWatched={isWatched} /> */}
    </StyledMessage>
  );
}
