import Header from '../../components/header/header';
import CategoryBar from '../../components/category/category';
import HeroBanner from '../../components/hot/heroBanner/heroBanner';
import ViewAllSection from '../../components/common/viewAllSection/viewAllSection';
import Post from '../../components/post/post';
import Rookies from '../../components/rookie/rookies';
const RookieData = [
  {
    userId: 1,
    name: '춤추는 악어',
    major: '실내디자인전공',
    grade: '4학년',
    universityName: '천안. 상명대학교',
  },
  {
    userId: 2,
    name: '안녕하세요',
    major: '컴퓨터공학과',
    grade: '4학년',
    universityName: '서울. 상명대학교',
  },
];
const Hot = () => {
  const handleCategoryChange = (category: string) => {
    console.log('선택된 카테고리:', category);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        paddingBottom: '4.9375rem',
      }}
    >
      <Header type="logo" />
      <CategoryBar group="HOME" onCategoryChange={handleCategoryChange} />
      <HeroBanner />
      <ViewAllSection title="많은 루키들이 집중해요!" onClick={() => {}} route="hot" />
      <Post limit={2} maxRows={1} />
      <div style={{ marginTop: '0.56rem' }}>
        <ViewAllSection title="나와 가까이 있는 루키" onClick={() => {}} route="hot" />
      </div>
      <Rookies rookies={RookieData} />
    </div>
  );
};

export default Hot;
