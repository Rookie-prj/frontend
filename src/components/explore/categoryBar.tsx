import QueryLink from '../../components/common/queryLink';
import { EXPLORE_CATEGORIES, ExploreCategoryValue } from '../../constants/category';
import {
  CategoryBarContainer,
  CategoryBarItem,
  CategoryBarText,
  ItemWrapper,
} from './category.styles';

interface CategoryBarProps {
  sortType?: ExploreCategoryValue;
}

function CategoryBar({ sortType }: CategoryBarProps) {
  const currentSortType = sortType || 'project';

  return (
    <CategoryBarContainer>
      <ItemWrapper>
        <QueryLink extraQuery={{ sortType: 'project' }} preserveQuery={false}>
          <CategoryBarItem $isActive={currentSortType === 'project'}>
            <CategoryBarText $isActive={currentSortType === 'project'}>
              {EXPLORE_CATEGORIES.PROJECT.label}
            </CategoryBarText>
          </CategoryBarItem>
        </QueryLink>
      </ItemWrapper>

      <ItemWrapper>
        <QueryLink extraQuery={{ sortType: 'rookie' }} preserveQuery={false}>
          <CategoryBarItem $isActive={currentSortType === 'rookie'}>
            <CategoryBarText $isActive={currentSortType === 'rookie'}>
              {EXPLORE_CATEGORIES.ROOKIE.label}
            </CategoryBarText>
          </CategoryBarItem>
        </QueryLink>
      </ItemWrapper>
    </CategoryBarContainer>
  );
}

export default CategoryBar;
