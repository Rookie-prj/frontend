import { useSearchParams } from 'react-router-dom';
import CategoryBar from '../../components/explore/categoryBar';
import Header from '../../components/header/header';
import { ExploreCategoryValue } from '../../constants/category';
import Rookies from '../../components/rookie/rookies';

import { FilterTabValue, RoleTabValue } from '../../constants/filter';
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
import { getAccessToken } from '../../api/token';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = (searchParams.get('sortType') || 'project') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterestFields, setSelectedInterestFields] = useState<string[]>([]);
  const { rookies, hasNextPage, fetchNextPage, isFetchingNextPage } = useRookieQuery(sortType);
  const { handleRemoveBookmark } = useRemoveBookmarkMutation();
  const [selectedBoardId, setSelectedBoardId] = useState<number>(0);
  const [isLoginState, setIsLoginState] = useState(getAccessToken() ? true : false);

  const {
    isOpen: isDeleteModalOpen,
    handleModalClose: handleDeleteModalClose,
    handleModalOpen: handleDeleteModalOpen,
  } = useModal();
  const {
    projects,
    hasNextPage: projectHasNextPage,
    fetchNextPage: projectFetchNextPage,
    isFetchingNextPage: projectIsFetchingNextPage,
  } = useProjectsQuery({ sortType, boardType: roleType });

  const handleDeleteBookmark = (boardId: number) => {
    setSelectedBoardId(boardId);
    handleDeleteModalOpen();
  };

  const handleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header type="search" />
      <CategoryBar sortType={sortType} />
      <FilterTab sortType={sortType} roleType={roleType} handleBottomSheet={handleBottomSheet} />
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
              <EmptyState message="탐색할 루키가 없어요" icon={rookieyGray} />
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
            {projects.length > 0 && (
              <ProjectList
                projects={projects}
                rightIcon={bookmark}
                handleDeleteBookmark={handleDeleteBookmark}
                isBookmark={true}
              />
            )}
            {projects.length === 0 && (
              <EmptyState message="탐색할 프로젝트가 없어요" icon={rookieyGray} />
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

      <FilterBottomSheet
        isOpen={isOpen}
        onClose={handleBottomSheet}
        selectedInterestFields={selectedInterestFields}
        onInterestFieldToggle={(value: string) => {
          setSelectedInterestFields((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
          );
        }}
        onReset={() => setSelectedInterestFields([])}
        onConfirm={() => {
          /* 필터 적용 로직 */
          console.log('필터 적용 로직');
        }}
      />
    </div>
  );
};

export default ExplorePage;
