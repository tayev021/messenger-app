import { useEffect } from 'react';
import { useUser } from '../../shared/lib/hooks/useUser';
import { Outlet, useNavigate } from 'react-router';

import Spinner from '../../shared/ui/Spinner';

export default function HideRoute() {
  const navigate = useNavigate();
  const { isLoading, user } = useUser();

  useEffect(
    function () {
      if (!isLoading && user) navigate('/');
    },
    [isLoading, user, navigate]
  );

  if (isLoading) return <Spinner />;

  if (!user) return <Outlet />;
}
