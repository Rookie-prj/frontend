export const FILTER_TABS = [
  { value: 'all', label: '전체' },
  { value: 'capstone', label: '캡스톤디자인' },
  { value: 'contest', label: '공모전' },
  { value: 'graduation', label: '졸업작품' },
  { value: 'team_project', label: '팀 프로젝트' },
] as const;

export const ROLE_TABS = [
  { value: 'all', label: '전체' },
  { value: 'planning', label: '기획 · 마케팅 전공' },
  { value: 'design', label: '디자인' },
  { value: 'development', label: '개발' },
  { value: 'etc', label: '기타' },
] as const;

export type FilterTabValue = (typeof FILTER_TABS)[number]['value'];
export type RoleTabValue = (typeof ROLE_TABS)[number]['value'];
