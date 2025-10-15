import dropDown from '../../../assets/icons/dropDown.svg';
import { FieldContainer, FieldInput, FieldWrapper } from '../../container/filedContainer.styles';
interface DropDownProps {
  placeholder: string;
  value?: string;
  onClick: () => void;
  onChange?: (value: string) => void;
}
const DropDown = ({ placeholder, value, onClick, onChange }: DropDownProps) => {
  return (
    <FieldContainer onClick={onClick}>
      <FieldWrapper>
        <FieldInput placeholder={placeholder} value={value} readOnly />
        <img src={dropDown} alt="dropDown" />
      </FieldWrapper>
    </FieldContainer>
  );
};

export default DropDown;
