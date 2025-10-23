import { Rookie } from 'models';
import pin from '../../../assets/icons/pin.svg';
import profile from '../../../assets/icons/profileEx.svg';
import {
  RookieIcon,
  RookieName,
  RookieDepartmentTextWrapper,
  RookieDepartmentText,
  RookieYearText,
  RookieSchoolText,
  RookieSchoolTextWrapper,
  RookieTitleWrapper,
  RookieDepartmentTextContainer,
  RookieCardContainer,
  RookieFavoriteSubjectWrapper,
  RookieFavoriteSubjectChip,
} from './rookieCard.styles';
interface RookieCardProps {
  type?: 'explore' | 'default' | 'detail';
  rookie: Rookie;
}
const RookieCard = ({ type: type = 'default', rookie }: RookieCardProps) => {
  const { userId, name, major, grade, universityName, profileImageUrl, favoriteSubject } = rookie;
  const subjects = favoriteSubject ? favoriteSubject.split(',').map((s) => s.trim()) : [];

  return (
    <RookieCardContainer type={type}>
      <RookieTitleWrapper type={type}>
        <RookieIcon>
          <img src={profile} alt="profile" />
        </RookieIcon>
        <RookieName type={type}>{name}</RookieName>
      </RookieTitleWrapper>
      <RookieDepartmentTextContainer>
        <RookieDepartmentTextWrapper type={type}>
          <RookieDepartmentText type={type}>
            {major} · <RookieYearText type={type}>{grade}</RookieYearText>
          </RookieDepartmentText>
        </RookieDepartmentTextWrapper>
      </RookieDepartmentTextContainer>
      <RookieSchoolTextWrapper type={type}>
        <img src={pin} alt="pin" />
        <RookieSchoolText type={type}>{universityName}</RookieSchoolText>
      </RookieSchoolTextWrapper>
      {type === 'explore' && subjects.length > 0 && (
        <RookieFavoriteSubjectWrapper>
          {subjects.map((subject, index) => (
            <RookieFavoriteSubjectChip key={index}>{subject}</RookieFavoriteSubjectChip>
          ))}
        </RookieFavoriteSubjectWrapper>
      )}
    </RookieCardContainer>
  );
};

export default RookieCard;
