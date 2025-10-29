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
import backgroundImg from '../../../assets/img/dim.png';

interface PostCardProps {
  id: number;
  title: string;
  author: string;
  progress?: string;
  deadline: string;
  total?: number;
  field?: string;
  imageUrl1?: string | null;
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
  total,
  field,
  imageUrl1,
  backgroundImage = background,
  backgroundColor,
  overlayColor,
}: PostCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  const projectImage = imageUrl1 || backgroundImg;

  return (
    <PostCardContainer onClick={handleClick}>
      <PostCardTitleWrapper backgroundImage={projectImage} backgroundColor={backgroundColor}>
        <PostCardTitleContent>
          <PostCardTitleText>{title}</PostCardTitleText>
          <PostCardAuthor>{author}</PostCardAuthor>
        </PostCardTitleContent>
      </PostCardTitleWrapper>
      <div
        style={{ marginLeft: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.74rem' }}
      >
        <StatusChips progress={progress || ''} deadline={deadline} />
        <PostCardRecruitTeamWrapper>
          <PostCardRecruitTeamPeople>
            <img src={people} alt="people" />
            <span>{total || 0}명</span>
          </PostCardRecruitTeamPeople>

          <PostCardRecruitTeamPeople>
            <img src={thunder} alt="thunder" /> <span>{field || '개발자'}</span>
          </PostCardRecruitTeamPeople>
        </PostCardRecruitTeamWrapper>
      </div>
    </PostCardContainer>
  );
};
