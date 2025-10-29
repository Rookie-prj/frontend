import {
  PreferencesContainer,
  PreferencesTitle,
  PreferencesWrapper,
  PreferencesLabel,
  DistanceChip,
  ToolsChip,
  MethodChip,
  ToolsChipsContainer,
} from './preferenceSection.styles';
import {
  TEAM_DISTANCE_OPTIONS,
  TEAM_COOPERATION_METHOD_OPTIONS,
} from '../../../constants/createProject';

interface PreferenceSectionProps {
  distance: string;
  tools: string[];
  method: string;
}

// value를 label로 변환하는 헬퍼 함수들
const getDistanceLabel = (value: string) => {
  const option = TEAM_DISTANCE_OPTIONS.find((opt) => opt.value === value);
  return option?.label || value;
};

const getMethodLabel = (value: string) => {
  const option = TEAM_COOPERATION_METHOD_OPTIONS.find((opt) => opt.value === value);
  return option?.label || value;
};

const PreferenceSection = ({ distance, tools, method }: PreferenceSectionProps) => {
  return (
    <PreferencesContainer>
      <PreferencesTitle>이런 사람과 같이 하고 싶어요!</PreferencesTitle>
      <PreferencesWrapper>
        <PreferencesLabel>선호하는 거리</PreferencesLabel>
        <DistanceChip>{distance}</DistanceChip>
      </PreferencesWrapper>
      <PreferencesWrapper>
        <PreferencesLabel>사용하는 협업툴</PreferencesLabel>
        <ToolsChipsContainer>
          {tools.map((tool, index) => (
            <ToolsChip key={index}>{tool}</ToolsChip>
          ))}
        </ToolsChipsContainer>
      </PreferencesWrapper>
      <PreferencesWrapper>
        <PreferencesLabel>모이는 방식</PreferencesLabel>
        <MethodChip>{method}</MethodChip>
      </PreferencesWrapper>
    </PreferencesContainer>
  );
};

export default PreferenceSection;
