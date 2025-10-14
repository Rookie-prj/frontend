import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CreateProjectContainer,
  CreateProjectTitle,
  GroupContainer,
  GroupItem,
  GroupContent,
} from './createProject.styles';
import { ModalOverlay } from '../container/container.styles';
import Button from '../../common/button/button';
import { CREATE_PROJECT_MODAL } from '../../../constants/createProject';
import { ROUTES } from '../../../constants/routes';

interface CreateProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGroupClick = (groupId: string) => {
    console.log('선택된 그룹:', groupId);
    onClose();

    // '처음부터 팀을 구성해요' 옵션을 선택한 경우 funnel로 이동
    if (groupId === '1') {
      navigate(ROUTES.createProject);
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <CreateProjectContainer>
        <CreateProjectTitle>{CREATE_PROJECT_MODAL.title}</CreateProjectTitle>
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
  );
};

export default CreateProject;
