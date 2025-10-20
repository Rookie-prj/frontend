import {
  PositionCard,
  PositionCardContent,
  PositionCards,
  PositionCardTitle,
  PositionContainer,
  PositionCount,
  PositionTitle,
  StatusBadge,
  StatusDot,
  StatusText,
  BackgroundShape,
} from './positionSection.styles';
import GreenSpeechBubble from '../../../assets/icons/greenSpeechBubble.svg';

interface Position {
  title: string;
  count: number;
}

interface PositionSectionProps {
  total: number;
  positions: Position[];
}

const PositionSection = ({ total, positions }: PositionSectionProps) => {
  return (
    <PositionContainer>
      <PositionTitle>{total}명 모집중</PositionTitle>
      <PositionCards>
        {positions.map((position, index) => (
          <PositionCard key={index}>
            <BackgroundShape>
              <img src={GreenSpeechBubble} alt="green-speech-bubble" />
            </BackgroundShape>
            <StatusBadge>
              <StatusDot />
              <StatusText>모집중</StatusText>
            </StatusBadge>
            <PositionCardContent>
              <PositionCardTitle>{position.title}</PositionCardTitle>
              <PositionCount>{position.count}명</PositionCount>
            </PositionCardContent>
          </PositionCard>
        ))}
      </PositionCards>
    </PositionContainer>
  );
};

export default PositionSection;
