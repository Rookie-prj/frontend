import { useNavigate } from 'react-router-dom';
import thunder from '../../../assets/icons/thunder.svg';
import people from '../../../assets/icons/people.svg';
import StatusChips from '../statusChips/statusChips';
import { TEAM_POSITION_OPTIONS } from '../../../constants/createProject';
import { removeBrackets } from '../../../utils/stringUtils';
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
  cowrkrPosition?: string[];
  imageUrl1?: string | null;
  backgroundImage?: string;
  backgroundColor?: string;
  overlayColor?: string;
  variant?: 'default' | 'large';
}

export const PostCard = ({
  id,
  title,
  author,
  progress,
  deadline,
  total,
  field,
  cowrkrPosition,
  imageUrl1,
  backgroundImage = background,
  backgroundColor,
  overlayColor,
  variant = 'default',
}: PostCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  const projectImage = imageUrl1 || backgroundImg;

  // cowrkrPosition의 value들을 label로 변환 (postDetail과 동일한 로직)
  const positionLabels =
    cowrkrPosition
      ?.map((positionValue) => {
        const cleanValue = removeBrackets(positionValue);
        const option = TEAM_POSITION_OPTIONS.find((opt) => opt.value === cleanValue);
        return option?.label || cleanValue;
      })
      .join(', ') || '';

  return (
    <PostCardContainer $variant={variant} onClick={handleClick}>
      <PostCardTitleWrapper
        backgroundImage={projectImage}
        backgroundColor={backgroundColor}
        $variant={variant}
      >
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
            <img src={thunder} alt="thunder" /> <span>{positionLabels || '개발자'}</span>
          </PostCardRecruitTeamPeople>
        </PostCardRecruitTeamWrapper>
      </div>
    </PostCardContainer>
  );
};
