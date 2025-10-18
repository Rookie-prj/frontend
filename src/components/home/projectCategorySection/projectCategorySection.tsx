import { ProjectCategoryCardsContainer } from './projectCategorySection.styles';
import PROJECT_TYPE from '../../../constants/projectType';
import {
  ProjectCategoryCardRow,
  ProjectCategoryCardCol,
} from './projectCategoryCard/projectCategoryCard';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import ViewAllButton from '../../common/viewAllSection/viewAllSection';
import { useCreateProjectStore } from '../../../store/createProjectStore';

interface ProjectCategorySectionProps {
  showViewAll?: boolean;
  onCardClick?: (projectType: string) => void;
  layout?: 'row' | 'col';
}

const ProjectCategorySection = ({
  showViewAll = true,
  onCardClick,
  layout = 'row',
}: ProjectCategorySectionProps) => {
  const navigate = useNavigate();
  const { selectedProjectType, setSelectedProjectType } = useCreateProjectStore();

  const handleCardClick = (projectType: string) => {
    setSelectedProjectType(projectType);
    if (onCardClick) {
      onCardClick(projectType);
    }
  };

  return (
    <>
      {showViewAll && (
        <ViewAllButton
          route="search"
          title="어떤 프로젝트 찾으세요?"
          onClick={() => navigate(ROUTES.search)}
        />
      )}
      <ProjectCategoryCardsContainer layout={layout}>
        {Object.values(PROJECT_TYPE).map((projectType) => {
          const CardComponent = layout === 'col' ? ProjectCategoryCardCol : ProjectCategoryCardRow;
          return (
            <CardComponent
              key={projectType.value}
              tag={projectType.tag}
              title={projectType.label}
              icon={projectType.icon}
              layout={layout}
              isActive={selectedProjectType === projectType.value}
              onClick={() => handleCardClick(projectType.value)}
            />
          );
        })}
      </ProjectCategoryCardsContainer>
    </>
  );
};

export default ProjectCategorySection;
