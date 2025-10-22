import { ActionButtonsContainer, PrimaryButton, SecondaryButton } from './bottomActions.styles';
import GrayFire from '../../../assets/icons/grayFire.svg';
const BottomActions = () => {
  const handleSupport = () => {
    // 응원하기 기능
    console.log('응원하기');
  };

  const handleChat = () => {
    // 대화하기 기능
    console.log('대화하기');
  };

  return (
    <ActionButtonsContainer>
      <SecondaryButton onClick={handleSupport}>
        <img src={GrayFire} alt="grayFire" />
        응원하기
      </SecondaryButton>
      <PrimaryButton onClick={handleChat}>대화하기</PrimaryButton>
    </ActionButtonsContainer>
  );
};

export default BottomActions;
