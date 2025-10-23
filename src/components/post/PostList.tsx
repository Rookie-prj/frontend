import { PostCard } from './postCard/postCard';
import { mockPostData } from '../../mock/post';
import * as S from './PostList.styles';

interface PostListProps {
  limit?: number;
  title?: string;
}

function ProjectList({ limit, title }: PostListProps) {
  const posts = limit ? mockPostData.slice(0, limit) : mockPostData;

  return (
    <>
      {title && <S.PostListTitle>{title}</S.PostListTitle>}
      <S.PostListContainer>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            progress={post.progress}
            deadline={post.deadline}
          />
        ))}
      </S.PostListContainer>
    </>
  );
}

export default ProjectList;
