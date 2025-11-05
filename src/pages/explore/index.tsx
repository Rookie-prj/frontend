import { useSearchParams } from 'react-router-dom';
import CategoryBar from '../../components/explore/categoryBar';
import Header from '../../components/header/header';
import { ExploreCategoryValue } from '../../constants/category';
import Rookies from '../../components/rookie/rookies';

import { RoleTabValue } from '../../constants/filter';
import useRookieQuery from '../../components/explore/hooks/useRookieQuery';
import FilterTab from '../../components/explore/filterBar';
import useProjectsQuery from '../../components/explore/hooks/useProjectsQuery';
import ProjectList from '../../components/explore/projectList';
import bookmark from '../../assets/icons/bookmark.svg';
import InfiniteScrollList from '../../components/common/infiniteScrollList';
import { useState } from 'react';
import FilterBottomSheet from '../../components/explore/filterBottomSheet';
import DeleteConfirmModal from '../../components/common/deleteModal/deleteConfirmModal';
import { useModal } from '../../hooks/useModal';
import { useRemoveBookmarkMutation } from '../../components/explore/hooks/useRemoveBookmarkMutation';
import EmptyState from '../../components/common/emptyState/emptyState';
import rookieyGray from '../../assets/icons/rookieGray.svg';
import RedirectModal from '../../components/rookieDetail/redirectModal';
import useToast from '../../hooks/useToast';
import Toast from '../../components/common/toast/toast';
import { useFilterBoardsMutation } from '../../components/explore/hooks/useFilterBoardsMutation';
import { FilteredBoard, BoardFilterResponse } from '../../models/boards';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = (searchParams.get('sortType') || 'project') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;
  const search = searchParams.get('search') || undefined;
  const [isOpen, setIsOpen] = useState(false);
  const [boardField, setBoardField] = useState<string[]>([]);
  const [selectedInterestFields, setSelectedInterestFields] = useState<string[]>([]);
  const { rookies, hasNextPage, fetchNextPage, isFetchingNextPage } = useRookieQuery({
    sortType,
    search,
  });
  const [selectedBoardId, setSelectedBoardId] = useState<number>(0);

  // 필터 데이터 상태
  const [filterDatas, setFilterDatas] = useState<FilteredBoard[] | null>(null);

  const {
    handleFilterBoards,
    isLoading: isFilterLoading,
    data: filterData,
    convertFilteredBoardToProject,
  } = useFilterBoardsMutation({
    onSuccess: (data: BoardFilterResponse) => {
      console.log('필터 조회 성공:', data);
      // 필터 성공 시 상태 업데이트
      if (data && data.content) {
        setFilterDatas(data.content);
      }
    },
    onError: (error) => {
      console.error('필터 조회 실패:', error);
      // 에러 발생 시 필터 상태 초기화
      setFilterDatas(null);
    },
  });

  const {
    isOpen: isDeleteModalOpen,
    handleModalClose: handleDeleteModalClose,
    handleModalOpen: handleDeleteModalOpen,
  } = useModal();

  const {
    isOpen: isRedirectModalOpen,
    handleModalClose: handleRedirectModalClose,
    handleModalOpen: handleRedirectModalOpen,
  } = useModal();

  const { isOpen: isToastOpen, message, handleToastOpen, handleToastClose } = useToast();
  const { handleRemoveBookmark } = useRemoveBookmarkMutation({
    onError: handleRedirectModalOpen,
    onSuccess: handleToastOpen,
  });
  const {
    projects,
    hasNextPage: projectHasNextPage,
    fetchNextPage: projectFetchNextPage,
    isFetchingNextPage: projectIsFetchingNextPage,
  } = useProjectsQuery({ sortType, boardType: roleType, search });

  const handleDeleteBookmark = (boardId: number) => {
    setSelectedBoardId(boardId);
    handleDeleteModalOpen();
  };

  const handleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterReset = () => {
    setSelectedInterestFields([]);
    setBoardField([]);
    setFilterDatas(null); // 필터 리셋 시 필터 데이터도 초기화
  };

  return (
    <div>
      <Header type="search" />
      <CategoryBar sortType={sortType} />
      <FilterTab
        sortType={sortType}
        roleType={roleType}
        handleBottomSheet={handleBottomSheet}
        handleFilterReset={handleFilterReset}
      />
      <div style={{ paddingBottom: '130px' }}>
        {sortType === 'rookie' && (
          <InfiniteScrollList
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            enabled={sortType === 'rookie'}
          >
            {rookies.length > 0 && <Rookies rookies={rookies} type="explore" />}
            {rookies.length === 0 && (
              <EmptyState
                message={
                  search
                    ? '일치하는 결과가 없어요.\n다른 키워드로 탐색해볼까요?'
                    : '탐색할 루키가 없어요'
                }
                icon={rookieyGray}
                search={!!search}
              />
            )}
          </InfiniteScrollList>
        )}
        {sortType === 'project' && (
          <InfiniteScrollList
            hasNextPage={projectHasNextPage}
            fetchNextPage={projectFetchNextPage}
            isFetchingNextPage={projectIsFetchingNextPage}
            padding="4px 16px 0 16px"
          >
            {filterDatas && filterDatas.length > 0 && (
              <ProjectList
                projects={filterDatas.map(convertFilteredBoardToProject)}
                rightIcon={bookmark}
                handleDeleteBookmark={handleDeleteBookmark}
                isBookmark={true}
                onError={handleRedirectModalOpen}
                onSuccess={handleToastOpen}
              />
            )}
            {!filterDatas && projects.length > 0 && (
              <ProjectList
                projects={projects}
                rightIcon={bookmark}
                handleDeleteBookmark={handleDeleteBookmark}
                isBookmark={true}
                onError={handleRedirectModalOpen}
                onSuccess={handleToastOpen}
              />
            )}
            {((filterDatas && filterDatas.length === 0) ||
              (!filterDatas && projects.length === 0)) && (
              <EmptyState
                message={
                  search
                    ? '일치하는 결과가 없어요.\n다른 키워드로 탐색해볼까요?'
                    : '탐색할 프로젝트가 없어요'
                }
                icon={rookieyGray}
                search={!!search}
              />
            )}
          </InfiniteScrollList>
        )}
      </div>

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        onConfirm={() => handleRemoveBookmark(selectedBoardId)}
        message="북마크에서 제거할까요?"
      />

      <RedirectModal
        isOpen={isRedirectModalOpen}
        onClose={handleRedirectModalClose}
        redirectTo="/login"
        title="로그인 후 이용해주세요"
      />

      <FilterBottomSheet
        isOpen={isOpen}
        onClose={handleBottomSheet}
        selectedInterestFields={selectedInterestFields}
        selectedProjectTypes={boardField}
        onInterestFieldToggle={(value: string) => {
          setSelectedInterestFields((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
          );
        }}
        onProjectTypeToggle={(value: string) => {
          setBoardField((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
          );
        }}
        onReset={handleFilterReset}
        onConfirm={() => {
          handleFilterBoards({
            pageable: {
              page: 0,
              size: 10,
              sort: ['createdAt'],
            },
            filterRequest: {
              boardTypes: boardField.length > 0 ? boardField : undefined,
              projectFields: selectedInterestFields.length > 0 ? selectedInterestFields : undefined,
            },
          });
        }}
      />
      <Toast isOpen={isToastOpen} message={message} onClose={handleToastClose} />
    </div>
  );
};

export default ExplorePage;
