import Cube from '../../../assets/icons/cube.svg';
import Clip from '../../../assets/icons/clip.svg';
import { DetailContainer, DetailTitle, DetailContent, DetailWrapper } from './detailSection.styles';
import { PROJECT_TYPE } from '../../../constants/projectType';
import { removeBrackets } from '../../../utils/stringUtils';

interface DetailSectionProps {
  category: string;
  techTools: string;
}

const DetailSection = ({ category, techTools }: DetailSectionProps) => {
  const cleanCategory = removeBrackets(category);
  const typeOption = Object.values(PROJECT_TYPE).find((type) => type.value === cleanCategory);
  const categoryLabel = typeOption?.label || category;

  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailTitle>
          <img src={Cube} alt="cube" />
          <span>카테고리 정보</span>
        </DetailTitle>
        <DetailContent>{categoryLabel}</DetailContent>
      </DetailWrapper>
      <DetailWrapper>
        <DetailTitle>
          <img src={Clip} alt="clip" />
          <span>필수 역량 툴</span>
        </DetailTitle>
        <DetailContent>{techTools}</DetailContent>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailSection;
