import { FILTER_TABS, ROLE_TABS, RoleTabValue } from '../../constants/filter';
import option from '../../assets/icons/iconSlider.svg';
import { ChipBar } from '../../components/common/chipbar/chipBar';
import { ExploreCategoryValue } from '../../constants/category';
interface FilterBarProps {
  sortType: ExploreCategoryValue;
  roleType: RoleTabValue;
}

function FilterBar({ sortType, roleType }: FilterBarProps) {
  const tabs = sortType === 'rookie' ? ROLE_TABS : FILTER_TABS;
  return (
    <div style={{ display: 'flex', padding: '18px 16px' }}>
      {sortType === 'project' && <img src={option} />}
      <ChipBar tabs={tabs} type={roleType} gap="8px" />
    </div>
  );
}

export default FilterBar;
