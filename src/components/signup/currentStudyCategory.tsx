import React from 'react';
import {
  CategoryContainer,
  CategoryGrid,
  CategoryItem,
  CategoryIcon,
  CategoryLabel,
} from './currentStudyCategory.styles';
import { CURRENT_STUDY_OPTIONS } from '../../constants/signup';

interface CurrentStudyCategoryProps {
  selectedCategory?: string;
  onCategorySelect: (category: string) => void;
}

const CurrentStudyCategory: React.FC<CurrentStudyCategoryProps> = ({
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <CategoryContainer>
        <CategoryGrid>
          {CURRENT_STUDY_OPTIONS.map((option) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <CategoryItem
                  key={option.value}
                  isSelected={selectedCategory === option.value}
                  onClick={() => onCategorySelect(option.value)}
                >
                  <CategoryIcon>
                    <img
                      src={option.icon}
                      alt={option.label}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </CategoryIcon>
                </CategoryItem>
                <CategoryLabel isSelected={selectedCategory === option.value}>
                  {option.label}
                </CategoryLabel>
              </div>
            );
          })}
        </CategoryGrid>
      </CategoryContainer>
    </div>
  );
};

export default CurrentStudyCategory;
