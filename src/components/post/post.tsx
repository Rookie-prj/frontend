import { PostContainer } from './post.styles';
import { PostCard } from './postCard/postCard';
import { mockPostData } from '../../mock/post';

interface PostProps {
  limit?: number;
}

const Post = ({ limit }: PostProps) => {
  return (
    <PostContainer>
      {(limit ? mockPostData.slice(0, limit) : mockPostData).map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          progress={post.progress}
          deadline={post.deadline}
        />
      ))}
    </PostContainer>
  );
};

export default Post;
