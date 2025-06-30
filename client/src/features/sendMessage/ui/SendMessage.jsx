import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { HiPaperAirplane, HiPaperClip } from 'react-icons/hi2';

import { useSendMessage } from '../lib/hooks/useSendMessage';

const Form = styled.form`
  width: 100%;
  max-width: 90rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0 auto;
`;

const Attachment = styled.div``;

const ImagesLabel = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-grey-600);
  }

  &:hover svg {
    color: var(--color-sky-500);
  }
`;

const NumImages = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -0.5rem;
  right: 0;
  border-radius: 50%;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-grey-50);
  background-color: var(--color-sky-500);
`;

const ImagesInput = styled.input`
  display: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 3.2rem;
  max-height: 10rem;
  padding: 0.6rem 1rem;
  border: none;
  border-bottom: 3px solid var(--color-grey-400);
  font-size: 1.4rem;
  background-color: transparent;
  resize: none;
  overflow-y: auto;
  scrollbar-width: none;

  &::placeholder {
    color: var(--color-grey-600);
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
  const refImagesInput = useRef();
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
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

    if (images.length || message.length) {
      sendMessage({ images: [...images], message });
      setMessage('');
      setImages([]);
      refImagesInput.current.value = null;
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Attachment>
        <ImagesLabel htmlFor="messageImages">
          <HiPaperClip />
          {images.length > 0 && <NumImages>{images.length}</NumImages>}
        </ImagesLabel>
        <ImagesInput
          type="file"
          name="images"
          ref={refImagesInput}
          id="messageImages"
          accept="image/png, image/jpeg"
          multiple
          onChange={(e) => setImages(e.target.files)}
        />
      </Attachment>
      <Textarea
        type="text"
        name="message"
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
