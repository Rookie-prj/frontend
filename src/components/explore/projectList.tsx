import { Project } from 'models';
import ProjectCard from './projectCard';
interface ProjectListProps {
  projects: Project[];
  rightIcon?: string;
}
function ProjectList({ projects, rightIcon }: ProjectListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.boardId} project={project} rightIcon={rightIcon} />
        ))}
    </div>
  );
}

export default ProjectList;
