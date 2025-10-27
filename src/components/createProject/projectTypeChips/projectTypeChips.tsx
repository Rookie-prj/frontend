import styled from '@emotion/styled';

import MethodChips from '../methodChips/methodChips';

import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
import PROJECT_TYPE from '../../../constants/projectType';
interface ProjectTypeChipsProps {
  selectedProjectType: string | null;
  setSelectedProjectType: (projectType: string | null) => void;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const Title = styled.p`
  color: ${colors.gray[700]};
  font-size: ${typography.subhead.subhead1.fontSize};
  font-weight: ${typography.subhead.subhead1.fontWeight};
  line-height: ${typography.subhead.subhead1.lineHeight};
  letter-spacing: ${typography.subhead.subhead1.letterSpacing};
`;

export const ProjectTypeChips = ({
  selectedProjectType,
  setSelectedProjectType,
}: ProjectTypeChipsProps) => {
  const options = Object.values(PROJECT_TYPE).map((type) => ({
    value: type.value,
    label: type.label,
  }));

  const handleSelect = (value: string) => {
    if (selectedProjectType === value) {
      setSelectedProjectType(null);
    } else {
      setSelectedProjectType(value);
    }
  };

  return (
    <Container>
      <Title>프로젝트 해당 분야(필수)</Title>

      <MethodChips
        options={options}
        selectedValue={selectedProjectType || ''}
        onSelect={handleSelect}
      />
    </Container>
  );
};
