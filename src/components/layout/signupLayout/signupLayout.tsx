import { ReactNode } from 'react';
import Button from '../../common/button/button';
import StepBar from '../../createProject/stepBar/stepBar';
import { BaseContainer, BaseContainerWithSpaceBetween } from '../../container/container.styles';
import BackDrop from '../../common/backDrop/backDrop';
import { StepTitle } from '../../../pages/createProject/steps/steps.styles';

interface SignupLayoutProps {
  title: string;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev?: () => void;
  children?: ReactNode;
}

export const SignupLayout = ({
  title,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  children,
}: SignupLayoutProps) => {
  return (
    <BaseContainerWithSpaceBetween>
      <BackDrop />
      <BaseContainer>
        <StepTitle>{title}</StepTitle>
        <StepBar currentStep={currentStep} totalSteps={totalSteps} />
        {children}
      </BaseContainer>

      <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
        <Button onClick={onNext} size="large">
          다음
        </Button>
      </div>
    </BaseContainerWithSpaceBetween>
  );
};
