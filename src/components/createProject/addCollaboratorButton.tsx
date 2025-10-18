import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import plusIcon from '../../assets/icons/grayPlus.svg';

interface AddCollaboratorButtonProps {
  onClick?: () => void;
  className?: string;
}

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;

  gap: 0.375rem;
  padding: 0.75rem 0.69rem;
  background-color: ${colors.gray[150]};
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  height: 2.75rem;
  width: fit-content;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.gray[200]};
  }

  &:active {
    background-color: ${colors.gray[300]};
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

const ButtonText = styled.span`
  color: ${colors.gray[600]};
  font-family: 'Pretendard', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.00875rem;
`;

const AddCollaboratorButton = ({ onClick, className }: AddCollaboratorButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} className={className}>
      <ContentWrapper>
        <IconWrapper>
          <img src={plusIcon} alt="plus" width="24" height="24" />
        </IconWrapper>
        <ButtonText>협업자 추가하기</ButtonText>
      </ContentWrapper>
    </ButtonContainer>
  );
};

export default AddCollaboratorButton;
