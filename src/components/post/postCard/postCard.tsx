import { useNavigate } from 'react-router-dom';
import thunder from '../../../assets/icons/thunder.svg';
import people from '../../../assets/icons/people.svg';
import StatusChips from '../statusChips/statusChips';

import {
  PostCardAuthor,
  PostCardContainer,
  PostCardRecruitTeamPeople,
  PostCardRecruitTeamWrapper,
  PostCardTitleWrapper,
  PostCardTitleText,
  PostCardTitleContent,
} from './postCard.styles';

import background from '../../../assets/img/background.svg';

interface PostCardProps {
  id: number;
  title: string;
  author: string;
  progress?: string;
  deadline?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  overlayColor?: string;
}

export const PostCard = ({
  id,
  title,
  author,
  progress,
  deadline,
  backgroundImage = background,
  backgroundColor,
  overlayColor,
}: PostCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <PostCardContainer onClick={handleClick}>
      <PostCardTitleWrapper backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
        <PostCardTitleContent>
          <PostCardTitleText>{title}</PostCardTitleText>
          <PostCardAuthor>{author}</PostCardAuthor>
        </PostCardTitleContent>
      </PostCardTitleWrapper>
      <div
        style={{ marginLeft: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.74rem' }}
      >
        <StatusChips progress={progress || ''} deadline={deadline || ''} />
        <PostCardRecruitTeamWrapper>
          <PostCardRecruitTeamPeople>
            <img src={people} alt="people" />
            <p> 2명</p>
          </PostCardRecruitTeamPeople>

          <PostCardRecruitTeamPeople>
            <img src={thunder} alt="thunder" /> <p>개발자</p>
          </PostCardRecruitTeamPeople>
        </PostCardRecruitTeamWrapper>
      </div>
    </PostCardContainer>
  );
};
