import { useSignout } from '../lib/hooks/useSignout';

export function Signout({ children }) {
  const { signout } = useSignout();

  return <div onClick={signout}>{children}</div>;
}
