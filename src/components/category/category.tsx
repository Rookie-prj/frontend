import { useState } from 'react';
import { CategoryItem, CategoryWrapper } from './category.styles';
import { CategoryValue, CATEGORY_GROUPS } from '../../constants/category';

interface CategoryBarProps {
  group: keyof typeof CATEGORY_GROUPS;
  onCategoryChange?: (category: CategoryValue) => void;
}

export default function CategoryBar({ group, onCategoryChange }: CategoryBarProps) {
  const categories = CATEGORY_GROUPS[group];
  const [activeCategory, setActiveCategory] = useState<CategoryValue>(categories[0].value);

  const handleClick = (category: CategoryValue) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <CategoryWrapper>
      {categories.map((category) => (
        <CategoryItem
          key={category.value}
          active={activeCategory === category.value}
          categoryType={category.value as 'home' | 'hot'}
          onClick={() => handleClick(category.value)}
        >
          {category.label}
        </CategoryItem>
      ))}
    </CategoryWrapper>
  );
}
