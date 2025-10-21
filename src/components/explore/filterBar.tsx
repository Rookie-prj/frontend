import { FILTER_TABS, ROLE_TABS } from '../../constants/filter';
import option from '../../assets/icons/iconSlider.svg';
import { ChipBar } from '../../components/common/chipbar/chipBar';
interface FilterBarProps {
  sortType: string;
  roleType: string | null;
}

function FilterBar({ sortType, roleType }: FilterBarProps) {
  const tabs = sortType === 'rookie' ? ROLE_TABS : FILTER_TABS;
  return (
    <div style={{ display: 'flex', padding: '18px 16px' }}>
      {sortType === 'project' && <img src={option} />}
      <ChipBar tabs={tabs} roleType={roleType} gap="8px" />
    </div>
  );
}

export default FilterBar;
