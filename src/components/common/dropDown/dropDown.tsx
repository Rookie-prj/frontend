import dropDown from '../../../assets/icons/dropDown.svg';
import { FieldContainer, FieldInput, FieldWrapper } from '../../container/filedContainer.styles';

import { RotatingIcon } from './dropDown.styles';

interface DropDownProps {
  placeholder: string;
  value?: string;
  onClick: () => void;
  onChange?: (value: string) => void;
  isOpen?: boolean;
}

const DropDown = ({ placeholder, value, onClick, onChange, isOpen = false }: DropDownProps) => {
  return (
    <FieldContainer onClick={onClick}>
      <FieldWrapper>
        <FieldInput placeholder={placeholder} value={value} readOnly />
        <RotatingIcon src={dropDown} alt="dropDown" isRotating={isOpen} />
      </FieldWrapper>
    </FieldContainer>
  );
};

export default DropDown;
