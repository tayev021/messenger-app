import styled from 'styled-components';

const AvatarPlaceholder = styled.div`
  width: 18rem;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  border-radius: 50%;
  font-size: 5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: var(--color-grey-50);
  background-color: var(--color-sky-500);

  ${(props) => props.type === 'inline' && 'margin: 0 auto;'}
  ${(props) =>
    props.size === 'small' &&
    'width: 5rem; height: 5rem; font-size: 1.6rem; letter-spacing: 0rem;'}
`;

const StyledAvatar = styled.img`
  width: 18rem;
  height: 18rem;
  display: block;
  margin: 2rem auto;
  border-radius: 50%;
  object-fit: cover;

  ${(props) => props.type === 'inline' && 'margin: 0 auto;'}
  ${(props) => props.size === 'small' && 'width: 5rem; height: 5rem;'}
`;

export function Avatar({ imageSrc = '', initials = '', type = '', size = '' }) {
  if (!imageSrc) {
    return (
      <AvatarPlaceholder type={type} size={size}>
        {initials}
      </AvatarPlaceholder>
    );
  }

  return <StyledAvatar src={imageSrc} type={type} size={size} />;
}
