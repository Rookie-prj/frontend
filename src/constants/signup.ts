import Globe from '../assets/icons/globe.svg';
import Lock from '../assets/icons/lock.svg';
import pmIcon from '../assets/icons/pm.svg';
import developerIcon from '../assets/icons/developer.svg';
import designerIcon from '../assets/icons/designer.svg';
import etcIcon from '../assets/icons/etc.svg';

export const SIGNUP = {
  REQUIRED_EMAIL_AND_PASSWORD: '이메일과 비밀번호를\n 입력해주세요',
  REQUIRED_UNIVERSITY: '안녕하세요!\n소속 학교를 입력해주세요',
  REQUIRED_UNIVERSITY_PUBLIC: '다른 사람에게\n내 대학교를',
  REQUIRED_UNIVERSITY_MAJOR: '학과 이름을\n 작성해주세요',
  REQUIRED_UNIVERSITY_GRADE: '학년을 입력해주세요',
  REQUIRED_CURRENT_STUDY: 'REQUIRED_CURRENT_STUDY',
  REQUIRED_CURRENT_STUDY_DETAIL: '해당되는 세부 분야를\n 선택해주세요',
  CURRENT_STUDY_DETAIL_SUBTEXT: '가장 먼저 선택한 분야가 프로필에 우선 표시돼요.',
  CURRENT_STUDY_DETAIL_DUPLICATION_SELECT: '중복선택 가능',
  REQUIRED_TOOLSET: '사용 가능한 툴을\n 체크해주세요',
  REQUIRED_TOOLSET_DETAIL: '최대 3개 선택 가능',
  REQUIRED_FAVORITE_SUBJECT: '관심 주제를\n 체크해주세요',
  FAVORITE_SUBJECT_SELECTION_LIMIT: '중복선택 가능(최대 5개 선택 가능)',
  REQUIRED_PROJECT_COUNT: '현재까지 진행한\n 프로젝트 개수를 선택해주세요',
  REQUIRED_PROJECT_COUNT_MODAL: '프로젝트 개수를 선택해주세요',
  WELCOME: '루키에 오신걸 환영합니다!',
};
export const UNIVERSITY_PUBLIC_OPTIONS = [
  {
    value: 'public',
    label: '보여주고 싶지 않아요',
    icon: Globe,
  },
  {
    value: 'private',
    label: '상관 없어요',
    icon: Lock,
  },
];
export const UNIVERSITY_GRADE_OPTIONS = [
  {
    value: '1',
    label: '1학년',
  },
  {
    value: '2',
    label: '2학년',
  },
  {
    value: '3',
    label: '3학년',
  },
];
export const CURRENT_STUDY_OPTIONS = [
  {
    value: 'pm',
    label: '기획 · 마케팅',
    icon: pmIcon,
    options: [
      {
        value: 'contentCreation',
        label: '콘텐츠 제작/홍보',
      },
      {
        value: 'servicePlanning',
        label: '서비스 기획/운영',
      },
      {
        value: 'marketing',
        label: '마케팅',
      },
      {
        value: 'exhibition',
        label: '전시 및 연극',
      },
    ],
  },
  {
    value: 'developer',
    label: '개발',
    icon: developerIcon,
    options: [
      {
        value: 'frontend',
        label: '프론트엔드',
      },
      {
        value: 'backend',
        label: '백엔드',
      },
      {
        value: 'fullstack',
        label: '풀스택 개발자',
      },
      {
        value: 'dataEngineer',
        label: '데이터 엔지니어',
      },
    ],
  },
  {
    value: 'designer',
    label: '디자인',
    icon: designerIcon,
    options: [
      {
        value: 'graphicDesign',
        label: '그래픽 디자인',
      },
      {
        value: 'uiUx',
        label: 'UI/UX',
      },
      {
        value: 'productDesign',
        label: '제품 디자인',
      },
      {
        value: 'interiorDesign',
        label: '인테리어/실내 디자인',
      },
      {
        value: 'webDesign',
        label: '웹 디자인',
      },
      {
        value: '3dDesign',
        label: '3D 디자인',
      },
      {
        value: 'contentDesign',
        label: '콘텐츠 디자인',
      },
      {
        value: 'videoMotionDesign',
        label: '영상(모션) 디자인',
      },
      {
        value: 'vrAr',
        label: 'VR/AR',
      },
      {
        value: 'gameDesign',
        label: '게임 디자인',
      },
    ],
  },
  {
    value: 'etc',
    label: '그 외 전공이에요',
    icon: etcIcon,
    options: [
      {
        value: 'videoFilming',
        label: '영상 촬영',
      },
      {
        value: 'photoFilming',
        label: '사진 촬영',
      },
      {
        value: 'writingScenario',
        label: '글쓰기/시나리오',
      },
      {
        value: 'soundProduction',
        label: '음향 제작',
      },
      {
        value: 'craftFashionDesign',
        label: '공예/패션디자인',
      },
      {
        value: 'appearancePerformer',
        label: '출연/퍼포머',
      },
      {
        value: 'dataResearchAnalysis',
        label: '데이터 리서치/분석',
      },
      {
        value: 'illustrationDrawing',
        label: '일러스트/드로잉',
      },
    ],
  },
];

