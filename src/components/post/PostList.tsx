import { PostCard } from './postCard/postCard';
import * as S from './PostList.styles';
import useProjectsQuery from '../explore/hooks/useProjectsQuery';
import Loading from '../common/loading/loading';

interface PostListProps {
  limit?: number;
  title?: string;
}

function ProjectList({ limit, title }: PostListProps) {
  const response = useProjectsQuery();

  if (response.isLoading) {
    return <Loading />;
  }

  const projects = response.projects || [];
  const posts = projects.map((project) => ({
    id: project.boardId,
    title: project.title,
    author: project.writer,
    progress: project.distance || '',
    deadline: project.endDate || '',
    total: project.requredPpl || 0,
    field: project.projectFields?.[0] || project.cowrkrPosition?.[0] || '개발자',
    imageUrl1: project.imageUrl1,
  }));

  const displayPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <>
      {title && <S.PostListTitle>{title}</S.PostListTitle>}
      <S.PostListContainer>
        {displayPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            progress={post.progress}
            deadline={post.deadline}
            total={post.total}
            field={post.field}
            imageUrl1={post.imageUrl1}
          />
        ))}
      </S.PostListContainer>
    </>
  );
}

export default ProjectList;
