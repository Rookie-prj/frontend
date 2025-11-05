import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

const RECENT_SEARCHES_KEY = 'recentSearches';
const MAX_RECENT_SEARCHES = 10;

const RECOMMENDED_KEYWORDS = ['콘텐츠', 'UI/UX', '프론트엔드', '기획자'];

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

    // 탐색 페이지로 이동 (검색어를 쿼리 파라미터로 전달)
    navigate(`${ROUTES.explore}?search=${encodeURIComponent(keyword.trim())}`);
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

  const handleDeleteAll = () => {
    setRecentSearches([]);
    sessionStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  const handleRecommendClick = (keyword: string) => {
    setSearch(keyword);
    handleSearchSubmit(keyword);
  };

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
                <DeleteAllButton onClick={handleDeleteAll}>전체삭제</DeleteAllButton>
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
    </BaseContainer>
  );
};

export default Search;
