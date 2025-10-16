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
import DistanceOptions from '../../../components/createProject/common/distanceOptions/distanceOptions';
import Options from '../../../components/createProject/common/options/options';
import MethodChips from '../../../components/createProject/common/methodChips/methodChips';
import { useState } from 'react';
import { colors } from '../../../style/colors';

interface CreateProjectStep4Props {
  onNext: () => void;
  onPrev: () => void;
}

export const CreateProjectStep4 = ({ onNext, onPrev }: CreateProjectStep4Props) => {
  const [selectedDistance, setSelectedDistance] = useState<string>('');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [skillText, setSkillText] = useState<string>('');

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

  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP4}</StepTitle>
          <StepBar currentStep={3} totalSteps={5} />
          <StepContainer>
            <Questions text={TEAM.STEP4_ROOKIE_DISTANCE} number="one" />
            <DistanceOptions
              options={TEAM_DISTANCE_OPTIONS}
              selectedValue={selectedDistance}
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
              selectedValue={selectedMethod}
              onSelect={handleMethodSelect}
            />
          </StepContainer>
        </BaseContainer>

        <div style={{ marginBottom: '1.7rem', marginTop: '2.38rem' }}>
          <Button onClick={onNext}>다음</Button>
        </div>
      </BaseContainerWithSpaceBetween>
    </>
  );
};
