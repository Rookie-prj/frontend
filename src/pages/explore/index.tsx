import { useSearchParams } from 'react-router-dom';
import CategoryBar from '../../components/explore/categoryBar';
import Header from '../../components/header/header';
import { ExploreCategoryValue } from '../../constants/category';
import Rookies from '../../components/rookie/rookies';

import { FilterTabValue, RoleTabValue } from '../../constants/filter';
import useRookieQuery from '../../components/explore/hooks/useRookieQuery';
import FilterTab from '../../components/explore/filterBar';
import useProjectsQuery from '../../components/explore/hooks/useProjectsQuery';
import ProjectList from '../../components/explore/projectList';
import bookmark from '../../assets/icons/bookmark.svg';
import InfiniteScrollList from '../../components/common/infiniteScrollList';
import { useState } from 'react';
import FilterBottomSheet from '../../components/explore/filterBottomSheet';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = (searchParams.get('sortType') || 'project') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterestFields, setSelectedInterestFields] = useState<string[]>([]);
  const { rookies, hasNextPage, fetchNextPage, isFetchingNextPage } = useRookieQuery(sortType);
  const {
    projects,
    hasNextPage: projectHasNextPage,
    fetchNextPage: projectFetchNextPage,
    isFetchingNextPage: projectIsFetchingNextPage,
  } = useProjectsQuery({ sortType, boardType: roleType });

  const handleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header type="search" />
      <CategoryBar sortType={sortType} />
      <FilterTab sortType={sortType} roleType={roleType} handleBottomSheet={handleBottomSheet} />
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
            padding="4px 16px 0 16px"
          >
            <ProjectList projects={projects} rightIcon={bookmark} />
          </InfiniteScrollList>
        )}
      </div>
      <FilterBottomSheet
        isOpen={isOpen}
        onClose={handleBottomSheet}
        selectedInterestFields={selectedInterestFields}
        onInterestFieldToggle={(value: string) => {
          setSelectedInterestFields((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
          );
        }}
        onReset={() => setSelectedInterestFields([])}
        onConfirm={() => {
          /* 필터 적용 로직 */
        }}
      />
    </div>
  );
};

export default ExplorePage;
