export const FILTER_TABS = [
  { value: 'all', label: '전체' },
  { value: 'MENTORING', label: '캡스톤디자인' },
  { value: 'CONTEST', label: '공모전' },
  { value: 'STUDY', label: '졸업작품' },
  { value: 'PROJECT', label: '팀 프로젝트' },
] as const;

export const INTEREST_FIELDS = [
  { value: 'culture_exhibition', label: '문화 · 전시' },
  { value: 'app_web_service', label: '앱 · 웹·서비스' },
  { value: 'performance_movie', label: '공연 · 영화 · 영상' },
  { value: 'mobility', label: '모빌리티' },
  { value: 'game_interaction', label: '게임 · 인터랙션' },
  { value: 'social_environment', label: '사회문제 · 환경' },
  { value: 'fashion', label: '패션' },
  { value: 'education', label: '교육' },
  { value: 'branding', label: '브랜딩' },
  { value: 'lifestyle_space', label: '라이프스타일 · 공간' },
  { value: 'content_creation', label: '콘텐츠 제작' },
] as const;

export const PARTICIPATION_TYPES = [
  { value: 'planning_operation', label: '기획/운영' },
  { value: 'design', label: '디자인' },
  { value: 'development', label: '개발/기술' },
  { value: 'content', label: '콘텐츠 제작' },
  { value: 'performance', label: '출연/퍼포머' },
  { value: 'research', label: '리서치/분석' },
  { value: 'video', label: '영상·촬영' },
  { value: 'sound_music', label: '음향·음악' },
] as const;

export const ROLE_TABS = [
  { value: 'all', label: '전체' },
  { value: 'planning', label: '기획 · 마케팅 전공' },
  { value: 'design', label: '디자인 전공' },
  { value: 'development', label: '개발 전공' },
  { value: 'etc', label: '기타' },
] as const;

export const LIBRARY_TABS = [
  { value: 'all', label: '전체' },
  { value: 'recruiting', label: '모집중' },
  { value: 'completed', label: '모집완료' },
] as const;

export const CHAT_TABS = [
  { value: 'all', label: '전체' },
  { value: 'recruiting', label: '📌 모집 중' },
  { value: 'suggesting', label: '🙋 참여 제안 중' },
] as const;

export type LibraryTabValue = (typeof LIBRARY_TABS)[number]['value'];
export type FilterTabValue = (typeof FILTER_TABS)[number]['value'];
export type RoleTabValue = (typeof ROLE_TABS)[number]['value'];
export type ChatTabValue = (typeof CHAT_TABS)[number]['value'];
