import React from 'react';
import * as S from './titleSection.styles';
import Bookmark from '../../../assets/icons/bookmark.svg';
import BookmarkFilled from '../../../assets/icons/bookmarkFilled.svg';

export interface TitleSectionProps {
  title: string;
  tags: string;
  isBookmarked: boolean;
  onBookmarkToggle: () => void;
}

const TitleSectionComponent: React.FC<TitleSectionProps> = ({
  title,
  tags,
  isBookmarked,
  onBookmarkToggle,
}) => {
  return (
    <S.TitleSection>
      <div className="title-content">
        <S.TitleText>{title}</S.TitleText>
        <S.TagsText>{tags}</S.TagsText>
      </div>

      <img
        src={isBookmarked ? BookmarkFilled : Bookmark}
        alt="bookmark"
        onClick={onBookmarkToggle}
      />
    </S.TitleSection>
  );
};

export default TitleSectionComponent;
