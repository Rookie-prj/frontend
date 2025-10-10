import { useState } from 'react';
import {
  NAVIGATION,
  NAVIGATION_GROUPS,
  NAVIGATION_PLUS,
  NavigationValue,
} from '../../constants/navigation';
import {
  LeftNavBarGroup,
  NavBarContainer,
  NavBarItem,
  NavBarPlus,
  RightNavBarGroup,
} from './navigationBar.styles';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState<NavigationValue>('home');

  const handleTabClick = (tabValue: NavigationValue) => {
    setActiveTab(tabValue);
  };

  const renderNavItem = (item: (typeof NAVIGATION)[keyof typeof NAVIGATION]) => {
    const isActive = activeTab === item.value;
    return (
      <NavBarItem
        key={item.value}
        isActive={isActive}
        onClick={() => handleTabClick(item.value)}
        style={{ cursor: 'pointer' }}
      >
        <img src={isActive ? item.activeIcon : item.inactiveIcon} alt={item.label} />
        {item.label}
      </NavBarItem>
    );
  };

  return (
    <NavBarContainer>
      <LeftNavBarGroup>{Object.values(NAVIGATION_GROUPS.LEFT).map(renderNavItem)}</LeftNavBarGroup>

      <RightNavBarGroup>
        {Object.values(NAVIGATION_GROUPS.RIGHT).map(renderNavItem)}
      </RightNavBarGroup>
      <NavBarPlus>
        <img src={NAVIGATION_PLUS.PLUS.inactiveIcon} alt="plus" />
      </NavBarPlus>
    </NavBarContainer>
  );
};

export default NavigationBar;
