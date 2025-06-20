import styled, { keyframes } from 'styled-components';
import { cloneElement } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

import { useModalContext } from '../../lib/hooks/useModalContext';
import { useOutsideClick } from '../../lib/hooks/useOutsideClick';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-50-04);
  backdrop-filter: blur(4px);
  transition: all 0.5s;
  z-index: 1000;
`;

const StyledWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-50);
  border-radius: 1rem;
  box-shadow: var(--box-shadow-medium);
  padding: 4rem;
  transition: all 0.5s;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(90deg);
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;

  &:hover {
    animation: ${spin} 0.2s linear 1;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

export function Window({ children, name }) {
  const { openName, close } = useModalContext();
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledWindow ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { closeModal: close })}</div>
      </StyledWindow>
    </Overlay>,
    document.body
  );
}
