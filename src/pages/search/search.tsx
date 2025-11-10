import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  SearchPageContainer,
  RecommendSection,
  SectionTitle,
  FilterChipContainer,
  FilterChip,
  RecentSearchSection,
  RecentSearchHeader,
  RecentSearchTitle,
  DeleteAllButton,
  RecentSearchList,
  RecentSearchItem,
  RecentSearchItemContent,
  SearchIcon,
  RecentSearchText,
  DeleteButton,
} from '../../components/search/search.styles';
import searchIcon from '../../assets/icons/gray-search.svg';
import deleteIcon from '../../assets/icons/search-delete.svg';
import SearchInput from '../../components/search/input';
import { BaseContainer } from '../../components/container/container.styles';
import { ROUTES } from '../../constants/routes';
import { useModal } from '../../hooks/useModal';
import DeleteConfirmModal from '../../components/common/deleteModal/deleteConfirmModal';
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
import FilterBottomSheet from '../../components/explore/filterBottomSheet';
import { useRemoveBookmarkMutation } from '../../components/explore/hooks/useRemoveBookmarkMutation';
import EmptyState from '../../components/common/emptyState/emptyState';
import rookieyGray from '../../assets/icons/rookieGray.svg';
import RedirectModal from '../../components/rookieDetail/redirectModal';
import useToast from '../../hooks/useToast';
import Toast from '../../components/common/toast/toast';
import { useFilterBoardsMutation } from '../../components/explore/hooks/useFilterBoardsMutation';
import { FilteredBoard, BoardFilterResponse } from '../../models/boards';

const RECENT_SEARCHES_KEY = 'recentSearches';
const MAX_RECENT_SEARCHES = 10;

const RECOMMENDED_KEYWORDS = ['콘텐츠', 'UI/UX', '프론트엔드', '기획자'];

