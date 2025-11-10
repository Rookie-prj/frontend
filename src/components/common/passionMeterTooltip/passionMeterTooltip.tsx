import { useEffect, useState } from 'react';
import * as S from './passionMeterTooltip.styles';
import close from '../../../assets/icons/tootipClose.svg';

interface PassionMeterTooltipProps {
  isVisible: boolean;
  onClose: () => void;
}

const PassionMeterTooltip = ({ isVisible, onClose }: PassionMeterTooltipProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsClosing(false);

      const timer = setTimeout(() => {
        handleClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <S.ToastContainer isClosing={isClosing}>
      <S.ContentWrapper>
        <S.MessageText>
          루키의 참여도에 따라 열정이 1~4단계로 높아져요. 프로젝트와 채팅으로 성장해보세요!
        </S.MessageText>
        <S.CloseButton onClick={handleClose} aria-label="닫기">
          <img src={close} alt="close" />
        </S.CloseButton>
      </S.ContentWrapper>
    </S.ToastContainer>
  );
};

export default PassionMeterTooltip;
