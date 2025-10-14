import {
  ProjectCategorySectionButton,
  ProjectCategorySectionContainer,
  ProjectCategorySectionTitle,
  ProjectCategoryCardsContainer,
} from './projectCategorySection.styles';
import rightArrow from '../../../assets/icons/rightArrow.svg';
import PROJECT_TYPE from '../../../constants/projectType';
import ProjectCategoryCard from './projectCategoryCard/projectCategoryCard';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
interface ProjectCategorySectionProps {
  slideIndex: number;
  isActive: boolean;
}

const ProjectCategorySection = ({ slideIndex, isActive }: ProjectCategorySectionProps) => {
  const navigate = useNavigate();
  return (
    <>
      <ProjectCategorySectionContainer slideIndex={slideIndex} isActive={isActive}>
        <ProjectCategorySectionTitle>어떤 프로젝트 찾으세요?</ProjectCategorySectionTitle>
        <ProjectCategorySectionButton onClick={() => navigate(ROUTES.search)}>
          전체보기
          <img src={rightArrow} alt="right-arrow" />
        </ProjectCategorySectionButton>
      </ProjectCategorySectionContainer>
      <ProjectCategoryCardsContainer>
        {Object.values(PROJECT_TYPE).map((projectType) => (
          <ProjectCategoryCard
            key={projectType.value}
            tag={projectType.tag}
            title={projectType.label}
            icon={projectType.icon}
          />
        ))}
      </ProjectCategoryCardsContainer>
    </>
  );
};

export default ProjectCategorySection;
