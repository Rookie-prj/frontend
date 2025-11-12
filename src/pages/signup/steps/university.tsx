import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import Input from '../../../components/common/input/input';
import { useSignupStore } from '../../../store/signupStore';
import { SIGNUP } from '../../../constants/signup';

interface UniversityProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const University = ({ onNext, currentStep }: UniversityProps) => {
  const { university, setUniversity } = useSignupStore();

  const isFormValid = university?.trim() !== '';

  return (
    <SignupLayout
      title={SIGNUP.REQUIRED_UNIVERSITY}
      currentStep={0}
      totalSteps={5}
      onNext={onNext}
      buttonVariant="signup"
      isFormValid={isFormValid}
    >
      <Input
        placeholder="루키대학교"
        value={university}
        onChange={setUniversity}
        showMaxLength={false}
      />
    </SignupLayout>
  );
};
