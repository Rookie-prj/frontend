import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import Input from '../../../components/common/input/input';
import { useSignupStore } from '../../../store/signupStore';
import { SIGNUP } from '../../../constants/signup';
import Grade from '../../../components/modal/grade/grade';
import DropDown from '../../../components/common/dropDown/dropDown';
import { useState } from 'react';
import ProjectCount from '../../../components/modal/projectCount/projectCount';

interface ProjectCountProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const ProjectCountStep = ({ onNext, currentStep }: ProjectCountProps) => {
  const { projectCount, setProjectCount } = useSignupStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const isFormValid = projectCount !== null && projectCount !== undefined && projectCount !== '';

  return (
    <>
      <SignupLayout
        title={SIGNUP.REQUIRED_PROJECT_COUNT}
        currentStep={4}
        totalSteps={5}
        headerType="backdropWithSkip"
        onNext={onNext}
        buttonVariant="signup"
        isFormValid={isFormValid}
      >
        <DropDown
          placeholder={'1개'}
          value={projectCount || ''}
          onClick={handleOpenModal}
          isOpen={isModalOpen}
        />
      </SignupLayout>
      <ProjectCount isOpen={isModalOpen} onClose={handleCloseModal} onSelect={setProjectCount} />
    </>
  );
};
