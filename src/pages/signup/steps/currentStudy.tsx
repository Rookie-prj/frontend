import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import { useSignupStore } from '../../../store/signupStore';
import CurrentStudyCategory from '../../../components/signup/currentStudyCategory';
import { colors } from '../../../style/colors';
interface CurrentStudyProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const CurrentStudy = ({ onNext, currentStep }: CurrentStudyProps) => {
  const { currentStudy, setCurrentStudy } = useSignupStore();

  const signupTexts = {
    REQUIRED_CURRENT_STUDY: (
      <>
        현재 <span style={{ color: colors.green[200] }}>전공</span>하고 있거나
        <br />
        공부하는 분야를 알려주세요!
      </>
    ),
  };

  const isFormValid = currentStudy !== null && currentStudy !== undefined && currentStudy !== '';

  return (
    <SignupLayout
      title={signupTexts.REQUIRED_CURRENT_STUDY}
      currentStep={1}
      totalSteps={5}
      onNext={onNext}
      buttonVariant="signup"
      isFormValid={isFormValid}
    >
      <CurrentStudyCategory selectedCategory={currentStudy} onCategorySelect={setCurrentStudy} />
    </SignupLayout>
  );
};
