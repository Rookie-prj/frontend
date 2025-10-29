import { useQuery } from '@tanstack/react-query';
import { getRookieDetail } from '../../../api/rookie';

const ROOKIE_DETAIL_QUERY_KEY = 'rookieDetail';

interface UseRookieDetailParams {
  id: number;
  enabled?: boolean;
}

const useRookieDetail = ({ id, enabled = true }: UseRookieDetailParams) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [ROOKIE_DETAIL_QUERY_KEY, id],
    queryFn: () => getRookieDetail(id),
    enabled: enabled && !!id,
  });

  return {
    rookie: data,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useRookieDetail;
