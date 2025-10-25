import React from 'react';
import {
  MultiSelectContainer,
  MultiSelectLabel,
  TagsGrid,
  Tag,
  TagText,
  SelectionBadge,
} from './multiSelectTags.styles';

export interface TagOption {
  value: string;
  label: string;
  category?: string;
}

interface MultiSelectTagsProps {
  label?: string;
  options: TagOption[];
  selectedValues: string[];
  onSelectionChange: (selectedValues: string[]) => void;
  maxSelections?: number;
  isDesignSection?: boolean;
}

const MultiSelectTags: React.FC<MultiSelectTagsProps> = ({
  label = '중복선택 가능',
  options,
  selectedValues,
  onSelectionChange,
  maxSelections,
  isDesignSection = false,
}) => {
  const handleTagClick = (value: string) => {
    const isSelected = selectedValues.includes(value);

    if (isSelected) {
      onSelectionChange(selectedValues.filter((v) => v !== value));
    } else {
      if (!maxSelections || selectedValues.length < maxSelections) {
        onSelectionChange([...selectedValues, value]);
      }
    }
  };

  const getSelectionOrder = (value: string) => {
    return selectedValues.indexOf(value) + 1;
  };

  return (
    <MultiSelectContainer>
      <MultiSelectLabel>{label}</MultiSelectLabel>
      <TagsGrid>
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value);
          const selectionOrder = getSelectionOrder(option.value);

          return (
            <Tag
              key={option.value}
              isSelected={isSelected}
              onClick={() => handleTagClick(option.value)}
            >
              <TagText isSelected={isSelected}>{option.label}</TagText>
              {isSelected && <SelectionBadge>{selectionOrder}</SelectionBadge>}
            </Tag>
          );
        })}
      </TagsGrid>
    </MultiSelectContainer>
  );
};

export default MultiSelectTags;
