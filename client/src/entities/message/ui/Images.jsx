import styled from 'styled-components';

import { URL } from '../../../shared/constants/constants';

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;

  img {
    width: 0;
    flex: 1 1 20%;

    &:nth-child(1),
    &:nth-child(2) {
      min-width: 45%;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      min-width: 30%;
    }

    &:nth-child(n + 6) {
      max-width: calc(25% - 0.2rem);
    }
  }
`;

export function Images({ images }) {
  if (!images?.length) return null;

  return (
    <ImagesContainer>
      {images.map((imagePath) => (
        <img src={`${URL}/images/${imagePath}`} key={imagePath} />
      ))}
    </ImagesContainer>
  );
}
