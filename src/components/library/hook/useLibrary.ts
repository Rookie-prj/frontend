import { useQuery } from '@tanstack/react-query';
import { LibraryCategoryValue } from '../../../constants/category';
import { getSavedBoards, getMyProjectBoards } from '../api/library';
import { SavedLibraryResponse } from '../../../models/saved';
import { MyProjectLibraryResponse } from '../../../models/myProject';
import { Project } from '../../../models/project';
import { LIBRARY_QUERY_KEY } from '../key';

const useSavedBoardsQuery = (sortType: LibraryCategoryValue) => {
  const { data, isLoading, isFetching } = useQuery<SavedLibraryResponse>({
    queryKey: [LIBRARY_QUERY_KEY.savedBoards],
    queryFn: async () => {
      return await getSavedBoards();
    },
  });

  // 북마크 데이터를 Project 형식으로 변환
  const savedBoards: Project[] =
    data?.bookmarks
      ?.filter((bookmark) => bookmark?.board)
      .map((bookmark) => ({
        boardId: bookmark.board.boardId,
        boardType: bookmark.board.boardType,
        estmtPeriod: bookmark.board.estmtPeriod,
        cowrkrPosition: Array.isArray(bookmark.board.cowrkrPosition)
          ? bookmark.board.cowrkrPosition
          : bookmark.board.cowrkrPosition?.split(',') || [],
        data: bookmark.board.cowrkrSpeciality || {},
        endDate: bookmark.board.endDate,
        title: bookmark.board.title,
        description: bookmark.board.description,
        imageUrl1: bookmark.board.imageUrl1,
        imageUrl2: bookmark.board.imageUrl2,
        imageUrl3: bookmark.board.imageUrl3,
        projectFields: Array.isArray(bookmark.board.projectFields)
          ? bookmark.board.projectFields
          : bookmark.board.projectFields?.split(',') || [],
        distance: bookmark.board.distance,
        techTools: bookmark.board.techTools,
        workTools: Array.isArray(bookmark.board.workTools)
          ? bookmark.board.workTools
          : bookmark.board.workTools?.split(',') || [],
        collabTools: Array.isArray(bookmark.board.collabTools)
          ? bookmark.board.collabTools
          : bookmark.board.collabTools?.split(',') || [],
        collabMthds: bookmark.board.collabMthds,
        isActive: bookmark.board.isActive,
        requredPpl: bookmark.board.requredPpl,
        viewCount: bookmark.board.viewCount,
        support: bookmark.board.support,
        bookmark: bookmark.board.bookmark,
        writer: bookmark.board.writer,
        doneType: bookmark.board.doneType,
        createdAt: bookmark.board.createdAt,
        modifiedAt: bookmark.board.modifiedAt,
      })) || [];

  return {
    savedBoards,
    isLoading,
    isFetching,
  };
};

const useMyProjectBoardsQuery = (sortType: LibraryCategoryValue, writer?: string) => {
  const { data, isLoading, isFetching } = useQuery<MyProjectLibraryResponse>({
    queryKey: [LIBRARY_QUERY_KEY.myProjectBoards, writer],
    queryFn: async () => {
      return await getMyProjectBoards({ writer });
    },
    enabled: sortType === 'my_project',
  });

  const myProjectBoards = data?.boards ?? [];

  return {
    myProjectBoards,
    isLoading,
    isFetching,
  };
};

export { useSavedBoardsQuery, useMyProjectBoardsQuery };
