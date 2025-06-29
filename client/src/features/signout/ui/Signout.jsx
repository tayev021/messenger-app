import { useSignout } from '../../../entities/user';

export function Signout({ children }) {
  const { signout } = useSignout();

  return <div onClick={signout}>{children}</div>;
}
