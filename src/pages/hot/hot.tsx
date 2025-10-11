import Header from '../../components/header/header';
import CategoryBar from '../../components/category/category';
import HeroBanner from '../../components/hot/heroBanner/heroBanner';
import ViewAllSection from '../../components/common/viewAllSection/viewAllSection';
import Post from '../../components/post/post';
import Rookie from '../../components/rookie/rookie';

const Hot = () => {
  const handleCategoryChange = (category: string) => {
    console.log('선택된 카테고리:', category);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header type="logo" />
      <CategoryBar group="HOME" onCategoryChange={handleCategoryChange} />
      <HeroBanner />
      <ViewAllSection title="많은 루키들이 집중해요!" onClick={() => {}} route="hot" />
      <Post />
      <div style={{ marginTop: '0.56rem' }}>
        <ViewAllSection title="나와 가까이 있는 루키" onClick={() => {}} route="hot" />
      </div>
      <Rookie />
    </div>
  );
};

export default Hot;
