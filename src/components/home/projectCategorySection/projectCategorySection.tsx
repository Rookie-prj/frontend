import { ProjectCategoryCardsContainer } from './projectCategorySection.styles';
import PROJECT_TYPE from '../../../constants/projectType';
import ProjectCategoryCard from './projectCategoryCard/projectCategoryCard';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import ViewAllButton from '../../common/viewAllSection/viewAllSection';

const ProjectCategorySection = () => {
  const navigate = useNavigate();
  return (
    <>
      <ViewAllButton
        route="search"
        title="어떤 프로젝트 찾으세요?"
        onClick={() => navigate(ROUTES.search)}
      />
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
