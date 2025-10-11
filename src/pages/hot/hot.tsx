import Header from '../../components/header/header';
import CategoryBar from '../../components/category/category';
import HeroBanner from '../../components/hot/heroBanner/heroBanner';

const Hot = () => {
  const handleCategoryChange = (category: string) => {
    console.log('선택된 카테고리:', category);
  };

  return (
    <>
      <Header type="logo" />
      <CategoryBar group="HOME" onCategoryChange={handleCategoryChange} />
      <div>
        <HeroBanner />
      </div>
    </>
  );
};

export default Hot;
