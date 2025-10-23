import { Project } from 'models';
import * as S from './projectCard.styles';
import backgroundImg from '../../assets/img/dim.png';
import member from '../../assets/icons/member.svg';
import position from '../../assets/icons/electronic.svg';
import profile from '../../assets/icons/profileEx.svg';
interface ProjectCardProps {
  project: Project;
  rightIcon?: string;
}

function ProjectCard({ project, rightIcon }: ProjectCardProps) {
  // D-day 계산
  const calculateDday = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `D-${diffDays}` : '마감';
  };

  // 첫 번째 이미지 또는 기본 이미지
  const projectImage = project.imageUrl1 || backgroundImg;

  return (
    <S.ProjectCardContainer>
      <S.ProjectImageWrapper>
        <S.ProjectImage src={projectImage} alt="프로젝트 이미지" />
        <S.ImageDimOverlay />

        <S.IconButtonWrapper iconSrc={rightIcon}></S.IconButtonWrapper>

        <S.ProjectTitle>{project.title}</S.ProjectTitle>

        <S.WriterInfo>{project.writer}</S.WriterInfo>

        <S.ProfileImage src={profile} alt="작성자" />

        <S.TagsWrapper>
          <S.Tag textColor="#1E2939">{calculateDday(project.endDate)}</S.Tag>
          <S.Tag textColor="#364153">{project.distance}</S.Tag>
        </S.TagsWrapper>
      </S.ProjectImageWrapper>

      <S.ContentWrapper>
        <S.InfoRow>
          <S.InfoItem>
            <S.InfoIcon src={member} alt="지원자" />
            <S.InfoText>{project.requredPpl}명</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon src={position} alt="조회수" />
            <S.InfoText>조회 {project.viewCount}</S.InfoText>
          </S.InfoItem>
        </S.InfoRow>

        <S.DetailSection>
          <S.DetailLabel>
            모집중
            <br />
            필수 툴
          </S.DetailLabel>
          <S.DetailContent>
            {project.cowrkrPosition.join(', ')}
            <br />
            {project.workTools?.join(', ') || project.techTools}
          </S.DetailContent>
        </S.DetailSection>
      </S.ContentWrapper>
    </S.ProjectCardContainer>
  );
}

export default ProjectCard;
