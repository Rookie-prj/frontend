export interface Project {
  boardId: number;
  boardType: string; // "PROJECT"
  estmtPeriod: number; // 예상 기간
  cowrkrPosition: string[]; // 협업자 포지션 (배열)
  cowrkrSpeciality?: Record<string, string>; // 협업자 전문 분야
  data: Record<string, string>; // 추가 데이터
  endDate: string; // 종료일
  title: string;
  description: string; // 설명
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  projectFields: string[]; // 프로젝트 분야
  distance: string; // 진행 정도
  techTools: string; // 기술 도구
  workTools: string[]; // 작업 도구
  collabTools: string[]; // 협업 도구
  collabMthds: string; // 협업 방법
  isActive: boolean; // 활성화 상태
  requredPpl: number; // 필요 인원
  viewCount: number;
  support: number; // 지원자 수
  bookmark: number;
  writer: string;
  writerUniversity?: string; // 작성자 학교
  doneType: string; // 완료 타입
  createdAt: string;
  modifiedAt: string;
}

export interface ProjectResponse {
  boards: Project[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export type ProjectList = Project[];
