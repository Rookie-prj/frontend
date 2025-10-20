export const mockPostData = [
  {
    id: 1,
    title: '기록 서비스 개발자분 구해요!',
    author: '춤추는 악어 · 천안, 상명대학교',
    progress: '처음부터 시작',
    deadline: '모집시 마감',
    tags: '#앱·웹·서비스 #사회문제·환경 #콘텐츠 제작',
    authorInfo: {
      name: '춤추는 악어',
      location: '천안, 상명대학교',
      verified: true,
      level: '열정기어',
      projects: 2,
      responseRate: 16,
    },
    recruitment: {
      total: 2,
      field: '개발자',
      duration: '4개월 예상',
    },
    status: {
      progress: '처음부터 시작',
      deadline: '모집완료',
    },
    preferences: {
      distance: '상관없음',
      tools: ['Discord', 'Notion', 'Figma'],
      method: '온라인',
    },
    positions: [
      { title: 'Front end 개발자', count: 1 },
      { title: 'Back end 개발자', count: 1 },
    ],
    description: `할 말을 잃은 순간을 기록하는 감정 기반 메모 서비스, 함께 만들 개발자 분을 찾습니다.

안녕하세요! 상명대학교 커뮤니케이션디자인을 전공 중인 대학생입니다.
현재 졸업전시 프로젝트로, '할 말을 잃은 순간'을 기록하는 감정 기반 메모 플랫폼을 기획하고 있으며 단순한 콘셉트 제안이 아닌, 실제 MVP 단계까지 구현하여 서비스형 전시로 완성하고자 합니다. 이 서비스는 사람들이 일상에서 겪는 말문이 막히는 순간들 — 누군가에게 상처받았을 때,  예상 못 한 말에 마음이 얼어붙었을 때, 혹은 말 대신 감정이 앞섰던 순간들을 짧은 기록 형태로 남기고 아카이빙하는 개인 기록 서비스입니다.

감정 태그, 상황 분류, 나만 볼 수 있는 공간 등 가볍지만 깊이 있는 구조를 갖춘 웹 기반 MVP를 목표로 하고 있으며, 이에 함께할 프론트엔드 개발자 1명을 모집합니다.

현재 주요 사용자 흐름과 서비스 구조에 대한 큰 방향은 정리된 상태이며, 디자인은 본격적으로 시작하기 전 단계입니다. 아이디어 스케치와 사용자 시나리오, 기획 문서는 노션 기반으로 정리되어 있어 협업 시 공유 가능합니다.`,
    stats: {
      bookmarks: 2,
      views: 245,
    },
  },
  {
    id: 2,
    title: 'AI 기반 학습 플랫폼 개발',
    author: '개발자 · 서울대학교',
    progress: '진행중',
    deadline: '모집중',
    tags: '#AI·머신러닝 #교육 #웹개발',
    authorInfo: {
      name: '개발자',
      location: '서울대학교',
      verified: true,
      level: '고수',
      projects: 5,
      responseRate: 85,
    },
    recruitment: {
      total: 4,
      current: 2,
      field: '개발자',
      duration: '6개월 예상',
    },
    status: {
      progress: '진행중',
      deadline: '모집중',
    },
    preferences: {
      distance: '가까운',
      tools: ['Slack', 'GitHub', 'Figma'],
      method: '오프라인',
    },
    positions: [
      { title: 'AI 개발자', count: 1 },
      { title: 'Frontend 개발자', count: 1 },
    ],
    description: `AI를 활용한 개인 맞춤형 학습 플랫폼을 개발하고 있습니다. 학생들의 학습 패턴을 분석하여 최적의 학습 경로를 제안하는 서비스입니다.`,
    stats: {
      bookmarks: 15,
      views: 320,
    },
  },
  {
    id: 3,
    title: '지속가능한 패션 브랜드 웹사이트',
    author: '디자이너 · 홍익대학교',
    progress: '완성도 80%',
    deadline: '모집완료',
    tags: '#패션 #지속가능성 #브랜딩',
    authorInfo: {
      name: '디자이너',
      location: '홍익대학교',
      verified: true,
      level: '중급',
      projects: 3,
      responseRate: 45,
    },
    recruitment: {
      total: 2,
      current: 2,
      field: '디자이너',
      duration: '3개월 예상',
    },
    status: {
      progress: '완성도 80%',
      deadline: '모집완료',
    },
    preferences: {
      distance: '상관없음',
      tools: ['Figma', 'Adobe Creative Suite', 'Notion'],
      method: '온라인',
    },
    positions: [
      { title: 'UI/UX 디자이너', count: 1 },
      { title: '브랜드 디자이너', count: 1 },
    ],
    description: `친환경 소재를 사용한 패션 브랜드의 웹사이트와 브랜딩을 담당합니다. 지속가능성을 강조하는 디자인 컨셉으로 진행됩니다.`,
    stats: {
      bookmarks: 8,
      views: 156,
    },
  },
  {
    id: 4,
    title: '블록체인 기반 투표 시스템',
    author: '개발자 · 연세대학교',
    progress: '아이디어 단계',
    deadline: '모집시 마감',
    tags: '#블록체인 #투표 #보안',
    authorInfo: {
      name: '개발자',
      location: '연세대학교',
      verified: true,
      level: '고수',
      projects: 7,
      responseRate: 92,
    },
    recruitment: {
      total: 3,
      current: 1,
      field: '개발자',
      duration: '8개월 예상',
    },
    status: {
      progress: '아이디어 단계',
      deadline: '모집시 마감',
    },
    preferences: {
      distance: '상관없음',
      tools: ['Discord', 'GitHub', 'Slack'],
      method: '온라인',
    },
    positions: [
      { title: 'Blockchain 개발자', count: 1 },
      { title: 'Backend 개발자', count: 1 },
      { title: 'Security 전문가', count: 1 },
    ],
    description: `투명하고 안전한 온라인 투표 시스템을 블록체인 기술로 구현합니다. 정부기관이나 기업의 중요한 의사결정에 활용할 수 있는 시스템입니다.`,
    stats: {
      bookmarks: 23,
      views: 445,
    },
  },
];
