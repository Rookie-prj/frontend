import { useSearchParams } from 'react-router-dom';
import CategoryBar from '../../components/explore/categoryBar';
import Header from '../../components/header/header';
import { ExploreCategoryValue } from '../../constants/category';
import Rookies from '../../components/rookie/rookies';

import { RoleTabValue } from '../../constants/filter';
import useRookieQuery from '../../components/explore/hooks/useRookieQuery';
import FilterTab from '../../components/explore/filterBar';
import useProjectsQuery from '../../components/explore/hooks/useProjectsQuery';
import ProjectList from '../../components/explore/projectList';
import bookmark from '../../assets/icons/bookmark.svg';
import InfiniteScrollList from '../../components/common/infiniteScrollList';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sortType') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;

  const { rookies, hasNextPage, fetchNextPage, isFetchingNextPage } = useRookieQuery(sortType);
  const {
    projects,
    hasNextPage: projectHasNextPage,
    fetchNextPage: projectFetchNextPage,
    isFetchingNextPage: projectIsFetchingNextPage,
  } = useProjectsQuery(sortType);

  return (
    <div>
      <Header type="search" />
      <CategoryBar sortType={sortType} />
      <FilterTab sortType={sortType} roleType={roleType} />
      <div style={{ paddingBottom: '130px' }}>
        {sortType === 'rookie' && (
          <InfiniteScrollList
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            enabled={sortType === 'rookie'}
          >
            <Rookies rookies={rookies} type="explore" />
          </InfiniteScrollList>
        )}
        {sortType === 'project' && (
          <InfiniteScrollList
            hasNextPage={projectHasNextPage}
            fetchNextPage={projectFetchNextPage}
            isFetchingNextPage={projectIsFetchingNextPage}
            enabled={sortType === 'project'}
            padding="4px 16px 0 16px"
          >
            <ProjectList projects={projects} rightIcon={bookmark} />
          </InfiniteScrollList>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
