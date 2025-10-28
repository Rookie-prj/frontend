import { useQuery } from '@tanstack/react-query';
import { getBoardDetail } from '../boards';
import { Board } from '../../models/boards';

/**
 * 게시판 상세 조회 쿼리
 */
export const useBoardDetailQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: ['boardDetail', id],
    queryFn: () => getBoardDetail(Number(id)),
    enabled: !!id,
  });
};
