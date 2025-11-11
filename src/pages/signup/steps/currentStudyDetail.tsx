import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import { useSignupStore } from '../../../store/signupStore';
import {
  SIGNUP,
  CURRENT_STUDY_OPTIONS,
  CURRENT_STUDY_DETAIL_OPTIONS,
} from '../../../constants/signup';
import MultiSelectTags from '../../../components/common/multiSelectTags/multiSelectTags';
import { useState } from 'react';

interface CurrentStudyDetailProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const CurrentStudyDetail = ({ onNext, currentStep }: CurrentStudyDetailProps) => {
  const { currentStudy, currentStudyDetail, setCurrentStudyDetail } = useSignupStore();
  const [selectedDetails, setSelectedDetails] = useState<string[]>(
    currentStudyDetail ? currentStudyDetail.split(',') : [],
  );

  const getCurrentOptions = () => {
    const currentCategory = CURRENT_STUDY_OPTIONS.find((option) => option.value === currentStudy);
    return currentCategory?.options || [];
  };

  const handleSelectionChange = (selectedValues: string[]) => {
    setSelectedDetails(selectedValues);
    setCurrentStudyDetail(selectedValues.join(','));
  };

  const isFormValid = selectedDetails.length > 0;

  return (
    <SignupLayout
      title={SIGNUP.REQUIRED_CURRENT_STUDY_DETAIL}
      subText={SIGNUP.CURRENT_STUDY_DETAIL_SUBTEXT}
      currentStep={2}
      totalSteps={5}
      onNext={onNext}
      buttonVariant="signup"
      isFormValid={isFormValid}
    >
      <MultiSelectTags
        label={SIGNUP.CURRENT_STUDY_DETAIL_DUPLICATION_SELECT}
        options={getCurrentOptions()}
        selectedValues={selectedDetails}
        onSelectionChange={handleSelectionChange}
        maxSelections={3}
      />
    </SignupLayout>
  );
};
