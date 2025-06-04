import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    background: linear-gradient(30deg, var(--color-sky-400), transparent 70%),
      linear-gradient(120deg, var(--color-sky-300), transparent 40%),
      linear-gradient(190deg, var(--color-sky-400), transparent 60%),
      linear-gradient(280deg, var(--color-sky-300), transparent 40%);
    z-index: -2;
  }

  &::after {
    background-image: url('/bg.svg');
    background-size: 20rem;
    opacity: 0.5;
    z-index: -1;
  }
`;

export default Background;
