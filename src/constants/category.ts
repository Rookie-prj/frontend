export const CATEGORY = {
  HOME: { value: 'home', label: '홈' },
  HOT: { value: 'hot', label: 'HOT' },
  ROOKIE: { value: 'rookie', label: '루키' },
  PROJECT: { value: 'project', label: '프로젝트' },
  SAVED: { value: 'saved', label: '보관함' },
  MY_PROJECT: { value: 'my_project', label: '작성한 프로젝트' },
  POST_CONTENT: { value: 'content', label: '프로젝트 소개' },
  POST_DETAIL: { value: 'detail', label: '상세정보' },
} as const;

export const CATEGORY_GROUPS = {
  HOME: [CATEGORY.HOME, CATEGORY.HOT],
  SEARCH: [CATEGORY.PROJECT, CATEGORY.ROOKIE],
  PROFILE: [CATEGORY.SAVED, CATEGORY.MY_PROJECT],
  POST: [CATEGORY.POST_CONTENT, CATEGORY.POST_DETAIL],
} as const;

export type ExploreCategoryValue = (typeof CATEGORY_GROUPS.SEARCH)[number]['value'];
export type CategoryValue = (typeof CATEGORY)[keyof typeof CATEGORY]['value'];
export type CategoryGroup = keyof typeof CATEGORY_GROUPS;
export type PostCategoryValue = (typeof CATEGORY_GROUPS.POST)[number]['value'];
export default CATEGORY;
