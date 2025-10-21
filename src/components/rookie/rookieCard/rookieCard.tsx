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
  isExplore?: boolean;
  name: string;
  department: string;
  year: string;
  school: string;
  profileImageUrl?: string;
  favoriteSubject?: string;
}
const RookieCard = ({
  isExplore,
  name,
  department,
  year,
  school,
  profileImageUrl,
  favoriteSubject,
}: RookieCardProps) => {
  const subjects = favoriteSubject ? favoriteSubject.split(',').map((s) => s.trim()) : [];

  return (
    <RookieCardContainer isExplore={isExplore}>
      <RookieTitleWrapper isExplore={isExplore}>
        <RookieIcon>
          <img src={profileImageUrl || profile} alt="profile" />
        </RookieIcon>
        <RookieName>{name}</RookieName>
      </RookieTitleWrapper>
      <RookieDepartmentTextContainer>
        <RookieDepartmentTextWrapper>
          <RookieDepartmentText>
            {department} · <RookieYearText>{year}</RookieYearText>
          </RookieDepartmentText>
        </RookieDepartmentTextWrapper>
      </RookieDepartmentTextContainer>
      <RookieSchoolTextWrapper isExplore={isExplore}>
        <img src={pin} alt="pin" />
        <RookieSchoolText>{school}</RookieSchoolText>
      </RookieSchoolTextWrapper>
      {isExplore && subjects.length > 0 && (
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
