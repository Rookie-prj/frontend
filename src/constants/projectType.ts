import capstoneIcon from '../assets/icons/capstone.svg';
import contestIcon from '../assets/icons/contest.svg';
import teamProjectIcon from '../assets/icons/teamProject.svg';
import graduationIcon from '../assets/icons/graduation.svg';

export const PROJECT_TYPE = {
  TEAM_PROJECT: {
    value: 'PROJECT',
    label: '팀 프로젝트',
    tag: '#일반 프로젝트',
    icon: teamProjectIcon,
  },
  GRADUATION: {
    value: 'STUDY',
    label: '졸업작품',
    tag: '#졸업 #졸업전시',
    icon: graduationIcon,
  },
  CONTEST: {
    value: 'CONTEST',
    label: '공모전',
    tag: '#수상 #단기프로젝트',
    icon: contestIcon,
  },

  CAPSTONE: {
    value: 'MENTORING',
    label: '캡스톤 디자인',
    tag: '#산학연계 #실무프로젝트',
    icon: capstoneIcon,
  },
} as const;

export const PROJECT_CATEGORY = {
  CULTURE_EXHIBITION: {
    value: 'CULTURE_EXHIBITION',
    label: '문화·전시',
  },
  APP_WEB_SERVICE: {
    value: 'APP_WEB_SERVICE',
    label: '앱·웹·서비스',
  },
  PERFORMANCE_MOVIE_VIDEO: {
    value: 'PERFORMANCE_MOVIE_VIDEO',
    label: '공연·영화·영상',
  },
  MOBILITY: {
    value: 'MOBILITY',
    label: '모빌리티',
  },
  GAME_INTERACTION: {
    value: 'GAME_INTERACTION',
    label: '게임·인터랙션',
  },
  SOCIAL_ENVIRONMENT: {
    value: 'SOCIAL_ENVIRONMENT',
    label: '사회문제·환경',
  },
  FASHION: {
    value: 'FASHION',
    label: '패션',
  },
  EDUCATION: {
    value: 'EDUCATION',
    label: '교육',
  },
  BRANDING: {
    value: 'BRANDING',
    label: '브랜딩',
  },
  LIFESTYLE_SPACE: {
    value: 'LIFESTYLE_SPACE',
    label: '라이프스타일·공간',
  },
  CONTENT_CREATION: {
    value: 'CONTENT_CREATION',
    label: '콘텐츠 제작',
  },
} as const;

export type ProjectTypeValue = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE]['value'];
export type ProjectTypeLabel = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE]['label'];
export type ProjectTypeTag = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE]['tag'];
export type ProjectCategoryValue =
  (typeof PROJECT_CATEGORY)[keyof typeof PROJECT_CATEGORY]['value'];
export type ProjectCategoryLabel =
  (typeof PROJECT_CATEGORY)[keyof typeof PROJECT_CATEGORY]['label'];

export default PROJECT_TYPE;
