import { TitleSection, TitleText, TagsText } from './titleSection.styles';
import Bookmark from '../../../assets/icons/bookmark.svg';

interface TitleSectionProps {
  title: string;
  tags: string;
}

const titleSection = ({ title, tags }: TitleSectionProps) => {
  return (
    <TitleSection>
      <div className="title-content">
        <TitleText>{title}</TitleText>
        <TagsText>{tags}</TagsText>
      </div>

      <img src={Bookmark} alt="bookmark" />
    </TitleSection>
  );
};

export default titleSection;
