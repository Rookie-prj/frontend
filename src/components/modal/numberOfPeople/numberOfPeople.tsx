import React, { useState } from 'react';
import { ModalOverlay } from '../container/container.styles';
import { TEAM, TEAM_NUMBER_OF_PEOPLE_OPTIONS } from '../../../constants/createProject';
import {
  NumberOfPeopleContainer,
  ModalTitle,
  OptionsContainer,
  OptionItem,
  OptionText,
  ConfirmButtonWrapper,
} from './numberOfPeople.styles';
import Button from '../../../components/common/button/button';

interface NumberOfPeopleProps {
  isOpen: boolean;

  onClose: () => void;
  onSelect?: (value: string) => void;
}

const NumberOfPeople: React.FC<NumberOfPeopleProps> = ({ isOpen, onClose, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string>('2명');

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
        <ModalTitle>구하시는 인원을 선택해주세요</ModalTitle>
        <OptionsContainer>
          {TEAM_NUMBER_OF_PEOPLE_OPTIONS.map((option) => (
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

export default NumberOfPeople;
