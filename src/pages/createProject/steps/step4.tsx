import {
  TEAM,
  TEAM_DISTANCE_OPTIONS,
  TEAM_COOPERATION_TOOL_OPTIONS,
  TEAM_COOPERATION_METHOD_OPTIONS,
} from '../../../constants/createProject';
import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';
import {
  StepContainer,
  BaseContainer,
  BaseContainerWithSpaceBetween,
} from '../../../components/container/container.styles';
import BackDrop from '../../../components/common/backDrop/backDrop';
import { StepTitle } from './steps.styles';
import Questions from '../../../components/createProject/common/questions/questions';
import TextArea from '../../../components/common/textArea/textArea';
import DistanceOptions from '../../../components/createProject/distanceOptions/distanceOptions';
import Options from '../../../components/createProject/common/options/options';
import MethodChips from '../../../components/createProject/methodChips/methodChips';
import { useCreateProjectStore } from '../../../store/createProjectStore';
import { colors } from '../../../style/colors';
import { validateStep4 } from '../../../utils/formValidation';

interface CreateProjectStep4Props {
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
}

export const CreateProjectStep4 = ({ onNext, onPrev, currentStep }: CreateProjectStep4Props) => {
  const {
    selectedDistance,
    selectedTools,
    selectedMethod,
    skillText,
    setSelectedDistance,
    setSelectedTools,
    setSelectedMethod,
    setSkillText,
  } = useCreateProjectStore();

  const handleDistanceSelect = (distance: string) => {
    setSelectedDistance(distance);
  };

  const handleToolSelect = (tool: string) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else if (selectedTools.length < 3) {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
  };

  const handleSkillChange = (value: string) => {
    setSkillText(value);
  };

  const isFormValid = validateStep4(selectedDistance, skillText, selectedTools, selectedMethod);

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP4}</StepTitle>
          <StepBar currentStep={currentStep} totalSteps={5} />
          <StepContainer>
            <Questions text={TEAM.STEP4_ROOKIE_DISTANCE} number="one" />
            <DistanceOptions
              options={TEAM_DISTANCE_OPTIONS}
              selectedValue={selectedDistance || undefined}
              onSelect={handleDistanceSelect}
            />
          </StepContainer>

          <StepContainer style={{ marginTop: '1.87rem' }}>
            <Questions text={TEAM.STEP4_ROOKIE_SKILL} number="two" />
            <TextArea
              placeholder={TEAM.STEP4_ROOKIE_SKILL_PLACEHOLDER}
              value={skillText}
              onChange={handleSkillChange}
              maxLength={2000}
            />
          </StepContainer>

          <StepContainer style={{ marginTop: '1.25rem' }}>
            <Questions
              text={TEAM.STEP4_ROOKIE_COOPERATION_TOOL}
              number="three"
              subText={TEAM.STEP4_ROOKIE_COOPERATION_TOOL_PLACEHOLDER}
              align="flex-start"
            />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.62rem', width: '100%' }}>
              {TEAM_COOPERATION_TOOL_OPTIONS.map((option) => (
                <Options
                  key={option.value}
                  text={option.label}
                  isActive={selectedTools.includes(option.value)}
                  onClick={() => handleToolSelect(option.value)}
                />
              ))}
            </div>
          </StepContainer>

          <StepContainer style={{ marginTop: '2.38rem' }}>
            <Questions text={TEAM.STEP4_ROOKIE_COOPERATION_METHOD} number="four" />
            <MethodChips
              options={TEAM_COOPERATION_METHOD_OPTIONS}
              selectedValue={selectedMethod || ''}
              onSelect={handleMethodSelect}
            />
          </StepContainer>
        </BaseContainer>

        <div style={{ marginBottom: '1.7rem', marginTop: '2.38rem' }}>
          <Button onClick={handleNext} variant={isFormValid ? 'primary' : 'disabled'}>
            다음
          </Button>
        </div>
      </BaseContainerWithSpaceBetween>
    </>
  );
};
