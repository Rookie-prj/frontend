import { CategoryContainer, CategoryTitle } from './category.styles';
type CategoryType = 'home' | 'hot' | 'rookie' | 'project';
type CategoryProps = {
  category: CategoryType;
  title: string;
};
const Category = ({ category, title }: CategoryProps) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryContainer>
  );
};

export default Category;
