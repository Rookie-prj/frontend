// import { RookieContainer } from './rookie.styles';
import { RookieList } from 'models';
import { PostContainer } from '../post/post.styles';
import RookieCard from './rookieCard/rookieCard';

interface RookieProps {
  rookies: RookieList;
  isExplore?: boolean;
}

const Rookies = ({ rookies, isExplore }: RookieProps) => {
  return (
    <PostContainer>
      {rookies?.map((rookie) => (
        <RookieCard
          key={rookie.userId}
          isExplore={isExplore}
          name={rookie.name}
          department={rookie.major}
          year={rookie.grade}
          school={rookie.universityName}
          profileImageUrl={rookie.profileImageUrl}
          favoriteSubject={rookie.favoriteSubject}
        />
      ))}
    </PostContainer>
  );
};

export default Rookies;
