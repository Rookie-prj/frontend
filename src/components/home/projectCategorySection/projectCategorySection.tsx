import {
  ProjectCategorySectionButton,
  ProjectCategorySectionContainer,
  ProjectCategorySectionTitle,
} from './projectCategorySection.styles';
import rightArrow from '../../../assets/icons/rightArrow.svg';
interface ProjectCategorySectionProps {
  slideIndex: number;
  isActive: boolean;
}

const ProjectCategorySection = ({ slideIndex, isActive }: ProjectCategorySectionProps) => {
  return (
    <ProjectCategorySectionContainer slideIndex={slideIndex} isActive={isActive}>
      <ProjectCategorySectionTitle>어떤 프로젝트 찾으세요?</ProjectCategorySectionTitle>
      <ProjectCategorySectionButton>
        전체보기
        <img src={rightArrow} alt="right-arrow" />
      </ProjectCategorySectionButton>
    </ProjectCategorySectionContainer>
  );
};

export default ProjectCategorySection;
