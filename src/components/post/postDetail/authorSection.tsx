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
  TooltipWrapper,
} from './authorSection.styles';
import passionIcon from '../../../assets/icons/passion/passioninfo.svg';
import ProfileEx from '../../../assets/icons/profileEx.svg';
import GreenPin from '../../../assets/icons/greenPin.svg';
import Level1 from '../../../assets/icons/passion/Lv.1.svg';
import { useState } from 'react';
import PassionMeterTooltip from '../../common/passionMeterTooltip/passionMeterTooltip';
interface AuthorSectionProps {
  name: string;
  location: string;
  projects: number;
  responseRate: number;
  level: string;
}
const AuthorSection = ({ name, location, projects, responseRate, level }: AuthorSectionProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
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
          <AuthorLevel onClick={() => setIsTooltipVisible(true)}>
            <LevelIcon>
              <img src={Level1} alt="level-1" />
            </LevelIcon>
            <LevelText>
              <span>열정기어</span>
              <img src={passionIcon} alt="열정기여도 정보" />
            </LevelText>
          </AuthorLevel>
        </AuthorStats>
        <TooltipWrapper>
          <PassionMeterTooltip
            isVisible={isTooltipVisible}
            onClose={() => setIsTooltipVisible(false)}
          />
        </TooltipWrapper>
      </AuthorCard>
    </AuthorContainer>
  );
};

export default AuthorSection;
