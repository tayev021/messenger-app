import { useEffect } from 'react';
import { useUser } from '../../shared/lib/hooks/useUser';
import { useNavigate } from 'react-router';

import toast from 'react-hot-toast';
import { PageLoading } from '../../pages/pageLoading';

export default function ProtectedRoute({ children }) {
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
