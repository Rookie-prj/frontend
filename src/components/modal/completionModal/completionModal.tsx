import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../style/colors';
import { ROUTES } from '../../../constants/routes';
import twoHands from '../../../assets/icons/twoHands.svg';

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewPost: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.76);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border: 1.25px solid #f3f4f6;
  border-radius: 16px;
  width: 17.875rem;
  height: 13.9375rem;
  padding: 0 0.75rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  margin-top: 1.6875rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  color: #364153;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.16px;
`;

const IconContainer = styled.div`
  margin-top: 22px;
  width: 107px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17.833px 4.458px;
`;

const Icon = styled.div`
  width: 97.943px;
  height: 68.688px;

  background-size: contain;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.375rem;
  padding-top: 0.85rem;
`;

const Button = styled.button<{ variant: 'secondary' | 'primary' }>`
  flex: 1;
  height: 43px;
  border-radius: 8px;
  border: none;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  margin-bottom: 0.06rem;
  transition: all 0.2s ease;

  ${({ variant }) =>
    variant === 'secondary'
      ? `
        background: #f3f4f6;
        color: #0f172a;
      `
      : `
        background: #66f285;
        color: #282828;
 
      `}
`;

const CompletionModal: React.FC<CompletionModalProps> = ({ isOpen, onClose, onViewPost }) => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate(ROUTES.home);
  };
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>게시글 등록이 완료되었습니다!</Title>
        <img src={twoHands} alt="twoHands" />
        <ButtonContainer>
          <Button variant="secondary" onClick={handleRedirectToHome}>
            닫기
          </Button>
          <Button variant="primary" onClick={onViewPost}>
            게시글 보기
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default CompletionModal;
