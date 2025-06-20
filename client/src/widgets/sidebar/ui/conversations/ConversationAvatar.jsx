import styled from 'styled-components';
import { URL } from '../../../../shared/constants/constants';

const AvatarPlaceholder = styled.span`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-grey-50);
  border-radius: 50%;
  color: var(--color-grey-50);
  background-color: var(--color-sky-500);
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  display: block;
  border: 2px solid var(--color-grey-50);
  border-radius: 50%;
`;

export function ConversationAvatar({ avatar, text }) {
  if (!avatar) return <AvatarPlaceholder>{text}</AvatarPlaceholder>;

  return <Avatar src={`${URL}/avatars/${avatar}`} />;
}
