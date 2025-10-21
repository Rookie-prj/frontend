import { ContentContainer, ContentText } from './contentSection.styles';

interface ContentSectionProps {
  description: string;
}
const ContentSection = ({ description }: ContentSectionProps) => {
  return (
    <ContentContainer>
      <ContentText>{description}</ContentText>
    </ContentContainer>
  );
};

export default ContentSection;
