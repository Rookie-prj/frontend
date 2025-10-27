import { useQuery } from '@tanstack/react-query';
import { getMyProfileDetail } from '../api/myProfile';
import { getAccessToken } from '../api/token';

const MY_PROFILE_QUERY_KEY = 'myProfile';

export const useMyProfileDetail = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [MY_PROFILE_QUERY_KEY, 'detail'],
    queryFn: () => getMyProfileDetail(),
    enabled: !!getAccessToken(), // 로그인 상태일 때만 조회
  });

  return {
    profile: data,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useMyProfileDetail;
