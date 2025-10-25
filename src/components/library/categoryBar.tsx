import QueryLink from '../../components/common/queryLink';
import CATEGORY, { LibraryCategoryValue } from '../../constants/category';
import {
  CategoryBarContainer,
  CategoryBarItem,
  CategoryBarText,
  ItemWrapper,
} from './categoryBar.styles';

interface CategoryBarProps {
  sortType?: LibraryCategoryValue;
}

function CategoryBar({ sortType }: CategoryBarProps) {
  const currentSortType = sortType || CATEGORY.SAVED.value;

  return (
    <CategoryBarContainer>
      <ItemWrapper>
        <QueryLink extraQuery={{ sortType: CATEGORY.SAVED.value }} preserveQuery={false}>
          <CategoryBarItem $isActive={currentSortType === CATEGORY.SAVED.value}>
            <CategoryBarText $isActive={currentSortType === CATEGORY.SAVED.value}>
              {CATEGORY.SAVED.label}
            </CategoryBarText>
          </CategoryBarItem>
        </QueryLink>
      </ItemWrapper>

      <ItemWrapper>
        <QueryLink extraQuery={{ sortType: CATEGORY.MY_PROJECT.value }} preserveQuery={false}>
          <CategoryBarItem $isActive={currentSortType === CATEGORY.MY_PROJECT.value}>
            <CategoryBarText $isActive={currentSortType === CATEGORY.MY_PROJECT.value}>
              {CATEGORY.MY_PROJECT.label}
            </CategoryBarText>
          </CategoryBarItem>
        </QueryLink>
      </ItemWrapper>
    </CategoryBarContainer>
  );
}

export default CategoryBar;
