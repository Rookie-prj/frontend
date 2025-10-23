import * as S from './FixedBottomBar.styles';
import cheerupIcon from '../../../assets/icons/cheerupIcon.svg';
interface FixedBottomBarProps {
  onSupport?: () => void;
  onMessage?: () => void;
  supportIcon?: React.ReactNode;
  supportText?: string;
  messageText?: string;
}

function FixedBottomBar({
  onSupport,
  onMessage,
  supportIcon = <img src={cheerupIcon} alt="cheerup" />,
  supportText = '응원하기',
  messageText = '메세지보내기',
}: FixedBottomBarProps) {
  return (
    <S.FixedBottomBar>
      <S.ActionButton variant="secondary" onClick={onSupport}>
        {supportIcon && <S.IconWrapper>{supportIcon}</S.IconWrapper>}
        <S.ButtonText variant="secondary">{supportText}</S.ButtonText>
      </S.ActionButton>

      <S.ActionButton variant="primary" onClick={onMessage}>
        <S.ButtonText variant="primary">{messageText}</S.ButtonText>
      </S.ActionButton>
    </S.FixedBottomBar>
  );
}

export default FixedBottomBar;
