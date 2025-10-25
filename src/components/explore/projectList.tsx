import { Project } from '../../models';
import ProjectCard from '../../components/explore/projectCard';
import { MyProjectBoard } from '../../models/myProject';
import { SavedBoard } from '../../models/saved';
interface ProjectListProps {
  projects: Project[] | MyProjectBoard[] | SavedBoard[];
  rightIcon?: string;
  onDeleteModalOpen?: () => void;
}
function ProjectList({ projects, rightIcon, onDeleteModalOpen }: ProjectListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {projects &&
        projects.map((project) => (
          <ProjectCard
            key={project.boardId}
            project={project}
            rightIcon={rightIcon}
            onDeleteModalOpen={onDeleteModalOpen}
          />
        ))}
    </div>
  );
}

export default ProjectList;
