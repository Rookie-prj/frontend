import { HttpResponse, http } from 'msw';
import { BoardFilterResponse, FilteredBoard } from '../models/boards';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { BASE_URL } from '../api/httpclient';

const API_BASE_URL = BASE_URL || '';

// Mock 데이터: 필터링된 게시판 목록
const mockFilteredBoards: FilteredBoard[] = [
  {
    boardId: 1,
    boardType: 'PROJECT',
    estmtPeriod: 3,
    cowrkrPosition: '프론트엔드 개발자,UI/UX 디자이너',
    processStatus: '모집중',
    cowrkrSpeciality: {
      프론트엔드: '1',
      디자이너: '1',
    },
    endDate: '2025-11-15T00:00:00.000Z',
    title: '포트폴리오 웹사이트 제작 프로젝트',
    description: '개인 포트폴리오 웹사이트를 제작할 팀원을 모집합니다.',
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
    projectFields: '웹 개발,디자인',
    distance: '처음부터 시작',
    techTools: 'React, TypeScript, Styled-components',
    workTools: 'VS Code,Git',
    collabTools: 'Slack,Notion',
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
  {
    boardId: 2,
    boardType: 'PROJECT',
    estmtPeriod: 2,
    cowrkrPosition: 'UI/UX 디자이너',
    processStatus: '모집중',
    cowrkrSpeciality: {
      디자이너: '2',
    },
    endDate: '2025-10-30T00:00:00.000Z',
    title: '모바일 앱 UI/UX 디자인 협업',
    description: '모바일 앱 디자인을 함께 할 디자이너를 찾습니다.',
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
    projectFields: '디자인,UX/UI',
    distance: '반 정도 진행',
    techTools: 'Figma, Adobe XD',
    workTools: 'Figma,Adobe XD',
    collabTools: 'Figma,Discord',
    collabMthds: '온라인',
    isActive: true,
    requredPpl: 2,
    viewCount: 98,
    support: 15,
    bookmark: 23,
    writer: '박지영',
    doneType: '진행중',
    createdAt: '2025-10-18T14:20:00.000Z',
    modifiedAt: '2025-10-18T14:20:00.000Z',
  },
  {
    boardId: 3,
    boardType: 'PROJECT',
    estmtPeriod: 6,
    cowrkrPosition: '풀스택 개발자,백엔드 개발자',
    processStatus: '모집중',
    cowrkrSpeciality: {
      풀스택: '1',
      백엔드: '1',
    },
    endDate: '2025-12-31T00:00:00.000Z',
    title: '스타트업 MVP 개발 팀원 모집',
    description: '혁신적인 스타트업 아이디어를 실현할 개발자를 모집합니다.',
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
    projectFields: '웹 개발,창업',
    distance: '처음부터 시작',
    techTools: 'Node.js, React, MongoDB',
    workTools: 'VS Code,Docker',
    collabTools: 'Slack,Jira,GitHub',
    collabMthds: '오프라인',
    isActive: true,
    requredPpl: 4,
    viewCount: 245,
    support: 32,
    bookmark: 45,
    writer: '이민호',
    doneType: '진행중',
    createdAt: '2025-10-10T11:00:00.000Z',
    modifiedAt: '2025-10-10T11:00:00.000Z',
  },
  {
    boardId: 4,
    boardType: 'PROJECT',
    estmtPeriod: 4,
    cowrkrPosition: '백엔드 개발자,DB 설계자',
    processStatus: '모집중',
    cowrkrSpeciality: {
      백엔드: '1',
      DB설계자: '1',
    },
    endDate: '2025-11-30T00:00:00.000Z',
    title: '대학생 커뮤니티 플랫폼 제작',
    description: '대학생들을 위한 커뮤니티 플랫폼을 개발합니다.',
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
    projectFields: '웹 개발,백엔드',
    distance: '반 정도 진행',
    techTools: 'Spring Boot, MySQL, Redis',
    workTools: 'IntelliJ,MySQL Workbench',
    collabTools: 'Notion,Slack',
    collabMthds: '온라인',
    isActive: true,
    requredPpl: 2,
    viewCount: 167,
    support: 12,
    bookmark: 19,
    writer: '최수진',
    doneType: '진행중',
    createdAt: '2025-10-12T16:45:00.000Z',
    modifiedAt: '2025-10-12T16:45:00.000Z',
  },
  {
    boardId: 5,
    boardType: 'PROJECT',
    estmtPeriod: 2,
    cowrkrPosition: '그래픽 디자이너,일러스트레이터',
    processStatus: '모집중',
    cowrkrSpeciality: {
      그래픽디자이너: '1',
      일러스트레이터: '1',
    },
    endDate: '2025-11-10T00:00:00.000Z',
    title: '게임 캐릭터 디자인 프로젝트',
    description: '게임 캐릭터와 아트워크를 제작할 디자이너를 찾습니다.',
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
    projectFields: '디자인,게임',
    distance: '처음부터 시작',
    techTools: 'Illustrator, Photoshop, Procreate',
    workTools: 'Adobe Illustrator,Photoshop',
    collabTools: 'Google Drive,Discord',
    collabMthds: '온라인',
    isActive: true,
    requredPpl: 2,
    viewCount: 89,
    support: 6,
    bookmark: 14,
    writer: '정다은',
    doneType: '진행중',
    createdAt: '2025-10-16T10:15:00.000Z',
    modifiedAt: '2025-10-16T10:15:00.000Z',
  },
];

// 필터링 로직
const filterBoards = (
  boards: FilteredBoard[],
  boardTypes?: string[],
  projectFields?: string[],
): FilteredBoard[] => {
  let filtered = [...boards];

  // boardType 필터링
  if (boardTypes && boardTypes.length > 0) {
    filtered = filtered.filter((board) => boardTypes.includes(board.boardType));
  }

  // projectFields 필터링
  if (projectFields && projectFields.length > 0) {
    filtered = filtered.filter((board) => {
      const boardFields = board.projectFields.split(',').map((f) => f.trim());
      return projectFields.some((field) => boardFields.includes(field));
    });
  }

  return filtered;
};

export const filterBoardsHandler = http.post(
  `${API_BASE_URL}${API_ENDPOINT.BOARD_FILTER}`,
  async ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');
    const size = parseInt(url.searchParams.get('size') || '10');

    // Request body에서 필터 조건 가져오기
    let filterRequest: { boardTypes?: string[]; projectFields?: string[] } = {};
    try {
      const body = await request.json();
      filterRequest = body as { boardTypes?: string[]; projectFields?: string[] };
    } catch (error) {
      console.error('Failed to parse request body:', error);
    }

    // 필터링 적용
    const filteredBoards = filterBoards(
      mockFilteredBoards,
      filterRequest.boardTypes,
      filterRequest.projectFields,
    );

    // 페이지네이션
    const startIndex = page * size;
    const endIndex = startIndex + size;
    const paginatedBoards = filteredBoards.slice(startIndex, endIndex);
    const totalElements = filteredBoards.length;
    const totalPages = Math.ceil(totalElements / size);

    const response: BoardFilterResponse = {
      totalElements,
      totalPages,
      size,
      content: paginatedBoards,
      number: page,
      sort: {
        empty: true,
        unsorted: true,
        sorted: false,
      },
      numberOfElements: paginatedBoards.length,
      pageable: {
        offset: startIndex,
        sort: {
          empty: true,
          unsorted: true,
          sorted: false,
        },
        paged: true,
        pageNumber: page,
        pageSize: size,
        unpaged: false,
      },
      first: page === 0,
      last: page >= totalPages - 1,
      empty: paginatedBoards.length === 0,
    };

    return HttpResponse.json(response, { status: 200 });
  },
);
