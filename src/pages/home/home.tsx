import Header from '../../components/header/header';
import CategoryBar from '../../components/category/category';
import { CategoryValue } from '../../constants/category';

const Home = () => {
  const handleCategoryChange = (category: CategoryValue) => {
    console.log('선택된 카테고리:', category);
    // 여기서 카테고리 변경에 따른 로직을 처리할 수 있습니다
  };

  return (
    <div>
      <Header type="logo" />
      <CategoryBar group="HOME" onCategoryChange={handleCategoryChange} />
    </div>
  );
};

export default Home;
