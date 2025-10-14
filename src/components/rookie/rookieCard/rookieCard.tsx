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
} from './rookieCard.styles';
interface RookieCardProps {
  name: string;
  department: string;
  year: string;
  school: string;
}
const RookieCard = ({ name, department, year, school }: RookieCardProps) => {
  return (
    <RookieCardContainer>
      <RookieTitleWrapper>
        <RookieIcon>
          <img src={profile} alt="profile" />
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
      <RookieSchoolTextWrapper>
        <img src={pin} alt="pin" />
        <RookieSchoolText>{school}</RookieSchoolText>
      </RookieSchoolTextWrapper>
    </RookieCardContainer>
  );
};

export default RookieCard;
