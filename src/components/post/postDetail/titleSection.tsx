import { TitleSection, TitleText, TagsText } from './titleSection.styles';
import Bookmark from '../../../assets/icons/bookmark.svg';
import BookmarkFilled from '../../../assets/icons/bookmarkFilled.svg';
import { useState } from 'react';
interface TitleSectionProps {
  title: string;
  tags: string;
}

const titleSection = ({ title, tags }: TitleSectionProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    setIsBookmarked((prev) => !prev);
  };
  return (
    <TitleSection>
      <div className="title-content">
        <TitleText>{title}</TitleText>
        <TagsText>{tags}</TagsText>
      </div>

      <img src={isBookmarked ? BookmarkFilled : Bookmark} alt="bookmark" onClick={handleClick} />
    </TitleSection>
  );
};

export default titleSection;
