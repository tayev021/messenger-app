import { useMutation } from '@tanstack/react-query';
import { getPartners } from '../../api/apiPartners';
import toast from 'react-hot-toast';

export function useSearchPartners() {
  const {
    isPending: isLoading,
    data: partners,
    mutate: searchPartners,
  } = useMutation({
    mutationFn: getPartners,
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, partners, searchPartners };
}
