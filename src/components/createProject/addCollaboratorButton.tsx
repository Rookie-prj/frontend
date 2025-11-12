import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import plusIcon from '../../assets/icons/grayPlus.svg';

interface AddCollaboratorButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonContainer = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.75rem 0.69rem;
  background-color: ${({ disabled }) => (disabled ? colors.gray[100] : colors.gray[150])};
  border: none;
  border-radius: 0.625rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 2.75rem;
  width: fit-content;
  transition: background-color 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? colors.gray[100] : colors.gray[200])};
  }

  &:active {
    background-color: ${({ disabled }) => (disabled ? colors.gray[100] : colors.gray[300])};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.span<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? colors.gray[400] : colors.gray[600])};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.00875rem;
`;

const AddCollaboratorButton = ({ onClick, className, disabled }: AddCollaboratorButtonProps) => {
  return (
    <ButtonContainer
      onClick={disabled ? undefined : onClick}
      className={className}
      disabled={disabled}
    >
      <ContentWrapper>
        <IconWrapper>
          <img src={plusIcon} alt="plus" width="24" height="24" />
        </IconWrapper>
        <ButtonText disabled={disabled}>협업자 추가하기</ButtonText>
      </ContentWrapper>
    </ButtonContainer>
  );
};

export default AddCollaboratorButton;
