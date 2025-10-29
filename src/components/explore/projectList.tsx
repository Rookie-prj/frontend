import { Project } from '../../models';
import ProjectCard from '../../components/explore/projectCard';
import { MyProjectBoard } from '../../models/myProject';
import { BookmarkBoard } from '../../models/saved';
import { useAddBookmarkMutation } from './hooks/useAddBookmarkMutation';
import { Link } from 'react-router-dom';
interface ProjectListProps {
  projects: Project[] | MyProjectBoard[] | BookmarkBoard[];
  rightIcon?: string;
  isBookmark: boolean;
  handleDeleteBookmark?: (boardId: number) => void;
  onDeleteModalOpen?: () => void;
  onActionSheetOpen?: (boardId: number) => void;
  onError?: () => void;
  onSuccess?: (message: string) => void;
}
function ProjectList({
  projects,
  rightIcon,
  isBookmark,
  handleDeleteBookmark,
  onDeleteModalOpen,
  onActionSheetOpen,
  onError,
  onSuccess,
}: ProjectListProps) {
  const { handleAddBookmark } = useAddBookmarkMutation({ onError, onSuccess });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {projects &&
        projects.map((project) => (
          <ProjectCard
            project={project}
            rightIcon={rightIcon}
            isBookmark={isBookmark}
            handleAddBookmark={handleAddBookmark}
            handleDeleteBookmark={handleDeleteBookmark}
            onActionSheetOpen={onActionSheetOpen}
            key={project.boardId}
          />
        ))}
    </div>
  );
}

export default ProjectList;
