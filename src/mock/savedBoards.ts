import { API_ENDPOINT } from '../constants/apiEndpoint';
import { http, HttpResponse } from 'msw';
import { BASE_URL } from '../api/httpclient';

const mockBookmarks = [
  {
    bookmarkId: 1,
    userId: 1,
    board: {
      boardId: 1,
      boardType: 'PROJECT',
      estmtPeriod: 3,
      cowrkrPosition: '프론트엔드 개발자, UI/UX 디자이너',
      cowrkrSpeciality: {},
      endDate: '2025-11-15T00:00:00.000Z',
      title: '포트폴리오 웹사이트 제작 프로젝트',
      description: '개인 포트폴리오 웹사이트를 제작할 팀원을 모집합니다.',
      imageUrl1: '',
      imageUrl2: '',
      imageUrl3: '',
      projectFields: '웹 개발, 디자인',
      distance: '처음부터 시작',
      techTools: 'React, TypeScript, Styled-components',
      workTools: 'VS Code, Git',
      collabTools: 'Slack, Notion',
      collabMthds: '온라인',
      isActive: true,
      requredPpl: 3,
      viewCount: 127,
      support: 8,
      bookmark: 12,
      writer: '김철수',
      doneType: '진행중',
      createdAt: '2025-10-15T09:30:00.000Z',
      modifiedAt: '2025-10-15T09:30:00.000Z',
    },
    isActive: true,
    createdAt: '2025-10-26T16:54:13.667Z',
  },
  {
    bookmarkId: 2,
    userId: 1,
    board: {
      boardId: 2,
      boardType: 'PROJECT',
      estmtPeriod: 2,
      cowrkrPosition: '백엔드 개발자',
      cowrkrSpeciality: {},
      endDate: '2025-11-20T00:00:00.000Z',
      title: '모바일 앱 개발 프로젝트',
      description: '플러터를 사용한 크로스 플랫폼 앱 개발',
      imageUrl1: '',
      imageUrl2: '',
      imageUrl3: '',
      projectFields: '모바일 개발',
      distance: '주 2회 오프라인',
      techTools: 'Flutter, Dart',
      workTools: 'Android Studio',
      collabTools: 'GitHub, Discord',
      collabMthds: '하이브리드',
      isActive: true,
      requredPpl: 2,
      viewCount: 89,
      support: 5,
      bookmark: 8,
      writer: '이영희',
      doneType: '진행중',
      createdAt: '2025-10-20T14:20:00.000Z',
      modifiedAt: '2025-10-20T14:20:00.000Z',
    },
    isActive: true,
    createdAt: '2025-10-26T16:54:13.667Z',
  },
];

export const savedBoards = http.get(`${BASE_URL}${API_ENDPOINT.LIBRARY_SAVED}`, () => {
  return HttpResponse.json(
    {
      bookmarks: mockBookmarks,
    },
    { status: 200 },
  );
});
