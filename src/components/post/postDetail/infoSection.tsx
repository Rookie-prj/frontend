import { InfoContainer, InfoItem, InfoLabel, InfoValue } from './infoSection.styles';
import GrayCalendar from '../../../assets/icons/grayCalendar.svg';
import People from '../../../assets/icons/people.svg';
import Thunder from '../../../assets/icons/thunder.svg';

interface InfoSectionProps {
  total: number;
  field: string;
  duration: string;
}

const InfoSection = ({ total, field, duration }: InfoSectionProps) => {
  return (
    <InfoContainer>
      <InfoItem>
        <img src={People} alt="people-icon" />

        <InfoLabel>모집 인원</InfoLabel>
        <InfoValue>{total}명</InfoValue>
      </InfoItem>
      <InfoItem>
        <img src={Thunder} alt="people-icon" />

        <InfoLabel>모집 분야</InfoLabel>
        <InfoValue>{field}</InfoValue>
      </InfoItem>
      <InfoItem>
        <img src={GrayCalendar} alt="people-icon" />

        <InfoLabel>예상 기간</InfoLabel>
        <InfoValue>{duration}</InfoValue>
      </InfoItem>
    </InfoContainer>
  );
};

export default InfoSection;
