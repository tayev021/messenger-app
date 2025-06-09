import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { useUser } from '../../shared/lib/hooks/useUser';
import { PageLoading } from '../../pages/pageLoading';

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isError, error, user } = useUser();

  useEffect(
    function () {
      if (isError) {
        toast.error(`${error}`);
      }

      if (!isLoading && !user) navigate('signin');
    },
    [isLoading, isError, error, user, navigate]
  );

  if (isLoading) return <PageLoading />;
  if (user) return children;
}