export const CURRENT_STUDY_DETAIL_OPTIONS = [
  {
    value: 'contentCreation',
    label: '콘텐츠 제작/홍보',
  },
  {
    value: 'servicePlanning',
    label: '서비스 기획/운영',
  },
  {
    value: 'marketing',
    label: '마케팅',
  },
  {
    value: 'exhibition',
    label: '전시 및 연극',
  },
];
export const TOOLSET_OPTION_CATEGORY = {
  DESIGN: '디자인/편집/3D',
  DEVELOPMENT: '개발',
  ETC: '기타',
};

export const TOOLSET_OPTIONS = [
  {
    category: '디자인/편집/3D',
    toolsGroup1: [
      { value: 'photoshop', label: 'Photoshop' },
      { value: 'illustrator', label: 'Illustrator' },
      { value: 'afterEffects', label: 'After Effects' },
      { value: 'indesign', label: 'InDesign' },
      { value: 'premierePro', label: 'Premiere Pro' },
      { value: 'lightroom', label: 'Lightroom' },
    ],
    toolsGroup2: [
      { value: 'figma', label: 'Figma' },
      { value: 'framer', label: 'Framer' },
    ],
    toolsGroup3: [
      { value: 'rhino', label: 'Rhino' },
      { value: 'sketchup', label: 'SketchUp' },
      { value: 'unity', label: 'Unity' },
      { value: 'blender', label: 'Blender' },
      { value: 'cinema4d', label: 'Cinema 4D' },
      { value: 'unrealEngine', label: 'Unreal Engine' },
    ],
  },

  // 개발 카테고리
  {
    category: '개발',
    value: 'htmlCss',
    label: 'HTML/CSS',
  },
  {
    category: '개발',
    value: 'javascript',
    label: 'JavaScript',
  },
  {
    category: '개발',
    value: 'typescript',
    label: 'TypeScript',
  },
  // 기타 카테고리
  {
    category: '기타',
    value: 'googleAnalytics',
    label: 'Google Analytics',
  },
  {
    category: '기타',
    value: 'davinciResolve',
    label: 'DaVinci Resolve',
  },
  {
    category: '기타',
    value: 'clo3d',
    label: 'CLO 3D',
  },
  {
    category: '기타',
    value: 'browzwear',
    label: 'Browzwear',
  },
  {
    category: '기타',
    value: 'proTools',
    label: 'Pro Tools',
  },
  {
    category: '기타',
    value: 'logicProX',
    label: 'Logic Pro X',
  },
];

export const INTEREST_OPTIONS = [
  {
    value: 'socialProblemSolving',
    label: '사회 문제 해결',
  },
  {
    value: 'it',
    label: 'IT',
  },
  {
    value: 'environmentSustainability',
    label: '환경·지속가능성',
  },
  {
    value: 'cultureExhibitionArt',
    label: '문화·전시아트',
  },
  {
    value: 'healthcareWellness',
    label: '헬스케어·웰니스',
  },
  {
    value: 'commerce',
    label: '커머스',
  },
  {
    value: 'educationEdutech',
    label: '교육·에듀테크',
  },
  {
    value: 'appWebService',
    label: '앱·웹 서비스',
  },
  {
    value: 'mobility',
    label: '모빌리티',
  },
  {
    value: 'mediaContentCreation',
    label: '미디어·콘텐츠 제작',
  },
  {
    value: 'gameInteraction',
    label: '게임·인터랙션',
  },
  {
    value: 'communitySns',
    label: '커뮤니티·SNS',
  },
  {
    value: 'fashionLifestyle',
    label: '패션·라이프스타일',
  },
];
export const FAVORITE_SUBJECT = [
  {
    value: 'socialProblemSolving',
    label: '사회 문제 해결',
  },
  {
    value: 'it',
    label: 'IT',
  },
  {
    value: 'environmentSustainability',
    label: '환경·지속가능성',
  },
  {
    value: 'cultureExhibitionArt',
    label: '문화·전시아트',
  },
  {
    value: 'healthcareWellness',
    label: '헬스케어·웰니스',
  },
  {
    value: 'commerce',
    label: '커머스',
  },
  {
    value: 'educationEdutech',
    label: '교육·에듀테크',
  },
  {
    value: 'appWebService',
    label: '앱·웹 서비스',
  },
  {
    value: 'mobility',
    label: '모빌리티',
  },
  {
    value: 'mediaContentCreation',
    label: '미디어·콘텐츠 제작',
  },
  {
    value: 'gameInteraction',
    label: '게임·인터랙션',
  },
  {
    value: 'communitySns',
    label: '커뮤니티·SNS',
  },
  {
    value: 'fashionLifestyle',
    label: '패션·라이프스타일',
  },
];
export const PROJECT_COUNT_OPTIONS = [
  {
    value: '0',
    label: '없음',
  },
  {
    value: '1',
    label: '1개',
  },
  {
    value: '2',
    label: '2개',
  },
];
