import homeActiveIcon from '../assets/icons/navigationBar/active-home.svg';
import homeInactiveIcon from '../assets/icons/navigationBar/inactive-home.svg';
import searchActiveIcon from '../assets/icons/navigationBar/active-search.svg';
import searchInactiveIcon from '../assets/icons/navigationBar/inactive-search.svg';
import chatActiveIcon from '../assets/icons/navigationBar/active-chat.svg';
import chatInactiveIcon from '../assets/icons/navigationBar/inactive-chat.svg';
import libraryActiveIcon from '../assets/icons/navigationBar/active-library.svg';
import libraryInactiveIcon from '../assets/icons/navigationBar/inactive-library.svg';
import plusIcon from '../assets/icons/navigationBar/plus.svg';

export const NAVIGATION = {
  HOME: {
    value: 'home',
    label: '홈',
    activeIcon: homeActiveIcon,
    inactiveIcon: homeInactiveIcon,
  },
  SEARCH: {
    value: 'search',
    label: '검색',
    activeIcon: searchActiveIcon,
    inactiveIcon: searchInactiveIcon,
  },
  CHAT: {
    value: 'chat',
    label: '채팅',
    activeIcon: chatActiveIcon,
    inactiveIcon: chatInactiveIcon,
  },
  LIBRARY: {
    value: 'library',
    label: '라이브러리',
    activeIcon: libraryActiveIcon,
    inactiveIcon: libraryInactiveIcon,
  },
} as const;
export const NAVIGATION_PLUS = {
  PLUS: {
    value: 'plus',
    inactiveIcon: plusIcon,
  },
} as const;
export const NAVIGATION_GROUPS = {
  LEFT: [NAVIGATION.HOME, NAVIGATION.SEARCH],
  RIGHT: [NAVIGATION.CHAT, NAVIGATION.LIBRARY],
} as const;

export type NavigationValue = (typeof NAVIGATION)[keyof typeof NAVIGATION]['value'];
// export type NavigationLabel = (typeof NAVIGATION)[keyof typeof NAVIGATION]['label'];
// export type NavigationActiveIcon = (typeof NAVIGATION)[keyof typeof NAVIGATION]['activeIcon'];
export type NavigationInactiveIcon = (typeof NAVIGATION)[keyof typeof NAVIGATION]['inactiveIcon'];
