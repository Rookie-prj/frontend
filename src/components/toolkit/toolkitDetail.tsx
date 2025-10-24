import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';
import { ToolkitData, ToolkitItem } from '../../constants/toolkit';
import { Chip } from '../../components/common/chip';
import Header from '../../components/header/header';
import Button from '../../components/common/button/button';

const PageContainer = styled.div`
  background-color: ${colors.gray[50]};
  min-height: 100vh;
  position: relative;
`;

const HeroSection = styled.div`
  margin: 1rem 1rem 0 1rem;
`;

const ContentSection = styled.div`
  margin: 0.44rem 1rem 3.19rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.625rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h2`
  font-weight: ${typography.headline.headline4.fontWeight};
  font-size: ${typography.headline.headline4.fontSize};
  line-height: ${typography.headline.headline4.lineHeight};
  color: ${colors.gray[900]};

  letter-spacing: -0.2px;
`;

const SubTitle = styled.p`
  font-weight: ${typography.subhead.subhead1.fontWeight};
  font-size: ${typography.subhead.subhead1.fontSize};
  line-height: ${typography.subhead.subhead1.lineHeight};
  color: ${colors.green[200]};

  letter-spacing: -0.14px;
`;

const Description = styled.div`
  font-weight: ${typography.subhead.subhead1.fontWeight};
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.gray[900]};
  letter-spacing: -0.15px;
`;

const BoldText = styled.div`
  font-weight: ${typography.subhead.subhead5.fontWeight};
  margin-top: 2rem;
`;

const ToolkitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const toolkit: ToolkitItem | undefined = ToolkitData.find((item) => item.id === id);

  if (!toolkit) {
    return <div>툴킷을 찾을 수 없습니다.</div>;
  }

  const handleDownload = () => {
    (() =>
      Object.assign(document.createElement('a'), {
        href: `/pdfs/toolkit-${toolkit.id}.pdf`,
        download: `toolkit-${toolkit.id}.pdf`,
      }).click())();
  };

  return (
    <PageContainer>
      {/* Header */}
      <Header type="backdrop" />
      {/* Hero Section */}
      <Header type="title" title="툴킷" />
      <HeroSection>
        <img
          src={toolkit.image}
          alt={`toolkit-${toolkit.id}`}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </HeroSection>

      {/* Content Section */}
      <ContentSection>
        <ContentContainer>
          <TitleSection>
            <TitleRow>
              <TitleText>
                <MainTitle>{toolkit.mainTitle}</MainTitle>
                <SubTitle>{toolkit.subtitle}</SubTitle>
              </TitleText>
              <Chip label={toolkit.categories} variant="default" size="large" />
            </TitleRow>
          </TitleSection>

          <Description>
            <p>{toolkit.contentDescription}</p>
            <BoldText>다음과 같은 분들에게 유용할 거예요!</BoldText>
            <div style={{ whiteSpace: 'pre-line' }}>{toolkit.performance}</div>
          </Description>
        </ContentContainer>
        <Button onClick={handleDownload} size="large">
          PDF 다운로드
        </Button>
      </ContentSection>
    </PageContainer>
  );
};

export default ToolkitDetail;
