import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';

import { useSignupStore } from '../../../store/signupStore';
import { SIGNUP, UNIVERSITY_PUBLIC_OPTIONS } from '../../../constants/signup';
import DistanceOptions from '../../../components/createProject/distanceOptions/distanceOptions';

interface UniversityPublicProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const UniversityPublic = ({ onNext, currentStep }: UniversityPublicProps) => {
  const { universityPublic, setUniversityPublic } = useSignupStore();

  const isFormValid =
    universityPublic !== null && universityPublic !== undefined && universityPublic !== '';

  return (
    <SignupLayout
      title={SIGNUP.REQUIRED_UNIVERSITY_PUBLIC}
      currentStep={0}
      totalSteps={5}
      onNext={onNext}
      buttonVariant="signup"
      isFormValid={isFormValid}
    >
      <DistanceOptions
        options={UNIVERSITY_PUBLIC_OPTIONS}
        selectedValue={universityPublic || undefined}
        onSelect={setUniversityPublic}
      />
    </SignupLayout>
  );
};
