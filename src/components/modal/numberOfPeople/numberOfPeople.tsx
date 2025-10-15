import React from 'react';

import { ModalOverlay, ModalTitle } from '../container/container.styles';
import { TEAM, TEAM_NUMBER_OF_PEOPLE_OPTIONS } from '../../../constants/createProject';
import {
  NumberOfPeopleContainer,
  NumberOfPeopleGroupContainer,
  NumberOfPeopleGroupContent,
  NumberOfPeopleGroupItem,
} from './numberOfPeople.styles';

interface CreateProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGroupClick = (groupId: string) => {
    console.log('선택된 그룹:', groupId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <NumberOfPeopleContainer>
        <ModalTitle>{TEAM.STEP2_POSITION_NUMBER_OF_PEOPLE}</ModalTitle>
        <NumberOfPeopleGroupContainer>
          {TEAM_NUMBER_OF_PEOPLE_OPTIONS.map((group) => (
            <NumberOfPeopleGroupItem
              key={group.value}
              onClick={() => handleGroupClick(group.value)}
            >
              <NumberOfPeopleGroupContent>
                <p>{group.label}</p>
              </NumberOfPeopleGroupContent>
            </NumberOfPeopleGroupItem>
          ))}
        </NumberOfPeopleGroupContainer>
      </NumberOfPeopleContainer>
    </ModalOverlay>
  );
};

export default CreateProject;
