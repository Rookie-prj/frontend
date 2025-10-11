import React from 'react';
import {
  CreateProjectContainer,
  CreateProjectTitle,
  GroupContainer,
  GroupItem,
  GroupContent,
} from './createProject.styles';
import { ModalOverlay } from '../container/container.styles';
import Button from '../../button/button';
import { CREATE_PROJECT_MODAL } from '../../../constants/modal/createProject';

interface CreateProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGroupClick = (groupId: string) => {
    console.log('선택된 그룹:', groupId);
    onClose();
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
