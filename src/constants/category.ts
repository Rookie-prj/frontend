// 개별 카테고리 정의
export const CATEGORY = {
  HOME: { value: 'home', label: '홈' },
  HOT: { value: 'hot', label: 'HOT' },
  ROOKIE: { value: 'rookie', label: '루키' },
  PROJECT: { value: 'project', label: '프로젝트' },
  SAVED: { value: 'saved', label: '보관함' },
  MY_PROJECT: { value: 'my_project', label: '작성한 프로젝트' },
} as const;

// 화면별 카테고리 그룹
export const CATEGORY_GROUPS = {
  HOME: [CATEGORY.HOME, CATEGORY.HOT], // 홈, HOT
  SEARCH: [CATEGORY.PROJECT, CATEGORY.ROOKIE], // 루키, 프로젝트
  PROFILE: [CATEGORY.SAVED, CATEGORY.MY_PROJECT], // 보관함, 작성한 프로젝트
} as const;

// 타입 정의
export type CategoryValue = (typeof CATEGORY)[keyof typeof CATEGORY]['value'];
export type CategoryGroup = keyof typeof CATEGORY_GROUPS;

export default CATEGORY;
