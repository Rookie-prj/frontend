import * as S from './profileSendBottomSheet.styles';
import Button from '../../common/button/button';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface ProfileSendBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ProfileSendBottomSheet = ({ isOpen, onClose, onConfirm }: ProfileSendBottomSheetProps) => {
  const ref = useOutsideClick(onClose);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.BottomSheetContainer ref={ref}>
        <S.HandleBar />
        <S.ContentWrapper>
          <S.Title>내 프로필을 상대방에게 보낼까요?</S.Title>
          <S.Description>
            프로필을 공유하면 상대방이 당신의 역할, 기술,
            <br />
            참여 의사를 한 눈에 확인할 수 있어요.
          </S.Description>
          <S.ButtonWrapper>
            <Button size="medium" variant="primary" onClick={handleConfirm}>
              보내기
            </Button>
          </S.ButtonWrapper>
        </S.ContentWrapper>
      </S.BottomSheetContainer>
    </>
  );
};

export default ProfileSendBottomSheet;
