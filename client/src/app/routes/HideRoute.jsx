import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useUser } from '../../entities/user/';
import { Spinner } from '../../shared/ui/Spinner';

export function HideRoute() {
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
