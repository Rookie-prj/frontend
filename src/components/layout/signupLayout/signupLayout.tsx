import { ReactNode } from 'react';
import Button from '../../common/button/button';
import StepBar from '../../createProject/stepBar/stepBar';
import { BaseContainer, BaseContainerWithSpaceBetween } from '../../container/container.styles';
import { StepTitle } from '../../../pages/createProject/steps/steps.styles';
import { StepSubText } from './signupLayout.styles';
import Header from '../../header/header';

interface SignupLayoutProps {
  title: ReactNode;
  subText?: string;
  currentStep?: number;
  totalSteps?: number;
  onNext: () => void;
  onPrev?: () => void;
  children?: ReactNode;
  headerType?: 'backdrop' | 'backdropWithSkip';
  stepBar?: boolean;
  buttonText?: string;
  buttonVariant?: 'default' | 'signup';
  isFormValid?: boolean;
}

export const SignupLayout = ({
  title,
  subText,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  children,
  headerType = 'backdrop',
  stepBar = true,
  buttonText = '다음',
  buttonVariant = 'default',
  isFormValid = true,
}: SignupLayoutProps) => {
  return (
    <BaseContainerWithSpaceBetween>
      <Header type={headerType} />
      <BaseContainer>
        <StepTitle>{title}</StepTitle>
        {subText && <StepSubText>{subText}</StepSubText>}
        {stepBar && currentStep && totalSteps && (
          <StepBar currentStep={currentStep} totalSteps={totalSteps} />
        )}
        {children}
      </BaseContainer>
      <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
        <Button
          onClick={onNext}
          size="large"
          variant={buttonVariant === 'signup' ? (isFormValid ? 'primary' : 'gray') : 'primary'}
          disabled={buttonVariant === 'signup' && !isFormValid}
        >
          {buttonText}
        </Button>
      </div>
    </BaseContainerWithSpaceBetween>
  );
};
