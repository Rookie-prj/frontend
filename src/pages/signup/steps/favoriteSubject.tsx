import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import Input from '../../../components/common/input/input';
import { useSignupStore } from '../../../store/signupStore';
import { SIGNUP } from '../../../constants/signup';

interface FavoriteSubjectProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const FavoriteSubject = ({ onNext, currentStep }: FavoriteSubjectProps) => {
  const { university, setUniversity } = useSignupStore();

  return (
    <SignupLayout title={SIGNUP.REQUIRED_TOOLSET} currentStep={4} totalSteps={5} onNext={onNext}>
      <Input
        placeholder="루키대학교"
        value={university}
        onChange={setUniversity}
        showMaxLength={false}
      />
    </SignupLayout>
  );
};
