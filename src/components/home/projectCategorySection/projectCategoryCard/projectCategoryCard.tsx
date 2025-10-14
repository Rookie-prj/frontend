import {
  ProjectCategoryCardContainer,
  ProjectCategoryCardContent,
  ProjectCategoryCardIconWrapper,
  ProjectCategoryCardTag,
  ProjectCategoryCardTitle,
} from './projectCategoryCard.styles';

interface ProjectTypeCardProps {
  tag: string;
  title: string;
  icon: string;
  layout?: 'row' | 'col';
  isActive?: boolean;
  onClick?: () => void;
}

export const ProjectCategoryCardRow = ({
  tag,
  title,
  icon,
  layout = 'row',
  isActive = false,
  onClick,
}: ProjectTypeCardProps) => {
  return (
    <ProjectCategoryCardContainer layout={layout} isActive={isActive} onClick={onClick}>
      <ProjectCategoryCardTag>{tag}</ProjectCategoryCardTag>
      <ProjectCategoryCardContent>
        <ProjectCategoryCardTitle>{title}</ProjectCategoryCardTitle>
        <ProjectCategoryCardIconWrapper layout={layout}>
          <img src={icon} alt="project-icon" />
        </ProjectCategoryCardIconWrapper>
      </ProjectCategoryCardContent>
    </ProjectCategoryCardContainer>
  );
};

export const ProjectCategoryCardCol = ({
  tag,
  title,
  icon,
  layout = 'col',
  isActive = false,
  onClick,
}: ProjectTypeCardProps) => {
  return (
    <ProjectCategoryCardContainer layout={layout} isActive={isActive} onClick={onClick}>
      <ProjectCategoryCardIconWrapper layout={layout}>
        <img src={icon} alt="project-icon" style={{ width: '5rem', height: '5rem' }} />
      </ProjectCategoryCardIconWrapper>
      <ProjectCategoryCardTag>{tag}</ProjectCategoryCardTag>
      <ProjectCategoryCardContent>
        <ProjectCategoryCardTitle>{title}</ProjectCategoryCardTitle>
      </ProjectCategoryCardContent>
    </ProjectCategoryCardContainer>
  );
};
