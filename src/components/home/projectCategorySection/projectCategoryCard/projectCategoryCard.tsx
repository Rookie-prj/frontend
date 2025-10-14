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
}

const ProjectCategoryCard = ({ tag, title, icon, layout = 'row' }: ProjectTypeCardProps) => {
  return (
    <ProjectCategoryCardContainer>
      <ProjectCategoryCardTag>{tag}</ProjectCategoryCardTag>
      <ProjectCategoryCardContent>
        <ProjectCategoryCardTitle>{title}</ProjectCategoryCardTitle>
        <img src={icon} alt="project-icon" />
      </ProjectCategoryCardContent>
    </ProjectCategoryCardContainer>
  );
};
export default ProjectCategoryCard;
