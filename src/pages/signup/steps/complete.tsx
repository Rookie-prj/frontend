import { TEAM, TEAM_PERIOD_OPTIONS } from '../../../constants/createProject';
import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';
import {
  BaseContainer,
  BaseContainerWithSpaceBetween,
} from '../../../components/container/container.styles';
import { OptionsScrollWrapper } from '../../../components/createProject/common/options/options.styles';
import BackDrop from '../../../components/common/backDrop/backDrop';
import { StepTitle } from '../../createProject/steps/steps.styles';
import ProjectCategorySection from '../../../components/home/projectCategorySection/projectCategorySection';
import Questions from '../../../components/createProject/common/questions/questions';
import Options from '../../../components/createProject/common/options/options';
import { useCreateProjectStore } from '../../../store/createProjectStore';

interface CompleteProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const Complete = ({ onNext, currentStep }: CompleteProps) => {
  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP1}</StepTitle>
          <StepBar currentStep={currentStep} totalSteps={5} />
        </BaseContainer>

        <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
          <Button onClick={onNext}>다음</Button>
        </div>
      </BaseContainerWithSpaceBetween>
    </>
  );
};
