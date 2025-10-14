import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  NAVIGATION,
  NAVIGATION_GROUPS,
  NAVIGATION_PLUS,
  NavigationValue,
} from '../../constants/navigation';
import { ROUTES } from '../../constants/routes';
import {
  LeftNavBarGroup,
  NavBarContainer,
  NavBarItem,
  NavBarPlus,
  PlusIcon,
  RightNavBarGroup,
} from './navigationBar.styles';
import CreateProject from '../modal/createProject/createProject';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleTabClick = (tabValue: NavigationValue) => {
    const routes = {
      home: ROUTES.home,
      search: ROUTES.search,
      chat: ROUTES.chat,
      library: ROUTES.library,
    };
    navigate(routes[tabValue]);
  };

  const handlePlusClick = () => {
    setIsRotating(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsRotating(false);
  };

  const isActive = (itemValue: NavigationValue) => location.pathname === ROUTES[itemValue];

  const renderNavItem = (item: any) => (
    <NavBarItem
      key={item.value}
      isActive={isActive(item.value)}
      onClick={() => handleTabClick(item.value)}
    >
      <img src={isActive(item.value) ? item.activeIcon : item.inactiveIcon} alt={item.label} />
      {item.label}
    </NavBarItem>
  );

  return (
    <>
      <NavBarContainer>
        <LeftNavBarGroup>
          {Object.values(NAVIGATION_GROUPS.LEFT).map(renderNavItem)}
        </LeftNavBarGroup>
        <RightNavBarGroup>
          {Object.values(NAVIGATION_GROUPS.RIGHT).map(renderNavItem)}
        </RightNavBarGroup>
        <NavBarPlus onClick={handlePlusClick}>
          <PlusIcon src={NAVIGATION_PLUS.PLUS.inactiveIcon} alt="plus" isRotating={isRotating} />
        </NavBarPlus>
      </NavBarContainer>
      <CreateProject isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default NavigationBar;
