import { StepBarContainer, StepBarItem } from './stepBar.styles';

interface StepBarProps {
  currentStep: number;
  totalSteps: number;
}

const StepBar = ({ currentStep, totalSteps }: StepBarProps) => {
  return (
    <StepBarContainer>
      {Array.from({ length: totalSteps }, (_, index) => (
        <StepBarItem key={index} active={index === currentStep} />
      ))}
    </StepBarContainer>
  );
};

export default StepBar;
