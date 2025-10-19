import { useSearchParams } from 'react-router-dom';
import CategoryBar from '../../components/explore/categoryBar';
import Header from '../../components/header/header';
import { ExploreCategoryValue } from 'constants/category';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sortType') as ExploreCategoryValue;

  return (
    <div>
      <Header type="search" />
      <CategoryBar sortType={sortType} />
    </div>
  );
};

export default ExplorePage;
