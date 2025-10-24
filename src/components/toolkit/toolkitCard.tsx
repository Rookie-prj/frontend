import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';
import LeftArrow from '../../assets/icons/leftArrow.svg';
import { ToolkitItem } from '../../constants/toolkit';
import ToolkitLogo from '../../assets/img/toolkit-logo.svg';
interface ToolkitCardProps {
  toolkit: ToolkitItem;
  style?: CSSProperties;
}

const CardContainer = styled.div`
  background: ${colors.gray[100]};
  border-radius: 0.75rem;
  padding: 1rem 1.0625rem;
  position: relative;
  cursor: pointer;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3125rem;
  width: 100%;
`;

const CardImage = styled.div<{ $backgroundColor: string }>`
  background: ${({ $backgroundColor }) => $backgroundColor};
  height: 19.3125rem;
  border-radius: 0.75rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CardTitle = styled.div`
  position: absolute;
  top: 3.125rem;
  left: 50%;
  transform: translateX(-50%);
  width: 15.125rem;
  text-align: center;

  font-weight: ${typography.display.display2.fontWeight};
  font-size: ${typography.display.display2.fontSize};
  line-height: ${typography.display.display2.lineHeight};
  letter-spacing: ${typography.display.display2.letterSpacing};
  color: ${colors.gray[900]};

  p {
    margin: 0;
    line-height: ${typography.display.display2.lineHeight};
  }
`;

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const CardMainTitle = styled.h3`
  font-weight: ${typography.subhead.subhead5.fontWeight};
  font-size: ${typography.subhead.subhead5.fontSize};
  line-height: ${typography.subhead.subhead5.lineHeight};
  letter-spacing: ${typography.subhead.subhead5.letterSpacing};
  color: ${colors.gray[900]};
  margin: 0;
  min-width: 100%;
`;

const CardSubtitle = styled.p`
  font-weight: ${typography.caption.caption3.fontWeight};
  font-size: ${typography.caption.caption3.fontSize};
  line-height: ${typography.caption.caption3.lineHeight};
  letter-spacing: ${typography.caption.caption3.letterSpacing};
  color: ${colors.green[200]};
  margin: 0;
  width: 16.1875rem;
`;

const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
`;

const ChevronArrow = styled.div`
  width: 0.3125rem;
  height: 0.625rem;
  position: relative;
`;

const ToolkitLogoContainer = styled.div`
  position: absolute;
  top: 2.319rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4.625rem;
  height: 0.736rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

        <CardInfo>
          <CardText>
            <CardMainTitle>{toolkit.mainTitle}</CardMainTitle>
            <CardSubtitle>{toolkit.subtitle}</CardSubtitle>
          </CardText>
          <ChevronIcon>
            <img src={LeftArrow} alt="left arrow" />
          </ChevronIcon>
        </CardInfo>
      </CardContent>

      <ToolkitLogoContainer>
        <img src={ToolkitLogo} alt="toolkit logo" />
      </ToolkitLogoContainer>
    </CardContainer>
  );
}
