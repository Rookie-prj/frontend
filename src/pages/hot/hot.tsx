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
const RookieData = [
  {
    userId: 1,
    currentStudy: '백엔드 개발',
    emailId: 'string',
    passwordHash: '$2a$12$wuvvbq3X2rt6IkRwWfcb8.SCtBMVmdvZS.yUIyHu47YpHPo28ACW.',
    name: '김철수',
    universityName: '서울대학교',
    schoolPublicFlag: 1,
    major: '컴퓨터공학과',
    grade: '3학년',
    currentStudyDetail:
      'Spring Boot를 활용한 RESTful API 개발, JPA/Hibernate ORM, 마이크로서비스 아키텍처 학습 중',
    toolset: 'Java, Spring Boot, MySQL, Docker, Git, IntelliJ IDEA',
    favoriteSubject: '웹 개발, 클라우드 컴퓨팅',
    publicPortfolioCount: '5',
    recruitPeople: '2-3명',
    responseRate: '95%',
    passionMeter: '90%',
    profileImageUrl: '/images/profile/default_1.jpg',
  },
  {
    userId: 2,
    currentStudy: '인공지능/머신러닝',
    emailId: 'jane.smith@tech.ac.kr',
    passwordHash: '$2a$12$ukr8icddMNuYuPv6fV8EQesLGwr.spuhEda8mlvkbUGgLbQB//9Jy',
    name: '이영희',
    universityName: 'KAIST',
    schoolPublicFlag: 1,
    major: '전기전자공학과',
    grade: '4학년',
    currentStudyDetail:
      '딥러닝 프레임워크(TensorFlow, PyTorch) 활용, 컴퓨터 비전 프로젝트, NLP 모델 개발',
    toolset: 'Python, TensorFlow, PyTorch, Jupyter, scikit-learn, OpenCV',
    favoriteSubject: 'AI, 데이터 사이언스, 컴퓨터 비전',
    publicPortfolioCount: '8',
    recruitPeople: '3-4명',
    responseRate: '88%',
    passionMeter: '95%',
    profileImageUrl: '/images/profile/default_2.jpg',
  },
];
const Hot = () => {
  const handleCategoryChange = (category: string) => {
    console.log('선택된 카테고리:', category);
  };
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
      <ViewAllSection title="많은 루키들이 집중해요!" onClick={() => {}} route="hot" />
      <Post limit={2} />
      <div style={{ marginTop: '0.56rem' }}>
        <ViewAllSection
          title="나와 가까이 있는 루키"
          onClick={() => {}}
          route="hot"
          showButton={false}
        />
      </div>
      <Rookies rookies={RookieData} />
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
