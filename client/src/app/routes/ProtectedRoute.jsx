import { useEffect } from 'react';
import { useUser } from '../../shared/lib/hooks/useUser';
import { useNavigate } from 'react-router';

import Spinner from '../../shared/ui/Spinner';
import toast from 'react-hot-toast';

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

  if (isLoading) return <Spinner />;
  if (user) return children;
}
