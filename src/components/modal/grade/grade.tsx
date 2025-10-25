import React, { useState } from 'react';
import { ModalOverlay } from '../container/container.styles';
import { SIGNUP, UNIVERSITY_GRADE_OPTIONS } from '../../../constants/signup';
import {
  NumberOfPeopleContainer,
  ModalTitle,
  OptionsContainer,
  OptionItem,
  OptionText,
  ConfirmButtonWrapper,
} from './../numberOfPeople/numberOfPeople.styles';
import Button from '../../../components/common/button/button';

interface GradeProps {
  isOpen: boolean;

  onClose: () => void;
  onSelect?: (value: string) => void;
}

const Grade: React.FC<GradeProps> = ({ isOpen, onClose, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string>('2학년');

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
        <ModalTitle>{SIGNUP.REQUIRED_UNIVERSITY_GRADE}</ModalTitle>
        <OptionsContainer>
          {UNIVERSITY_GRADE_OPTIONS.map((option) => (
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

export default Grade;
