import { PostContainer } from './post.styles';
import { PostCard } from './postCard/postCard';
import useProjectsQuery from '../explore/hooks/useProjectsQuery';
import Loading from '../common/loading/loading';

interface PostProps {
  limit?: number;
  variant?: 'default' | 'large';
}

const Post = ({ limit, variant = 'default' }: PostProps) => {
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
    <PostContainer>
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
          variant={variant}
        />
      ))}
    </PostContainer>
  );
};

export default Post;
