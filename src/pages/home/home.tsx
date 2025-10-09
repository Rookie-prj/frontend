import Header from '../../components/header/header';
import CategoryBar from '../../components/category/category';
import HeroBanner from '../../components/home/heroBanner/heroBanner';
import { CategoryValue } from '../../constants/category';

const Home = () => {
  const handleCategoryChange = (category: CategoryValue) => {
    console.log('선택된 카테고리:', category);
  };

  return (
    <div>
      <Header type="logo" />
      <CategoryBar group="HOME" onCategoryChange={handleCategoryChange} />
      <HeroBanner />
    </div>
  );
};

export default Home;
