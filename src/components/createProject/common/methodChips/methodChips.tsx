import styled from '@emotion/styled';
import { colors } from '../../../../style/colors';

interface MethodOption {
  value: string;
  label: string;
}

interface MethodChipsProps {
  options: MethodOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const MethodChipsContainer = styled.div`
  display: flex;
  gap: 0.375rem;
  width: 100%;
`;

const MethodChip = styled.div<{ isSelected?: boolean }>`
  background: ${({ isSelected }) => (isSelected ? colors.green[200] : colors.gray[100])};
  border-radius: 999px;
  padding: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${colors.green[200]};
  }
`;

const ChipText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[600]};
`;

const MethodChips = ({ options, selectedValue, onSelect }: MethodChipsProps) => {
  return (
    <MethodChipsContainer>
      {options.map((option) => (
        <MethodChip
          key={option.value}
          isSelected={selectedValue === option.value}
          onClick={() => onSelect(option.value)}
        >
          <ChipText>{option.label}</ChipText>
        </MethodChip>
      ))}
    </MethodChipsContainer>
  );
};

export default MethodChips;
