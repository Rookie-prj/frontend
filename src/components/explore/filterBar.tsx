import {
  FILTER_TABS,
  ROLE_TABS,
  RoleTabValue,
  LibraryTabValue,
  LIBRARY_TABS,
} from '../../constants/filter';
import option from '../../assets/icons/iconSlider.svg';
import { ChipBar } from '../../components/common/chipbar/chipBar';
import { ExploreCategoryValue, LibraryCategoryValue } from '../../constants/category';
interface FilterBarProps {
  sortType: ExploreCategoryValue | LibraryCategoryValue;
  roleType: RoleTabValue | LibraryTabValue;
}

function FilterBar({ sortType, roleType }: FilterBarProps) {
  let tabs;
  if (sortType === 'rookie') {
    tabs = ROLE_TABS;
  } else if (sortType === 'project') {
    tabs = FILTER_TABS;
  } else if (sortType === 'my_project') {
    tabs = LIBRARY_TABS;
  } else {
    tabs = [];
  }

  return (
    <div style={{ display: 'flex', padding: '18px 16px' }}>
      {sortType === 'project' && <img src={option} />}
      <ChipBar tabs={tabs} type={roleType} gap="8px" />
    </div>
  );
}

export default FilterBar;
