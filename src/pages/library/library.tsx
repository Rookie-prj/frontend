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
import { useMyProfileDetail } from '../../hooks/useMyProfile';
import RedirectModal from '../../components/rookieDetail/redirectModal';
import useToast from '../../hooks/useToast';
import Toast from '../../components/common/toast/toast';

const Library = () => {
  const [searchParams] = useSearchParams();
  const roleType = searchParams.get('roleType') as LibraryTabValue;
  const sortType = searchParams.get('sortType') as LibraryCategoryValue;
  const [selectedBoardId, setSelectedBoardId] = useState(0);
  const { savedBoards, isLoading: isLoadingSavedBoards } = useSavedBoardsQuery(sortType || 'saved');
  const { handleDeleteMyProject } = useDeleteMyProjectMutation({
    onSuccess: (message) => handleToastOpen(message),
  });
  const { handleModifyProjectActive } = useModifyProjectActiveMutation();
  const { profile } = useMyProfileDetail();
  const { myProjectBoards, isLoading: isLoadingMyProjectBoards } = useMyProjectBoardsQuery(
    sortType || 'my_project',
    profile?.name,
  );

  // roleType에 따라 내 프로젝트 필터링
  const filteredMyProjectBoards =
    roleType === 'recruiting'
      ? myProjectBoards.filter((board) => board.isActive === true)
      : roleType === 'completed'
      ? myProjectBoards.filter((board) => board.isActive === false)
      : myProjectBoards; // 'all' 또는 값이 없으면 전체

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

  const handleDeleteBookmark = (boardId: number) => {
    setSelectedBoardId(boardId);
    handleDeleteModalOpen();
  };

  const handleActionSheetOpenWithId = (boardId: number) => {
    setSelectedBoardId(boardId);
    handleActionSheetOpen();
  };

  const handleEdit = () => {
    console.log('📝 게시물 수정 시작:', { boardId: selectedBoardId });
    navigate(`${ROUTES.createProject}?create-project.step=projectInfo&boardId=${selectedBoardId}`);
    handleActionSheetClose();
  };

  const selectedBoard = myProjectBoards.find((board) => board.boardId === selectedBoardId);
  const currentIsActive = selectedBoard?.isActive ?? false;
  const handleComplete = () => {
    // 현재 상태의 반대로 변경
    handleModifyProjectActive(
      { boardId: selectedBoardId, isActive: !currentIsActive },
      {
        onSuccess: () => {
          handleConfirmModalOpen();
        },
        onError: () => {
          handleRedirectModalOpen();
        },
      },
    );
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
      label: currentIsActive ? '모집완료로 변경하기' : '모집중으로 변경하기',
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
      {sortType === 'my_project' && <FilterBar sortType={sortType} roleType={roleType} />}

      <div style={{ paddingBottom: '130px' }}>
        {(sortType === 'saved' || !sortType) && (
          <div style={{ padding: '4px 16px 0 16px', marginTop: '16px' }}>
            {savedBoards.length > 0 && (
              <ProjectList
                projects={savedBoards}
                rightIcon={bookmark}
                isBookmark={true}
                onSuccess={handleToastOpen}
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
            {filteredMyProjectBoards.length > 0 && (
              <ProjectList
                projects={filteredMyProjectBoards}
                rightIcon={option}
                isBookmark={false}
                onActionSheetOpen={handleActionSheetOpenWithId}
              />
            )}
            {filteredMyProjectBoards.length === 0 && !isLoadingMyProjectBoards && (
              <EmptyState message="작성한 프로젝트가 없어요" icon={rookieyGray} />
            )}
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleConfirmModalClose}
        message={currentIsActive ? '모집중으로 변경되었습니다' : '모집완료로 변경되었습니다'}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        onConfirm={() => {
          if (sortType === 'my_project') {
            handleDeleteMyProject(selectedBoardId, {
              onSuccess: () => handleToastOpen(),
              onError: () => {
                handleRedirectModalOpen();
              },
            });
          } else {
            handleRemoveBookmark(selectedBoardId, {
              onError: () => {
                handleRedirectModalOpen();
              },
            });
          }
        }}
        message={sortType === 'my_project' ? '프로젝트를 삭제할까요?' : '보관함에서 제거할까요?'}
      />

      <RedirectModal
        isOpen={isRedirectModalOpen}
        onClose={handleRedirectModalClose}
        redirectTo={ROUTES.login}
        title="로그인이 필요해요"
      />

      <ActionBottomSheet
        isOpen={isActionSheetOpen}
        onClose={handleActionSheetClose}
        actions={actionItems}
      />
      <Toast isOpen={isToastOpen} message={message} onClose={handleToastClose} />
    </div>
  );
};

export default Library;
