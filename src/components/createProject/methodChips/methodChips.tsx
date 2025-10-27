import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

interface MethodOption {
  value: string;
  label: string;
}

interface MethodChipsProps {
  options: MethodOption[];
  selectedValue?: string;
  selectedValues?: string[];
  onSelect: (value: string) => void;
  maxSelections?: number;
}

const MethodChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  width: 100%;
`;

const MethodChip = styled.div<{ isSelected?: boolean }>`
  background: ${({ isSelected }) => (isSelected ? colors.green[200] : colors.gray[100])};
  border-radius: 62.4375rem;
  padding: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
`;

const ChipText = styled.span`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[600]};
`;

const MethodChips = ({
  options,
  selectedValue,
  selectedValues,
  onSelect,
  maxSelections = 1,
}: MethodChipsProps) => {
  const isMultiSelect = selectedValues !== undefined;
  const isSelected = (value: string) => {
    if (isMultiSelect) {
      return selectedValues!.includes(value);
    }
    return selectedValue === value;
  };

  const handleClick = (value: string) => {
    if (isMultiSelect) {
      if (selectedValues!.includes(value)) {
        onSelect(value);
      } else if (selectedValues!.length < maxSelections!) {
        onSelect(value);
      }
    } else {
      onSelect(value);
    }
  };

  return (
    <MethodChipsContainer>
      {options.map((option) => {
        const selected = isSelected(option.value);
        const isDisabled = isMultiSelect && !selected && selectedValues!.length >= maxSelections!;

        return (
          <MethodChip
            key={option.value}
            isSelected={selected}
            onClick={() => !isDisabled && handleClick(option.value)}
            style={{
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              opacity: isDisabled ? 0.5 : 1,
            }}
          >
            <ChipText>{option.label}</ChipText>
          </MethodChip>
        );
      })}
    </MethodChipsContainer>
  );
};

export default MethodChips;
