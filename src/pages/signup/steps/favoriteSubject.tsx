import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import { useSignupStore } from '../../../store/signupStore';
import { FAVORITE_SUBJECT, SIGNUP } from '../../../constants/signup';
import MultiSelectTags from '../../../components/common/multiSelectTags/multiSelectTags';
import { useState } from 'react';

interface FavoriteSubjectProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const FavoriteSubject = ({ onNext, currentStep }: FavoriteSubjectProps) => {
  const { favoriteSubject, setFavoriteSubject } = useSignupStore();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    favoriteSubject ? favoriteSubject.split(',') : [],
  );

  const handleSelectionChange = (values: string[]) => {
    setSelectedSubjects(values);
    setFavoriteSubject(values.join(','));
  };

  return (
    <SignupLayout
      title={SIGNUP.REQUIRED_FAVORITE_SUBJECT}
      currentStep={4}
      totalSteps={5}
      onNext={onNext}
      headerType="backdropWithSkip"
    >
      <MultiSelectTags
        label={SIGNUP.FAVORITE_SUBJECT_SELECTION_LIMIT}
        options={FAVORITE_SUBJECT}
        selectedValues={selectedSubjects}
        onSelectionChange={handleSelectionChange}
        maxSelections={5}
      />
    </SignupLayout>
  );
};
