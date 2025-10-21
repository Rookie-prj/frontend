import {
  AuthorCard,
  AuthorContainer,
  AuthorInfo,
  AuthorLevel,
  AuthorLocation,
  AuthorName,
  AuthorProfile,
  AuthorStatItem,
  AuthorStatLabel,
  AuthorStats,
  AuthorStatValue,
  AuthorTitle,
  LevelIcon,
  LevelText,
} from './authorSection.styles';
import ProfileEx from '../../../assets/icons/profileEx.svg';
import GreenPin from '../../../assets/icons/greenPin.svg';
import Level1 from '../../../assets/icons/levels/level-1.svg';
import Exclamation from '../../../assets/icons/exclamation.svg';
interface AuthorSectionProps {
  name: string;
  location: string;
  projects: number;
  responseRate: number;
  level: string;
}
const AuthorSection = ({ name, location, projects, responseRate, level }: AuthorSectionProps) => {
  return (
    <AuthorContainer>
      <AuthorTitle>작성자 루키 정보</AuthorTitle>
      <AuthorCard>
        <AuthorProfile>
          <div className="profile-image">
            <img src={ProfileEx} alt="profile-ex" />
          </div>
          <AuthorInfo>
            <div className="name-section">
              <AuthorName>{name}</AuthorName>
            </div>
            <AuthorLocation>
              <img src={GreenPin} alt="green-pin" />
              <span>{location}</span>
            </AuthorLocation>
          </AuthorInfo>
        </AuthorProfile>
        <AuthorStats>
          <AuthorStatItem>
            <AuthorStatValue>{projects}개</AuthorStatValue>
            <AuthorStatLabel>공개 가능 프로젝트</AuthorStatLabel>
          </AuthorStatItem>
          <AuthorStatItem className="response-rate">
            <AuthorStatValue>{responseRate}%</AuthorStatValue>
            <AuthorStatLabel>응답률</AuthorStatLabel>
          </AuthorStatItem>
          <AuthorLevel>
            <LevelIcon>
              <img src={Level1} alt="level-1" />
            </LevelIcon>
            <LevelText>
              <span>열정기어</span>
              <img src={Exclamation} alt="exclamation" />
            </LevelText>
          </AuthorLevel>
        </AuthorStats>
      </AuthorCard>
    </AuthorContainer>
  );
};

export default AuthorSection;
