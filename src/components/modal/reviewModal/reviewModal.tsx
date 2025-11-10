import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
import Button from '../../common/button/button';
import TextArea from '../../common/textArea/textArea';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { usePreventScroll } from '../../../hooks/usepreventScroll';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (rating: number, content: string) => void;
  userName?: string;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
  height: 37.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid ${colors.gray[200]};
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-size: ${typography.headline.headline4.fontSize};
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${colors.gray[600]};
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 8px 0;
`;

const StarButton = styled.button<{ filled: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 32px;
  color: ${({ filled }) => (filled ? '#FFD700' : colors.gray[300])};
  transition: color 0.2s;

  &:hover {
    color: #ffd700;
  }
`;

const RatingText = styled.p`
  font-size: ${typography.subhead.subhead1.fontSize};
  color: ${colors.gray[600]};
  text-align: center;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid ${colors.gray[200]};
  flex-shrink: 0;
`;

const StyledButton = styled(Button)`
  flex: 1;
`;

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmit, userName }) => {
  usePreventScroll(isOpen);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const ref = useOutsideClick(() => onClose());

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert('별점을 선택해주세요.');
      return;
    }
    if (content.trim().length === 0) {
      alert('후기 내용을 입력해주세요.');
      return;
    }
    if (onSubmit) {
      onSubmit(rating, content);
    }
    setRating(0);
    setContent('');
    onClose();
  };

  const handleClose = () => {
    setRating(0);
    setContent('');
    onClose();
  };

  if (!isOpen) return null;

  const ratingTexts = ['', '매우 불만족', '불만족', '보통', '만족', '매우 만족'];

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer ref={ref} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Title>{userName ? `${userName}님에 대한 후기 작성` : '후기 작성'}</Title>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>

        <ScrollableContent>
          <div>
            <RatingText>별점을 선택해주세요</RatingText>
            <StarContainer>
              {[1, 2, 3, 4, 5].map((value) => (
                <StarButton
                  key={value}
                  filled={value <= rating}
                  onClick={() => handleStarClick(value)}
                  type="button"
                >
                  ★
                </StarButton>
              ))}
            </StarContainer>
            {rating > 0 && <RatingText>{ratingTexts[rating]}</RatingText>}
          </div>

          <div>
            <TextArea
              placeholder="후기 내용을 입력해주세요"
              value={content}
              onChange={(value) => setContent(value)}
              maxLength={500}
            />
          </div>
        </ScrollableContent>

        <ButtonContainer>
          <StyledButton variant="gray" onClick={handleClose}>
            취소
          </StyledButton>
          <StyledButton variant="primary" onClick={handleSubmit}>
            등록하기
          </StyledButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default ReviewModal;
