import { TEAM, TEAM_PERIOD_OPTIONS } from '../../../constants/createProject';
import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';
import {
  BaseContainer,
  BaseContainerWithSpaceBetween,
} from '../../../components/container/container.styles';
import { OptionsScrollWrapper } from '../../../components/createProject/common/options/options.styles';
import BackDrop from '../../../components/common/backDrop/backDrop';
import { StepTitle } from './steps.styles';
import ProjectCategorySection from '../../../components/home/projectCategorySection/projectCategorySection';
import Questions from '../../../components/createProject/common/questions/questions';
import Options from '../../../components/createProject/common/options/options';
import { useCreateProjectStore } from '../../../store/createProjectStore';
import { validateStep1 } from '../../../utils/formValidation';

interface CreateProjectStep1Props {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const CreateProjectStep1 = ({ onNext, currentStep }: CreateProjectStep1Props) => {
  const { selectedPeriod, selectedProjectType, setSelectedPeriod, setSelectedProjectType } =
    useCreateProjectStore();

  const handleProjectTypeSelect = (projectType: string) => {
    setSelectedProjectType(projectType);
    console.log('Selected project type:', projectType);
  };
  const handlePeriodSelect = (period: number) => {
    setSelectedPeriod(period);
    console.log('Selected period:', period);
  };

  const isFormValid = validateStep1(selectedProjectType, selectedPeriod);

  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP1}</StepTitle>
          <StepBar currentStep={currentStep} totalSteps={5} />
          <ProjectCategorySection
            showViewAll={false}
            onCardClick={handleProjectTypeSelect}
            layout="col"
          />
          <Questions text="프로젝트 예상기간" />
          <OptionsScrollWrapper>
            {TEAM_PERIOD_OPTIONS.map((option) => (
              <Options
                key={option.value}
                text={option.label}
                isActive={selectedPeriod === Number(option.value)}
                onClick={() => handlePeriodSelect(Number(option.value))}
              />
            ))}
          </OptionsScrollWrapper>
        </BaseContainer>

        <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
          <Button onClick={onNext} variant={isFormValid ? 'primary' : 'disabled'}>
            다음
          </Button>
        </div>
      </BaseContainerWithSpaceBetween>
    </>
  );
};
