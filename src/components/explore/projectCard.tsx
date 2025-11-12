import { Project } from 'models';
import * as S from './projectCard.styles';
import backgroundImg from '../../assets/img/dim.png';
import member from '../../assets/icons/member.svg';
import position from '../../assets/icons/electronic.svg';
import profile from '../../assets/icons/profileEx.svg';
import { MyProjectBoard } from '../../models/myProject';
import { BookmarkBoard } from '../../models/saved';
import bookmark from '../../assets/icons/bookmark_fiiled.svg';
import { Link, useNavigate } from 'react-router-dom';
import {
  PROJECT_STATUS_OPTIONS,
  TEAM_COOPERATION_TOOL_OPTIONS,
  TEAM_COOPERATION_METHOD_OPTIONS,
} from '../../constants/createProject';
import { removeBrackets, getEncodedImageUrl } from '../../utils/stringUtils';

interface ProjectCardProps {
  project: Project | MyProjectBoard | BookmarkBoard;
  rightIcon?: string;
  isBookmark: boolean;
  isBookmarked?: boolean; // 실제 북마크 여부
  handleAddBookmark?: (boardId: number) => void;
  onDeleteModalOpen?: () => void;
  handleDeleteBookmark?: (boardId: number) => void;
  onActionSheetOpen?: (boardId: number) => void;
}

function ProjectCard({
  project,
  rightIcon,
  isBookmark,
  isBookmarked = false,
  handleAddBookmark,
  handleDeleteBookmark,
  onActionSheetOpen,
}: ProjectCardProps) {
  const navigate = useNavigate();
  // D-day 계산

  // processStatus 라벨 가져오기
  const getProcessStatusLabel = () => {
    const processStatus = 'processStatus' in project ? project.processStatus : null;
    if (!processStatus) return '처음부터 시작';

    const statusOption = PROJECT_STATUS_OPTIONS.find((option) => option.value === processStatus);
    return statusOption ? statusOption.label : '처음부터 시작';
  };

  // workTools의 value를 label로 변환
  const getWorkToolsLabel = () => {
    if (!project.workTools) return '';

    const tools = Array.isArray(project.workTools) ? project.workTools : [project.workTools];
    return tools
      .map((tool) => {
        const cleanValue = removeBrackets(tool);
        const option = TEAM_COOPERATION_TOOL_OPTIONS.find((opt) => opt.value === cleanValue);
        return option?.label || cleanValue;
      })
      .join(', ');
  };

  // 첫 번째 이미지 또는 기본 이미지
  const projectImage = project.imageUrl1
    ? getEncodedImageUrl(project.imageUrl1, backgroundImg)
    : backgroundImg;
  const handleRoute = (id: number) => {
    navigate(`/post/${id}`);
  };
  return (
    <S.ProjectCardContainer onClick={() => handleRoute(project.boardId)}>
      <S.ProjectImageWrapper>
        <S.ProjectImage src={projectImage} alt="프로젝트 이미지" />
        <S.ImageDimOverlay />
        {isBookmark && isBookmarked && (
          <S.IconButtonWrapper
            iconSrc={bookmark}
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteBookmark?.(project.boardId);
            }}
          />
        )}
        {isBookmark && !isBookmarked && (
          <S.IconButtonWrapper
            iconSrc={rightIcon}
            onClick={(e) => {
              e.stopPropagation();
              handleAddBookmark?.(project.boardId);
            }}
          />
        )}
        {!isBookmark && (
          <S.IconButtonWrapper
            iconSrc={rightIcon}
            onClick={(e) => {
              e.stopPropagation();
              onActionSheetOpen?.(project.boardId);
            }}
          />
        )}{' '}
        <S.ProjectTitle>{project.title}</S.ProjectTitle>
        <S.WriterInfo>
          {project.writer}
          {project.writerUniversity && `·${project.writerUniversity}`}
        </S.WriterInfo>
        <S.ProfileImage src={profile} alt="작성자" />
        <S.TagsWrapper>
          <S.Tag textColor="#1E2939" isdoneType={false}>
            {getProcessStatusLabel()}
          </S.Tag>
          <S.Tag isActive={project.isActive}>
            {project.isActive === false ? '모집 완료' : '모집시 마감'}
          </S.Tag>
        </S.TagsWrapper>
      </S.ProjectImageWrapper>

      <S.ContentWrapper>
        <S.InfoRow>
          <S.InfoItem>
            <S.InfoIcon src={member} alt="지원자" />
            <S.InfoText>{project.requredPpl}명</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon src={position} alt="포지션" />
            <S.InfoText>
              {Array.isArray(project.cowrkrPosition)
                ? project.cowrkrPosition.join(', ')
                : project.cowrkrPosition}
            </S.InfoText>
          </S.InfoItem>
        </S.InfoRow>

        <S.DetailSection>
          <S.DetailLabel>
            모집중
            <br />
            필수 툴
          </S.DetailLabel>
          <S.DetailContent>
            {(() => {
              // cowrkrSpeciality의 key 값 추출
              if ('cowrkrSpeciality' in project && project.cowrkrSpeciality) {
                const specialityKeys = Object.keys(project.cowrkrSpeciality);
                return specialityKeys.length > 0 ? specialityKeys.join(', ') : '';
              }
              return '';
            })()}
            <br />
            {project.techTools || ''}
          </S.DetailContent>
        </S.DetailSection>
      </S.ContentWrapper>
    </S.ProjectCardContainer>
  );
}

export default ProjectCard;