const Search = () => {
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get('q') || undefined;
  const sortType = (searchParams.get('sortType') || 'project') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;

  const [search, setSearch] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const {
    isOpen: isDeleteAllModalOpen,
    handleModalClose: handleDeleteAllModalClose,
    handleModalOpen: handleDeleteAllModalOpen,
  } = useModal();

  // 검색 결과 관련 상태
  const [isOpen, setIsOpen] = useState(false);
  const [boardField, setBoardField] = useState<string[]>([]);
  const [selectedInterestFields, setSelectedInterestFields] = useState<string[]>([]);
  const [selectedBoardId, setSelectedBoardId] = useState<number>(0);
  const [filterDatas, setFilterDatas] = useState<FilteredBoard[] | null>(null);

  const { rookies, hasNextPage, fetchNextPage, isFetchingNextPage } = useRookieQuery({
    sortType,
    search: urlSearch,
    roleType,
  });

  const { handleFilterBoards, convertFilteredBoardToProject } = useFilterBoardsMutation({
    onSuccess: (data: BoardFilterResponse) => {
      if (data && data.content) {
        setFilterDatas(data.content);
      }
    },
    onError: () => {
      setFilterDatas(null);
    },
  });

  const {
    isOpen: isDeleteModalOpen,
    handleModalClose: handleDeleteModalClose,
    handleModalOpen: handleDeleteModalOpen,
  } = useModal();

  const {
    isOpen: isRedirectModalOpen,
    handleModalClose: handleRedirectModalClose,
    handleModalOpen: handleRedirectModalOpen,
  } = useModal();

  const { isOpen: isToastOpen, message, handleToastOpen, handleToastClose } = useToast();
  const { handleRemoveBookmark } = useRemoveBookmarkMutation({
    onError: handleRedirectModalOpen,
    onSuccess: handleToastOpen,
  });

  const {
    projects,
    hasNextPage: projectHasNextPage,
    fetchNextPage: projectFetchNextPage,
    isFetchingNextPage: projectIsFetchingNextPage,
  } = useProjectsQuery({ sortType, boardType: roleType, search: urlSearch });

  useEffect(() => {
    // sessionStorage에서 최근 검색어 불러오기
    const saved = sessionStorage.getItem(RECENT_SEARCHES_KEY);
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent searches:', e);
      }
    }
    // 페이지 진입 시 검색창에 포커스
    inputRef.current?.focus();
  }, []);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleSearchSubmit = (keyword: string) => {
    if (!keyword.trim()) return;

    // 최근 검색어에 추가
    const updated = [keyword, ...recentSearches.filter((s) => s !== keyword)].slice(
      0,
      MAX_RECENT_SEARCHES,
    );
    setRecentSearches(updated);
    sessionStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    setSearch(keyword);

    // 검색 페이지로 이동 (검색어를 쿼리 파라미터로 전달)
    navigate(`${ROUTES.search}?q=${encodeURIComponent(keyword.trim())}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search.trim()) {
      handleSearchSubmit(search);
    }
  };

  const handleRecentSearchClick = (keyword: string) => {
    setSearch(keyword);
    handleSearchSubmit(keyword);
  };

  const handleDeleteRecentSearch = (keyword: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const updated = recentSearches.filter((s) => s !== keyword);
    setRecentSearches(updated);
    sessionStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  };

  const handleDeleteAllClick = () => {
    handleDeleteAllModalOpen();
  };

  const handleDeleteAllConfirm = () => {
    setRecentSearches([]);
    sessionStorage.removeItem(RECENT_SEARCHES_KEY);
    handleDeleteAllModalClose();
  };

  const handleRecommendClick = (keyword: string) => {
    setSearch(keyword);
    handleSearchSubmit(keyword);
  };

  const handleDeleteBookmark = (boardId: number) => {
    setSelectedBoardId(boardId);
    handleDeleteModalOpen();
  };

  const handleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterReset = () => {
    setSelectedInterestFields([]);
    setBoardField([]);
    setFilterDatas(null);
  };

  // URL에 검색어가 있으면 검색 결과 페이지 표시
  if (urlSearch) {
    return (
      <div>
        <Header type="search" />
        <CategoryBar sortType={sortType} />
        <FilterTab
          sortType={sortType}
          roleType={roleType}
          handleBottomSheet={handleBottomSheet}
          handleFilterReset={handleFilterReset}
        />
        <div style={{ paddingBottom: '130px' }}>
          {sortType === 'rookie' && (
            <InfiniteScrollList
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              enabled={sortType === 'rookie'}
            >
              {rookies.length > 0 && <Rookies rookies={rookies} type="explore" />}
              {rookies.length === 0 && (
                <EmptyState
                  message={`일치하는 결과가 없어요.\n다른 키워드로 탐색해볼까요?`}
                  icon={rookieyGray}
                  search={true}
                />
              )}
            </InfiniteScrollList>
          )}
          {sortType === 'project' && (
            <InfiniteScrollList
              hasNextPage={projectHasNextPage}
              fetchNextPage={projectFetchNextPage}
              isFetchingNextPage={projectIsFetchingNextPage}
              padding="4px 16px 0 16px"
            >
              {filterDatas && filterDatas.length > 0 && (
                <ProjectList
                  projects={filterDatas.map(convertFilteredBoardToProject)}
                  rightIcon={bookmark}
                  handleDeleteBookmark={handleDeleteBookmark}
                  isBookmark={true}
                  onError={handleRedirectModalOpen}
                  onSuccess={handleToastOpen}
                />
              )}
              {!filterDatas && projects.length > 0 && (
                <ProjectList
                  projects={projects}
                  rightIcon={bookmark}
                  handleDeleteBookmark={handleDeleteBookmark}
                  isBookmark={true}
                  onError={handleRedirectModalOpen}
                  onSuccess={handleToastOpen}
                />
              )}
              {((filterDatas && filterDatas.length === 0) ||
                (!filterDatas && projects.length === 0)) && (
                <EmptyState
                  message={`일치하는 결과가 없어요.\n다른 키워드로 탐색해볼까요?`}
                  icon={rookieyGray}
                  search={true}
                />
              )}
            </InfiniteScrollList>
          )}
        </div>

        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={handleDeleteModalClose}
          onConfirm={() => handleRemoveBookmark(selectedBoardId)}
          message="북마크에서 제거할까요?"
        />

        <RedirectModal
          isOpen={isRedirectModalOpen}
          onClose={handleRedirectModalClose}
          redirectTo="/login"
          title="로그인 후 이용해주세요"
        />

        <FilterBottomSheet
          isOpen={isOpen}
          onClose={handleBottomSheet}
          selectedInterestFields={selectedInterestFields}
          selectedProjectTypes={boardField}
          onInterestFieldToggle={(value: string) => {
            setSelectedInterestFields((prev) =>
              prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
            );
          }}
          onProjectTypeToggle={(value: string) => {
            setBoardField((prev) =>
              prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
            );
          }}
          onReset={handleFilterReset}
          onConfirm={() => {
            handleFilterBoards({
              pageable: {
                page: 0,
                size: 10,
                sort: ['createdAt'],
              },
              filterRequest: {
                boardTypes: boardField.length > 0 ? boardField : undefined,
                projectFields:
                  selectedInterestFields.length > 0 ? selectedInterestFields : undefined,
              },
            });
          }}
        />
        <Toast isOpen={isToastOpen} message={message} onClose={handleToastClose} />
      </div>
    );
  }

  // 검색어가 없으면 검색 입력 페이지 표시
  return (
    <BaseContainer style={{ padding: '0 1rem' }}>
      <SearchInput
        search={search}
        onSearchChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />

      {!search && (
        <>
          <RecommendSection>
            <SectionTitle>추천검색</SectionTitle>
            <FilterChipContainer>
              {RECOMMENDED_KEYWORDS.map((keyword) => (
                <FilterChip key={keyword} onClick={() => handleRecommendClick(keyword)}>
                  {keyword}
                </FilterChip>
              ))}
            </FilterChipContainer>
          </RecommendSection>

          {recentSearches.length > 0 && (
            <RecentSearchSection>
              <RecentSearchHeader>
                <RecentSearchTitle>최근검색</RecentSearchTitle>
                <DeleteAllButton onClick={handleDeleteAllClick}>전체삭제</DeleteAllButton>
              </RecentSearchHeader>
              <RecentSearchList>
                {recentSearches.map((keyword, index) => (
                  <RecentSearchItem key={index}>
                    <RecentSearchItemContent onClick={() => handleRecentSearchClick(keyword)}>
                      <SearchIcon>
                        <img
                          src={searchIcon}
                          alt="search"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </SearchIcon>
                      <RecentSearchText>{keyword}</RecentSearchText>
                    </RecentSearchItemContent>
                    <DeleteButton onClick={(e) => handleDeleteRecentSearch(keyword, e)}>
                      <img
                        src={deleteIcon}
                        alt="delete"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </DeleteButton>
                  </RecentSearchItem>
                ))}
              </RecentSearchList>
            </RecentSearchSection>
          )}
        </>
      )}

      <DeleteConfirmModal
        isOpen={isDeleteAllModalOpen}
        onClose={handleDeleteAllModalClose}
        onConfirm={handleDeleteAllConfirm}
        message="최근검색창을 전부 비울까요?"
        confirmText="확인"
      />
    </BaseContainer>
  );
};

export default Search;
