import { useModal } from '../../hooks/useModal';
import ConfirmModal from '../../components/common/confirmModal/confirmModal';
import { DeleteConfirmModal } from '../../components/common/modal';
import Header from '../../components/header/header';
import FilterBar from '../../components/explore/filterBar';
import { useSearchParams } from 'react-router-dom';
import { LibraryTabValue } from '../../constants/filter';
import { LibraryCategoryValue } from '../../constants/category';
import CategoryBar from '../../components/library/categoryBar';
import ProjectList from '../../components/explore/projectList';
import {
  useSavedBoardsQuery,
  useMyProjectBoardsQuery,
} from '../../components/library/hook/useLibraryInfiniteScroll';
import InfiniteScrollList from '../../components/common/infiniteScrollList';
import bookmark from '../../assets/icons/bookmark.svg';
import option from '../../assets/icons/cardoption.svg';

const Library = () => {
  const [searchParams] = useSearchParams();
  const roleType = searchParams.get('roleType') as LibraryTabValue;
  const sortType = searchParams.get('sortType') as LibraryCategoryValue;

  const {
    savedBoards,
    isFetching: isFetchingSavedBoards,
    hasNextPage: hasNextPageSavedBoards,
    fetchNextPage: fetchNextPageSavedBoards,
  } = useSavedBoardsQuery(sortType || 'saved');

  const {
    myProjectBoards,
    isFetching: isFetchingMyProjectBoards,
    hasNextPage: hasNextPageMyProjectBoards,
    fetchNextPage: fetchNextPageMyProjectBoards,
  } = useMyProjectBoardsQuery(sortType || 'my_project');

  const {
    isOpen: isConfirmModalOpen,
    handleModalClose: handleConfirmModalClose,
    handleModalOpen: handleConfirmModalOpen,
  } = useModal();
  const {
    isOpen: isDeleteModalOpen,
    handleModalClose: handleDeleteModalClose,
    handleModalOpen: handleDeleteModalOpen,
  } = useModal();

  return (
    <div>
      <Header type="library" />
      <CategoryBar sortType={sortType} />
      <FilterBar sortType={sortType} roleType={roleType} />

      <div style={{ paddingBottom: '130px' }}>
        {(sortType === 'saved' || !sortType) && (
          <InfiniteScrollList
            hasNextPage={hasNextPageSavedBoards}
            fetchNextPage={fetchNextPageSavedBoards}
            isFetchingNextPage={isFetchingSavedBoards}
            padding="4px 16px 0 16px"
          >
            <ProjectList
              projects={savedBoards}
              rightIcon={bookmark}
              onDeleteModalOpen={handleDeleteModalOpen}
            />
          </InfiniteScrollList>
        )}
        {sortType === 'my_project' && (
          <InfiniteScrollList
            hasNextPage={hasNextPageMyProjectBoards}
            fetchNextPage={fetchNextPageMyProjectBoards}
            isFetchingNextPage={isFetchingMyProjectBoards}
            enabled={sortType === 'my_project'}
            padding="4px 16px 0 16px"
          >
            <ProjectList projects={myProjectBoards} rightIcon={option} />
          </InfiniteScrollList>
        )}
      </div>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleConfirmModalClose}
        message="모집완료로 변경되었습니다"
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        onConfirm={() => {
          // 삭제 로직 구현
          console.log('보관함에서 제거되었습니다');
        }}
        message="보관함에서 제거할까요?"
      />
    </div>
  );
};

export default Library;
