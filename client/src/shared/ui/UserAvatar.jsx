import styled from 'styled-components';

import { useUser } from '../lib/hooks/useUser';
import { URL } from '../constants/constants';

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
  letter-spacing: 0.4rem;
  color: var(--color-grey-50);
  background-color: var(--color-sky-500);

  ${(props) => props.type === 'inline' && 'margin: 0 auto;'}
`;

const Avatar = styled.img`
  width: 18rem;
  height: 18rem;
  display: block;
  margin: 2rem auto;
  border-radius: 50%;
  object-fit: cover;

  ${(props) => props.type === 'inline' && 'margin: 0 auto;'}
`;

export function UserAvatar({ image, type }) {
  const { user } = useUser();

  if (!user.avatar && !image) {
    const initials = `${user.name[0]}${user.surname[0]}`;

    return <AvatarPlaceholder type={type}>{initials}</AvatarPlaceholder>;
  }

  return <Avatar src={image || `${URL}/avatars/${user.avatar}`} type={type} />;
}
