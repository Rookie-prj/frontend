// import { RookieContainer } from './rookie.styles';
import { RookieList } from 'models';
import { PostContainer } from '../post/post.styles';
import RookieCard from './rookieCard/rookieCard';
import QueryLink from '../../components/common/queryLink';
import { Link } from 'react-router';

interface RookieProps {
  rookies: RookieList;
  type?: 'explore' | 'default' | 'detail';
}

const Rookies = ({ rookies, type }: RookieProps) => {
  return (
    <PostContainer>
      {rookies?.map((rookie) => (
        <Link to={`/explore/rookie/${rookie.userId}`} key={rookie.userId}>
          <RookieCard type={type} rookie={rookie} />
        </Link>
      ))}
    </PostContainer>
  );
};

export default Rookies;
