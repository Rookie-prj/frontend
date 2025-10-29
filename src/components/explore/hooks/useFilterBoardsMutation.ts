import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { filterBoards } from '../../../api/boards';
import { BoardFilterRequest, PageableRequest, FilteredBoard } from '../../../models/boards';
import { Project } from '../../../models/project';
import { PROJECT_QUERY_KEY } from './key';

interface UseFilterBoardsMutationOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export const useFilterBoardsMutation = (options?: UseFilterBoardsMutationOptions) => {
  const { onSuccess, onError } = options || {};
  const queryClient = useQueryClient();

  // FilteredBoard를 Project로 변환하는 함수
  const convertFilteredBoardToProject = useCallback((filteredBoard: FilteredBoard): Project => {
    return {
      boardId: filteredBoard.boardId,
      boardType: filteredBoard.boardType,
      estmtPeriod: filteredBoard.estmtPeriod,
      cowrkrPosition: filteredBoard.cowrkrPosition ? filteredBoard.cowrkrPosition.split(',') : [],
      data: filteredBoard.cowrkrSpeciality || {},
      endDate: filteredBoard.endDate,
      title: filteredBoard.title,
      description: filteredBoard.description,
      imageUrl1: filteredBoard.imageUrl1,
      imageUrl2: filteredBoard.imageUrl2,
      imageUrl3: filteredBoard.imageUrl3,
      projectFields: filteredBoard.projectFields ? filteredBoard.projectFields.split(',') : [],
      distance: filteredBoard.distance,
      techTools: filteredBoard.techTools,
      workTools: filteredBoard.workTools ? filteredBoard.workTools.split(',') : [],
      collabTools: filteredBoard.collabTools ? filteredBoard.collabTools.split(',') : [],
      collabMthds: filteredBoard.collabMthds,
      isActive: filteredBoard.isActive,
      requredPpl: filteredBoard.requredPpl,
      viewCount: filteredBoard.viewCount,
      support: filteredBoard.support,
      bookmark: filteredBoard.bookmark,
      writer: filteredBoard.writer,
      doneType: filteredBoard.doneType,
      createdAt: filteredBoard.createdAt,
      modifiedAt: filteredBoard.modifiedAt,
    };
  }, []);

  const filterBoardsMutation = useMutation({
    mutationFn: ({
      pageable,
      filterRequest,
    }: {
      pageable: PageableRequest;
      filterRequest: BoardFilterRequest;
    }) => filterBoards(pageable, filterRequest),
    onSuccess: (data) => {
      // 성공 시 관련 쿼리 캐시 무효화
      queryClient.invalidateQueries({ queryKey: [PROJECT_QUERY_KEY.project] });
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error) => {
      console.error('게시판 필터 조회 실패:', error);
      if (onError) {
        onError(error);
      }
    },
  });

  return {
    handleFilterBoards: filterBoardsMutation.mutate,
    filterBoards: filterBoardsMutation.mutateAsync,
    isLoading: filterBoardsMutation.isPending,
    isError: filterBoardsMutation.isError,
    error: filterBoardsMutation.error,
    data: filterBoardsMutation.data,
    convertFilteredBoardToProject,
  };
};
