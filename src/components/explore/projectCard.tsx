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
  return (
    <S.ProjectCardContainer>
      <S.ProjectImageWrapper>
        <S.ProjectImage src={backgroundImg} alt="프로젝트 이미지" />
        <S.ImageDimOverlay />

        <S.IconButtonWrapper iconSrc={rightIcon}></S.IconButtonWrapper>

        <S.ProjectTitle>{project.title}</S.ProjectTitle>

        <S.WriterInfo>{project.writer}</S.WriterInfo>

        <S.ProfileImage src={profile} alt="작성자" />

        <S.TagsWrapper>
          <S.Tag textColor="#1E2939">D-7</S.Tag>
          <S.Tag textColor="#364153">처음부터 시작</S.Tag>
        </S.TagsWrapper>
      </S.ProjectImageWrapper>

      <S.ContentWrapper>
        <S.InfoRow>
          <S.InfoItem>
            <S.InfoIcon src={member} alt="멤버수" />
            <S.InfoText>{project.viewCount}</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon src={position} alt="포지션" />
            <S.InfoText>{project.boardType}</S.InfoText>
          </S.InfoItem>
        </S.InfoRow>

        <S.DetailSection>
          <S.DetailLabel>
            모집중
            <br />
            필수 툴
          </S.DetailLabel>
          <S.DetailContent>
            {project.cowrkrPosition}
            <br />
            {project.cowrkrSpeciality}
          </S.DetailContent>
        </S.DetailSection>
      </S.ContentWrapper>
    </S.ProjectCardContainer>
  );
}

export default ProjectCard;
