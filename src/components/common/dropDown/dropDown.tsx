import dropDown from '../../../assets/icons/dropDown.svg';
import { FieldContainer, FieldInput, FieldWrapper } from '../../container/filedContainer.styles';
import { Warning } from '../warning/warning';
import { colors } from '../../../style/colors';
import { RotatingIcon } from './dropDown.styles';

interface DropDownProps {
  placeholder: string;
  value?: string;
  onClick: () => void;
  onChange?: (value: string) => void;
  isOpen?: boolean;
  warningMessage?: string;
  showWarning?: boolean;
}

const DropDown = ({
  placeholder,
  value,
  onClick,
  onChange,
  isOpen = false,
  warningMessage,
  showWarning = false,
}: DropDownProps) => {
  return (
    <FieldContainer onClick={onClick}>
      <FieldWrapper
        style={
          showWarning
            ? {
                borderColor: '#ff6C22',
                backgroundColor: '#ffdcd6',
              }
            : undefined
        }
      >
        <FieldInput
          placeholder={placeholder}
          value={value}
          readOnly
          $warning={showWarning}
          style={showWarning ? { color: colors.gray[300] } : undefined}
        />
        <RotatingIcon src={dropDown} alt="dropDown" isRotating={isOpen} />
      </FieldWrapper>
      {showWarning && warningMessage && <Warning message={warningMessage} show={showWarning} />}
    </FieldContainer>
  );
};

export default DropDown;
