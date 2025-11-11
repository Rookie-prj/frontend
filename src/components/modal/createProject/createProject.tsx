import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CreateProjectContainer,
  GroupContainer,
  GroupItem,
  GroupContent,
} from './createProject.styles';
import { ModalOverlay, ModalTitle } from '../container/container.styles';
import Button from '../../common/button/button';
import { CREATE_PROJECT_MODAL } from '../../../constants/createProject';
import { ROUTES } from '../../../constants/routes';
import RedirectModal from '../../rookieDetail/redirectModal';
import { useModal } from '../../../hooks/useModal';
import { getAccessToken } from '../../../api/token';
import { getMyProfileDetail } from '../../../api/myProfile';
import { useCreateProjectStore } from '../../../store/createProjectStore';

interface CreateProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const reset = useCreateProjectStore((state) => state.reset);
  const {
    isOpen: isRedirectOpen,
    handleModalOpen: openRedirect,
    handleModalClose: closeRedirect,
  } = useModal();

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGroupClick = async (groupId: string) => {
    console.log('선택된 그룹:', groupId);
    const token = getAccessToken();

    if (!token) {
      onClose();
      openRedirect();
      return;
    }

    try {
      await getMyProfileDetail();
      onClose();

      if (groupId === '1') {
        navigate(ROUTES.createProject);
        reset();
      }
      if (groupId === '2') {
        navigate(ROUTES.createRookie);
        reset();
      }
    } catch (error) {
      console.error('인증 체크 실패:', error);
      onClose();
      openRedirect();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <CreateProjectContainer>
            <ModalTitle>{CREATE_PROJECT_MODAL.title}</ModalTitle>
            <GroupContainer>
              {CREATE_PROJECT_MODAL.groups.map((group) => (
                <GroupItem key={group.id} onClick={() => handleGroupClick(group.id)}>
                  <img src={group.icon} alt="group-icon" />

                  <GroupContent>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </GroupContent>
                  <img src={group.arrowIcon} alt="arrow-icon" />
                </GroupItem>
              ))}
            </GroupContainer>

            <Button onClick={onClose}>{CREATE_PROJECT_MODAL.button}</Button>
          </CreateProjectContainer>
        </ModalOverlay>
      )}
      <RedirectModal
        isOpen={isRedirectOpen}
        onClose={closeRedirect}
        title="로그인 후 이용해주세요"
        redirectTo={ROUTES.login}
      />
    </>
  );
};

export default CreateProject;
