import { useParams } from 'react-router-dom';
import RookieCard from '../../components/rookie/rookieCard/rookieCard';
import Header from '../../components/header/header';
import useRookieDetail from '../../hooks/useRookieDetail';
import { Loading } from '../../components/common/loading';
import { RookieStats, RookieInfoSection } from '../../components/rookieDetail';
import { ProjectList } from '../../components/post';
import { FixedBottomBar } from '../../components/common/FixedBottomBar';

function RookieDetail() {
  const { id } = useParams<{ id: string }>();
  const rookieId = Number(id);

  const { rookie, isLoading, isError } = useRookieDetail({ id: rookieId });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !rookie) {
    return (
      <div>
        <Header type="backdrop" />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          루키 정보를 불러오는데 실패했습니다.
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '100px' }}>
      <Header type="backdrop" />
      <RookieCard rookie={rookie} type="detail" />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '27px' }}>
        <RookieStats
          publicPortfolioCount={rookie.publicPortfolioCount}
          responseRate={rookie.responseRate}
          passionMeter={rookie.passionMeter}
        />
      </div>
      <RookieInfoSection rookie={rookie} />
      <ProjectList limit={4} title="등록한 프로젝트" />
      <FixedBottomBar
        onSupport={() => console.log('응원하기 clicked')}
        onMessage={() => console.log('메시지 보내기 clicked')}
      />
    </div>
  );
}

export default RookieDetail;
