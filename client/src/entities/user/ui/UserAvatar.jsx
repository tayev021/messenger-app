import { useUser } from '../lib/hooks/useUser';
import { URL } from '../../../shared/constants/constants';
import { Avatar } from '../../../shared/ui/Avatar';

export function UserAvatar({ imageSrc, type }) {
  const { user } = useUser();

  const userAvatarSrc = user.avatar ? `${URL}/avatars/${user.avatar}` : '';
  const initials = `${user.name[0]}${user.surname[0]}`;

  return (
    <Avatar
      imageSrc={imageSrc || userAvatarSrc}
      initials={initials}
      type={type}
    />
  );
}
