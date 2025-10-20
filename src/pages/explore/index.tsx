import { useSearchParams } from 'react-router-dom';
import CategoryBar from '../../components/explore/categoryBar';
import Header from '../../components/header/header';
import { ExploreCategoryValue } from '../../constants/category';
import Rookie from '../../components/rookie/rookie';

import { FILTER_TABS, RoleTabValue } from '../../constants/filter';
import { ROLE_TABS } from '../../constants/filter';
import option from '../../assets/icons/iconSlider.svg';
import { ChipBar } from '../../components/common/chipbar/chipBar';

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sortType') as ExploreCategoryValue;
  const roleType = searchParams.get('roleType') as RoleTabValue;
  const tabs = sortType === 'rookie' ? ROLE_TABS : FILTER_TABS;
  return (
    <div>
      <Header type="search" />
      <CategoryBar sortType={sortType} />
      <div style={{ display: 'flex', padding: '18px 16px' }}>
        {sortType === 'project' && <img src={option} />}
        <ChipBar tabs={tabs} roleType={roleType} gap="8px" />
      </div>
      {sortType === 'rookie' && <Rookie />}
    </div>
  );
};

export default ExplorePage;
