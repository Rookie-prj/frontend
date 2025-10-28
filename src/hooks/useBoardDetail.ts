import { useQuery } from '@tanstack/react-query';
import { getBoardDetail } from '../api/boards';
import { Board } from '../models/boards';

/**
 * 게시판 상세 조회 훅
 */
export const useBoardDetail = (id: string | undefined) => {
  return useQuery({
    queryKey: ['boardDetail', id],
    queryFn: () => getBoardDetail(Number(id)),
    enabled: !!id,
  });
};
