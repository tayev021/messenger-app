import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50-04);
  backdrop-filter: blur(2px);
`;

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Rotor = styled.div`
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-sky-600) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-sky-600));
  mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

export default function Spinner() {
  return (
    <Container>
      <Rotor />
    </Container>
  );
}
