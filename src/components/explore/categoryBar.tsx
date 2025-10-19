import QueryLink from '../../components/common/queryLink';
import CATEGORY, { ExploreCategoryValue } from '../../constants/category';
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
  const currentSortType = sortType || CATEGORY.PROJECT.value;

  return (
    <CategoryBarContainer>
      <ItemWrapper>
        <QueryLink extraQuery={{ sortType: CATEGORY.PROJECT.value }} preserveQuery={false}>
          <CategoryBarItem $isActive={currentSortType === CATEGORY.PROJECT.value}>
            <CategoryBarText $isActive={currentSortType === CATEGORY.PROJECT.value}>
              {CATEGORY.PROJECT.label}
            </CategoryBarText>
          </CategoryBarItem>
        </QueryLink>
      </ItemWrapper>

      <ItemWrapper>
        <QueryLink extraQuery={{ sortType: CATEGORY.ROOKIE.value }} preserveQuery={false}>
          <CategoryBarItem $isActive={currentSortType === CATEGORY.ROOKIE.value}>
            <CategoryBarText $isActive={currentSortType === CATEGORY.ROOKIE.value}>
              {CATEGORY.ROOKIE.label}
            </CategoryBarText>
          </CategoryBarItem>
        </QueryLink>
      </ItemWrapper>
    </CategoryBarContainer>
  );
}

export default CategoryBar;
