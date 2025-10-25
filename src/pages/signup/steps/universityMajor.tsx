import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import Input from '../../../components/common/input/input';
import { useSignupStore } from '../../../store/signupStore';
import { SIGNUP } from '../../../constants/signup';
import Grade from '../../../components/modal/grade/grade';
import DropDown from '../../../components/common/dropDown/dropDown';
import { useState } from 'react';
import { StepContainer } from '../../../components/container/container.styles';
import Questions from '../../../components/createProject/common/questions/questions';

interface UniversityMajorProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const UniversityMajor = ({ onNext, currentStep }: UniversityMajorProps) => {
  const { universityMajor, setUniversityMajor } = useSignupStore();
  const { universityGrade, setUniversityGrade } = useSignupStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleGradeSelect = (value: string) => {
  //   setUniversityGrade(value);
  //   console.log('Selected grade:', value);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (value: string) => {
    setUniversityMajor(value);
  };
  return (
    <>
      <SignupLayout
        title={SIGNUP.REQUIRED_UNIVERSITY_MAJOR}
        currentStep={0}
        totalSteps={5}
        onNext={onNext}
      >
        <Input
          placeholder="오버워치정크랫학과"
          value={universityMajor}
          onChange={handleInputChange}
          maxLength={22}
        />
        {universityMajor && (
          <StepContainer style={{ marginTop: '0.5rem' }}>
            <Questions text="학년" />
            <DropDown
              placeholder={'1학년'}
              value={universityGrade || ''}
              onClick={handleOpenModal}
              isOpen={isModalOpen}
            />
          </StepContainer>
        )}
      </SignupLayout>
      <Grade isOpen={isModalOpen} onClose={handleCloseModal} onSelect={setUniversityGrade} />
    </>
  );
};
