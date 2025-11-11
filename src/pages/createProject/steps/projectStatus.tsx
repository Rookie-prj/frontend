import StepBar from '../../../components/createProject/stepBar/stepBar';
import {
  BaseContainer,
  BaseContainerWithSpaceBetween,
  StepContainer,
} from '../../../components/container/container.styles';
import BackDrop from '../../../components/common/backDrop/backDrop';
import { StepTitle } from './steps.styles';
import { TEAM } from '../../../constants/createProject';
import Questions from '../../../components/createProject/common/questions/questions';
import CompletenessOptions from '../../../components/createProject/completenessOptions/completenessOptions';
import Button from '../../../components/common/button/button';
import { useCreateProjectStore } from '../../../store/createProjectStore';
import { isValidString } from '../../../utils/formValidation';
interface ProjectStatusProps {
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
}

const ProjectStatus = ({ onNext, onPrev, currentStep }: ProjectStatusProps) => {
  const { selectedProjectStatus, setSelectedProjectStatus } = useCreateProjectStore();

  const handleStatusSelect = (value: string) => {
    setSelectedProjectStatus(value);
    console.log('Selected project status:', value);
  };

  const isFormValid = isValidString(selectedProjectStatus);

  return (
    <BaseContainerWithSpaceBetween>
      <BackDrop />
      <BaseContainer>
        <StepTitle>{TEAM.STEP6}</StepTitle>
        <StepBar currentStep={currentStep} totalSteps={5} />

        <StepContainer>
          <Questions text={TEAM.STEP6_PROJECT_STATUS} number="three" />
          <CompletenessOptions
            selectedValue={selectedProjectStatus || undefined}
            onSelect={handleStatusSelect}
          />
        </StepContainer>
      </BaseContainer>
      <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
        <Button onClick={onNext} variant={isFormValid ? 'primary' : 'disabled'}>
          다음
        </Button>
      </div>
    </BaseContainerWithSpaceBetween>
  );
};
export default ProjectStatus;
