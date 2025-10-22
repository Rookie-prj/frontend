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
import useProjectsQuery from '../../components/explore/hooks/useProjectsQuery';
import ProjectList from '../../components/explore/projectList';
import bookmark from '../../assets/icons/bookmark.svg';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sortType') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;

  const { rookies, hasNextPage, fetchNextPage, isFetchingNextPage } = useRookieQuery(sortType);
  const {
    projects,
    hasNextPage: projectNextPage,
    fetchNextPage: projectFetchNextPage,
    isFetchingNextPage: projectIsFetchingNextPage,
  } = useProjectsQuery(sortType);

  const { observerRef } = useInfiniteScroll({
    hasNextPage: sortType === 'rookie' ? hasNextPage : projectNextPage,
    fetchNextPage: sortType === 'rookie' ? fetchNextPage : projectFetchNextPage,
    isFetchingNextPage: sortType === 'rookie' ? isFetchingNextPage : projectIsFetchingNextPage,
    enabled: sortType === 'rookie' || sortType === 'project',
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
        {sortType === 'project' && (
          <div style={{ padding: '4px 16px 0 16px' }}>
            <ProjectList projects={projects} rightIcon={bookmark} />
            <div ref={observerRef} style={{ height: '20px' }} />
            {isFetchingNextPage && <Loading />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
