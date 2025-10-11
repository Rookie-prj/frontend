import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CategoryItem, CategoryWrapper } from './category.styles';
import { CategoryValue, CATEGORY_GROUPS } from '../../constants/category';
import { ROUTES } from '../../constants/routes';

interface CategoryBarProps {
  group: keyof typeof CATEGORY_GROUPS;
  onCategoryChange?: (category: CategoryValue) => void;
}

export default function CategoryBar({ group, onCategoryChange }: CategoryBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const categories = CATEGORY_GROUPS[group];

  const getActiveCategory = (): CategoryValue => {
    switch (location.pathname) {
      case ROUTES.home:
        return 'home';
      case ROUTES.hot:
        return 'hot';
      default:
        return 'home';
    }
  };

  const [activeCategory, setActiveCategory] = useState<CategoryValue>(getActiveCategory());

  const handleClick = (category: CategoryValue) => {
    setActiveCategory(category);

    switch (category) {
      case 'home':
        navigate(ROUTES.home);
        break;
      case 'hot':
        navigate(ROUTES.hot);
        break;
      default:
        navigate(ROUTES.home);
    }

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
