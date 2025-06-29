import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useUser } from '../../entities/user/';
import { PageLoading } from '../../pages/pageLoading';

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, error, user } = useUser();

  useEffect(
    function () {
      if (!isLoading && !user) navigate('signin');
    },
    [isLoading, error, user, navigate]
  );

  if (isLoading) return <PageLoading />;
  if (user) return children;
}
