import Header from '../../components/header/header';
import CategoryBar from '../../components/category/category';
import HeroBanner from '../../components/hot/heroBanner/heroBanner';
import ViewAllSection from '../../components/common/viewAllSection/viewAllSection';
import Post from '../../components/post/post';
import Rookies from '../../components/rookie/rookies';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { ToolkitData } from '../../constants/toolkit';
import ToolkitSmallCard from '../../components/toolkit/toolkitSmallCard';
import { ScrollBar } from '../../components/common/scrollBar/scrollBar';
import useRookieQuery from '../../components/explore/hooks/useRookieQuery';

const Hot = () => {
  const handleCategoryChange = (category: string) => {
    console.log('선택된 카테고리:', category);
  };

  // 루키 데이터 조회
  const { rookies, isLoading } = useRookieQuery({
    sortType: 'rookie',
    roleType: 'all',
  });

  // 상위 4개만 표시
  const displayRookies = rookies.slice(0, 2);

  const navigate = useNavigate();
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
      <ViewAllSection title="많은 루키들이 집중해요!" showButton={false} onClick={() => {}} />
      <Post limit={2} />
      <div style={{ marginTop: '0.56rem' }}>
        <ViewAllSection
          title="나와 가까이 있는 루키"
          onClick={() => {}}
          route="hot"
          showButton={false}
        />
      </div>
      {!isLoading && <Rookies rookies={displayRookies} />}
      <div style={{ marginTop: '0.56rem' }}>
        <ViewAllSection
          title="툴킷을 제공해드려요!"
          onClick={() => {
            navigate(ROUTES.toolkit);
          }}
          route="toolkit"
        />
      </div>
      <div style={{ marginLeft: '1rem', marginRight: '1rem', marginBottom: '2.25rem' }}>
        <ScrollBar direction="row">
          {ToolkitData.map((toolkit) => (
            <ToolkitSmallCard key={toolkit.id} toolkit={toolkit} />
          ))}
        </ScrollBar>
      </div>
    </div>
  );
};

export default Hot;
