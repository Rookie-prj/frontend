import React, { useState } from 'react';
import { ModalOverlay } from '../container/container.styles';
import { PROJECT_COUNT_OPTIONS, SIGNUP, UNIVERSITY_GRADE_OPTIONS } from '../../../constants/signup';
import {
  NumberOfPeopleContainer,
  ModalTitle,
  OptionsContainer,
  OptionItem,
  OptionText,
  ConfirmButtonWrapper,
} from './../numberOfPeople/numberOfPeople.styles';
import Button from '../../../components/common/button/button';

interface ProjectCountProps {
  isOpen: boolean;

  onClose: () => void;
  onSelect?: (value: string) => void;
}

const ProjectCount: React.FC<ProjectCountProps> = ({ isOpen, onClose, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string>('1개');

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
  };

  const handleConfirm = () => {
    if (onSelect) {
      onSelect(selectedValue);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <NumberOfPeopleContainer>
        <ModalTitle>{SIGNUP.REQUIRED_PROJECT_COUNT_MODAL}</ModalTitle>
        <OptionsContainer>
          {PROJECT_COUNT_OPTIONS.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleOptionClick(option.label)}
              isSelected={selectedValue === option.label}
            >
              <OptionText isSelected={selectedValue === option.label}>{option.label}</OptionText>
            </OptionItem>
          ))}
        </OptionsContainer>
        <ConfirmButtonWrapper>
          <Button onClick={handleConfirm}>확인</Button>
        </ConfirmButtonWrapper>
      </NumberOfPeopleContainer>
    </ModalOverlay>
  );
};

export default ProjectCount;
