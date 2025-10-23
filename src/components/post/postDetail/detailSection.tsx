import Cube from '../../../assets/icons/cube.svg';
import Clip from '../../../assets/icons/clip.svg';
import { DetailContainer, DetailTitle, DetailContent, DetailWrapper } from './detailSection.styles';

interface DetailSectionProps {
  category: string;
  techTools: string[];
}

const DetailSection = ({ category, techTools }: DetailSectionProps) => {
  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailTitle>
          <img src={Cube} alt="cube" />
          <span>카테고리 정보</span>
        </DetailTitle>
        <DetailContent>{category}</DetailContent>
      </DetailWrapper>
      <DetailWrapper>
        <DetailTitle>
          <img src={Clip} alt="clip" />
          <span>필수 역량 툴</span>
        </DetailTitle>
        <DetailContent>{techTools.join(', ')}</DetailContent>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailSection;
