export const CATEGORY = {
  HOME: { value: 'home', label: '홈' },
  HOT: { value: 'hot', label: 'HOT' },
  ROOKIE: { value: 'rookie', label: '루키' },
  PROJECT: { value: 'project', label: '프로젝트' },
  SAVED: { value: 'saved', label: '보관함' },
  MY_PROJECT: { value: 'my_project', label: '작성한 프로젝트' },
} as const;

export const CATEGORY_GROUPS = {
  HOME: [CATEGORY.HOME, CATEGORY.HOT],
  SEARCH: [CATEGORY.PROJECT, CATEGORY.ROOKIE],
  PROFILE: [CATEGORY.SAVED, CATEGORY.MY_PROJECT],
} as const;
export const EXPLORE_CATEGORIES = {
  PROJECT: { value: 'project', label: '프로젝트' },
  ROOKIE: { value: 'rookie', label: '루키' },
} as const;

export type CategoryValue = (typeof CATEGORY)[keyof typeof CATEGORY]['value'];
export type CategoryGroup = keyof typeof CATEGORY_GROUPS;
export type ExploreCategoryValue =
  (typeof EXPLORE_CATEGORIES)[keyof typeof EXPLORE_CATEGORIES]['value'];
export default CATEGORY;
