import * as S from './FixedBottomBar.styles';
import cheerupIcon from '../../../assets/icons/cheerupIcon.svg';
interface FixedBottomBarProps {
  onSupport?: () => void;
  onMessage?: () => void;
  supportIcon?: React.ReactNode;
  supportText?: string;
  messageText?: string;
  disabled?: boolean;
}

function FixedBottomBar({
  onSupport,
  onMessage,
  supportIcon = <img src={cheerupIcon} alt="cheerup" />,
  supportText = '응원하기',
  messageText = '메세지보내기',
  disabled = false,
}: FixedBottomBarProps) {
  return (
    <S.FixedBottomBar>
      <S.ActionButton variant="cheer" onClick={onSupport} disabled={disabled}>
        {supportIcon && <S.IconWrapper>{supportIcon}</S.IconWrapper>}
        <S.ButtonText variant="cheer">{supportText}</S.ButtonText>
      </S.ActionButton>

      <S.ActionButton variant="chat" onClick={onMessage} disabled={disabled}>
        <S.ButtonText variant="chat">{messageText}</S.ButtonText>
      </S.ActionButton>
    </S.FixedBottomBar>
  );
}

export default FixedBottomBar;
