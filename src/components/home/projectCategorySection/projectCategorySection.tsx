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
  layout?: 'row' | 'col';
  onCardClick?: (projectType: string) => void;
}

const ProjectCategorySection = ({
  showViewAll = true,
  layout = 'row',
  onCardClick,
}: ProjectCategorySectionProps) => {
  const navigate = useNavigate();
  const { selectedProjectType, setSelectedProjectType } = useCreateProjectStore();

  const handleCardClick = (projectType: string) => {
    if (onCardClick) {
      // onCardClick이 있으면 그것을 사용 (step1에서 스토어에 저장)
      onCardClick(projectType);
    } else {
      // onCardClick이 없으면 navigate (홈화면에서 페이지 이동)
      navigate(`${ROUTES.explore}?roleType=${projectType}`);
    }
  };

  return (
    <>
      {showViewAll && (
        <ViewAllButton
          route="explore"
          title="어떤 프로젝트 찾으세요?"
          onClick={() => navigate(ROUTES.explore)}
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
