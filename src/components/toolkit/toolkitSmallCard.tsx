import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';

import { ToolkitItem } from '../../constants/toolkit';

interface ToolkitCardProps {
  toolkit: ToolkitItem;
  style?: CSSProperties;
}

const CardContainer = styled.div`
  border-radius: 0.75rem;
  width: 10.26781rem;
  cursor: pointer;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardImage = styled.div<{ $backgroundColor: string }>`
  background: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  width: 10.25rem;
  height: 10.25rem;
  align-items: center;
  flex-direction: column;
  border-radius: 0.75rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CardTitle = styled.div`
  text-align: center;
  font-weight: ${typography.display.display2.fontWeight};
  font-size: 0.8325rem;
  letter-spacing: ${typography.display.display2.letterSpacing};
  color: ${colors.gray[900]};
  white-space: pre-line;
  width: 100%;
`;

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.5rem;
  img {
    width: 3.74631rem;
    height: 4.25919rem;
  }
`;

const CardMainTitle = styled.div`
  color: ${colors.gray[800]};
  font-size: ${typography.subhead.subhead2.fontSize};
  font-weight: ${typography.subhead.subhead2.fontWeight};
  line-height: ${typography.subhead.subhead2.lineHeight};
  letter-spacing: -0.00875rem;
  height: 2.5rem;
  white-space: pre-line;
`;

export default function ToolkitCard({ toolkit, style }: ToolkitCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/toolkit/${toolkit.id}`);
  };

  return (
    <CardContainer style={style} onClick={handleCardClick}>
      <CardContent>
        <CardImage $backgroundColor={toolkit.backgroundColor}>
          <CardTitle>
            {toolkit.title.map((segment, index) => (
              <span key={index} style={{ color: segment.color }}>
                {segment.text.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < segment.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </span>
            ))}
          </CardTitle>
          <CardIcon>
            <img src={toolkit.icon} alt={toolkit.mainTitle} />
          </CardIcon>
        </CardImage>

        <CardMainTitle>{toolkit.cardTitle}</CardMainTitle>
      </CardContent>
    </CardContainer>
  );
}
