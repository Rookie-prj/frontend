import fire from '../../../assets/img/fire.svg';
import HeroBannerContainer, { FireText, SubTitle, Title, FireIcon } from './heroBanner.styles';

const HeroBanner = () => {
  return (
    <HeroBannerContainer>
      <Title>
        루키에게 <FireText>불씨</FireText>를 전달해요
      </Title>
      <SubTitle>응원하고픈 루키에게 불씨를 보내보세요!</SubTitle>
      <FireIcon src={fire} alt="fire" />
    </HeroBannerContainer>
  );
};

export default HeroBanner;
