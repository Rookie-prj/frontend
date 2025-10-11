import { PostContainer } from './post.styles';
import { PostCard } from './postCard/postCard';

const Post = () => {
  const postData = [
    {
      id: 1,
      title: '제목제목이야 제목이ㅇㅇㅇㅇ제목이라고ㅇ야제목',
      author: '춤추는 악어 · 상명대학교',
    },
    { id: 2, title: '또 다른 프로젝트', author: '개발자 · 서울대학교' },
  ];

  return (
    <PostContainer>
      {postData.map((post) => (
        <PostCard key={post.id} title={post.title} author={post.author} />
      ))}
    </PostContainer>
  );
};

export default Post;
