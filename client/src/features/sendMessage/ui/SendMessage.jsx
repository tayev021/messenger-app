import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { HiPaperAirplane } from 'react-icons/hi2';

import { useSendMessage } from '../lib/hooks/useSendMessage';

const Form = styled.form`
  width: 100%;
  max-width: 90rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 3.2rem;
  max-height: 10rem;
  padding: 0.6rem 1rem;
  border: none;
  border-bottom: 3px solid var(--color-grey-400);
  font-size: 1.4rem;
  resize: none;
  overflow-y: auto;
  scrollbar-width: none;

  &::placeholder {
    color: var(--color-grey-400);
  }

  &:focus {
    border-color: var(--color-sky-400);
    outline: none;
  }
`;

const fly = keyframes`
  0% {
    transform: rotate(0deg) translateY(-0.4rem);
  }
  25% {
    transform: rotate(20deg) translateY(0);
  }
  50% {
    transform: rotate(0deg) translateY(0.4rem);
  }
  75% {
    transform: rotate(-20deg) translateY(0);
  }
  100% {
    transform: rotate(0) translateY(-0.4rem);
  }
`;

const SendButton = styled.button`
  &:focus {
    outline: none;
  }

  svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-sky-600);
  }

  &:hover svg,
  &:focus svg {
    animation: ${fly} 2s linear infinite;
  }
`;

export function SendMessage() {
  const refTextarea = useRef();
  const [message, setMessage] = useState('');
  const { isLoading, sendMessage } = useSendMessage();

  useEffect(
    function () {
      if (refTextarea.current) {
        refTextarea.current.style.height = '3.2rem';

        if (refTextarea.current.value.length) {
          refTextarea.current.style.height = `${refTextarea.current.scrollHeight}px`;
        }
      }
    },
    [refTextarea?.current?.scrollHeight]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (message.length > 0) {
      sendMessage(message);
      setMessage('');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        type="text"
        ref={refTextarea}
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SendButton disabled={isLoading}>
        <HiPaperAirplane />
      </SendButton>
    </Form>
  );
}
