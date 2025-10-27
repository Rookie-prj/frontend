import { useModal } from '../../hooks/useModal';
import ConfirmModal from '../../components/common/confirmModal/confirmModal';
import { DeleteConfirmModal } from '../../components/common/modal';
import Header from '../../components/header/header';
import FilterBar from '../../components/explore/filterBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LibraryTabValue } from '../../constants/filter';
import { LibraryCategoryValue } from '../../constants/category';
import CategoryBar from '../../components/library/categoryBar';
import ProjectList from '../../components/explore/projectList';
import {
  useSavedBoardsQuery,
  useMyProjectBoardsQuery,
} from '../../components/library/hook/useLibrary';
import bookmark from '../../assets/icons/bookmark.svg';
import option from '../../assets/icons/cardoption.svg';
import { useState } from 'react';
import { useRemoveBookmarkMutation } from '../../components/explore/hooks/useRemoveBookmarkMutation';
import { ActionBottomSheet } from '../../components/common/actionBottomSheet';
import { useDeleteMyProjectMutation } from '../../components/library/hook/useDeleteMyProjectMutation';
import { useModifyProjectActiveMutation } from '../../components/library/hook/useModifyProjectActiveMutation';
import { ROUTES } from '../../constants/routes';
import EmptyState from '../../components/common/emptyState/emptyState';
import rookieyGray from '../../assets/icons/rookieGray.svg';

const Library = () => {
  const [searchParams] = useSearchParams();
  const roleType = searchParams.get('roleType') as LibraryTabValue;
  const sortType = searchParams.get('sortType') as LibraryCategoryValue;
  const [selectedBoardId, setSelectedBoardId] = useState(0);
  const { savedBoards, isLoading: isLoadingSavedBoards } = useSavedBoardsQuery(sortType || 'saved');
  const { handleRemoveBookmark } = useRemoveBookmarkMutation();
  const { handleDeleteMyProject } = useDeleteMyProjectMutation();
  const { handleModifyProjectActive } = useModifyProjectActiveMutation();
  const { myProjectBoards, isLoading: isLoadingMyProjectBoards } = useMyProjectBoardsQuery(
    sortType || 'my_project',
    '철수',
  );

  const navigate = useNavigate();
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
  const {
    isOpen: isActionSheetOpen,
    handleModalClose: handleActionSheetClose,
    handleModalOpen: handleActionSheetOpen,
  } = useModal();

  const handleDeleteBookmark = (boardId: number) => {
    setSelectedBoardId(boardId);
    handleDeleteModalOpen();
  };

  const handleActionSheetOpenWithId = (boardId: number) => {
    setSelectedBoardId(boardId);
    handleActionSheetOpen();
  };

  const handleEdit = () => {
    console.log('수정하기');
    navigate(`${ROUTES.createProject}?create-project.step=projectInfo`);
    handleActionSheetClose();
  };

  const handleComplete = () => {
    handleModifyProjectActive(selectedBoardId, true); // isActive를 false로 설정하여 모집완료로 변경
    handleConfirmModalOpen();
    handleActionSheetClose();
  };

  const handleDelete = () => {
    if (sortType === 'my_project') {
      // 내 프로젝트 삭제 확인 모달
      handleDeleteModalOpen();
      handleActionSheetClose();
    } else {
      // 북마크 삭제
      handleDeleteModalOpen();
      handleActionSheetClose();
    }
  };

  const actionItems = [
    {
      label: '수정하기',
      onClick: handleEdit,
    },
    {
      label: '모집완료로 변경하기',
      onClick: handleComplete,
    },
    {
      label: '삭제하기',
      onClick: handleDelete,
      variant: 'destructive' as const,
    },
  ];

  return (
    <div>
      <Header type="library" />
      <CategoryBar sortType={sortType} />
      <FilterBar sortType={sortType} roleType={roleType} />

      <div style={{ paddingBottom: '130px' }}>
        {(sortType === 'saved' || !sortType) && (
          <div style={{ padding: '4px 16px 0 16px' }}>
            {savedBoards.length > 0 && (
              <ProjectList
                projects={savedBoards}
                rightIcon={bookmark}
                isBookmark={true}
                handleDeleteBookmark={handleDeleteBookmark}
                onDeleteModalOpen={handleDeleteModalOpen}
                onActionSheetOpen={handleActionSheetOpenWithId}
              />
            )}
            {savedBoards.length === 0 && !isLoadingSavedBoards && (
              <EmptyState message="북마크가 없어요" icon={rookieyGray} />
            )}
          </div>
        )}
        {sortType === 'my_project' && (
          <div style={{ padding: '4px 16px 0 16px' }}>
            {myProjectBoards.length > 0 && (
              <ProjectList
                projects={myProjectBoards}
                rightIcon={option}
                isBookmark={false}
                onActionSheetOpen={handleActionSheetOpenWithId}
              />
            )}
            {myProjectBoards.length === 0 && !isLoadingMyProjectBoards && (
              <EmptyState message="작성한 프로젝트가 없어요" icon={rookieyGray} />
            )}
          </div>
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
          if (sortType === 'my_project') {
            handleDeleteMyProject(selectedBoardId);
          } else {
            handleRemoveBookmark(selectedBoardId);
          }
        }}
        message={sortType === 'my_project' ? '프로젝트를 삭제할까요?' : '보관함에서 제거할까요?'}
      />

      <ActionBottomSheet
        isOpen={isActionSheetOpen}
        onClose={handleActionSheetClose}
        actions={actionItems}
      />
    </div>
  );
};

export default Library;
