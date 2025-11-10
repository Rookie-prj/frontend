import styled from '@emotion/styled';
import { PROJECT_CATEGORY } from '../../../constants/projectType';
import MethodChips from '../methodChips/methodChips';

import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
interface ProjectDetailTypeChipsProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  color: ${colors.gray[700]};
  font-size: ${typography.subhead.subhead1.fontSize};
  font-weight: ${typography.subhead.subhead1.fontWeight};
  line-height: ${typography.subhead.subhead1.lineHeight};
  letter-spacing: ${typography.subhead.subhead1.letterSpacing};
`;

const Subtitle = styled.p`
  color: ${colors.gray[400]};
  font-size: ${typography.caption.caption3.fontSize};
  font-weight: ${typography.caption.caption3.fontWeight};
  line-height: ${typography.caption.caption3.lineHeight};
  letter-spacing: ${typography.caption.caption3.letterSpacing};
  margin-bottom: 0.75rem;
`;

export const ProjectDetailTypeChips = ({
  selectedCategories,
  setSelectedCategories,
}: ProjectDetailTypeChipsProps) => {
  const options = Object.values(PROJECT_CATEGORY).map((category) => ({
    value: category.value,
    label: category.label,
  }));

  const handleSelect = (value: string) => {
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter((v) => v !== value));
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  return (
    <Container>
      <Title>프로젝트 해당 분야(선택)</Title>
      <Subtitle>최대 3개 선택</Subtitle>
      <MethodChips
        options={options}
        selectedValues={selectedCategories}
        onSelect={handleSelect}
        maxSelections={3}
      />
    </Container>
  );
};
