import { useSearchParams } from 'react-router-dom';
import CategoryBar from '../../components/explore/categoryBar';
import Header from '../../components/header/header';
import { ExploreCategoryValue } from '../../constants/category';
import Rookies from '../../components/rookie/rookies';

import { RoleTabValue } from '../../constants/filter';
import useRookieQuery from '../../components/explore/hooks/useRookieQuery';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { Loading } from '../../components/common/loading';
import FilterTab from '../../components/explore/filterBar';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sortType') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;

  const { rookies, hasNextPage, fetchNextPage, isFetchingNextPage } = useRookieQuery(sortType);

  const { observerRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    enabled: sortType === 'rookie',
  });

  return (
    <div>
      <Header type="search" />
      <CategoryBar sortType={sortType} />
      <FilterTab sortType={sortType} roleType={roleType} />
      <div style={{ paddingBottom: '130px' }}>
        {sortType === 'rookie' && (
          <>
            <Rookies rookies={rookies} isExplore={true} />
            <div ref={observerRef} style={{ height: '20px' }} />
            {isFetchingNextPage && <Loading />}
          </>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
