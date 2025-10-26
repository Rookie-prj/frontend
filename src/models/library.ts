// 보관함 모델
export interface SavedBoardData {
  additionalProp1?: string;
  additionalProp2?: string;
  additionalProp3?: string;
}

export interface SavedBoard {
  boardId: number;
  boardType: 'PROJECT' | 'ROOKIE';
  estmtPeriod: number;
  cowrkrPosition: string[];
  data: SavedBoardData;
  endDate: string;
  title: string;
  description: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  projectFields: string[];
  distance: string;
  techTools: string;
  workTools: string[];
  collabTools: string[];
  collabMthds: string;
  isActive: boolean;
  requredPpl: number;
  viewCount: number;
  support: number;
  bookmark: number;
  writer: string;
  doneType: string;
  createdAt: string;
  modifiedAt: string;
}

export interface SavedLibraryResponse {
  boards: SavedBoard[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

// 내가 작성한 프로젝트 모델
export interface MyProjectBoardData {
  additionalProp1?: string;
  additionalProp2?: string;
  additionalProp3?: string;
}

export interface MyProjectBoard {
  boardId: number;
  boardType: 'PROJECT' | 'ROOKIE';
  estmtPeriod: number;
  cowrkrPosition: string[];
  data: MyProjectBoardData;
  endDate: string;
  title: string;
  description: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  projectFields: string[];
  distance: string;
  techTools: string;
  workTools: string[];
  collabTools: string[];
  collabMthds: string;
  isActive: boolean;
  requredPpl: number;
  viewCount: number;
  support: number;
  bookmark: number;
  writer: string;
  doneType: string;
  createdAt: string;
  modifiedAt: string;
}

export interface MyProjectLibraryResponse {
  boards: MyProjectBoard[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

// 통합 라이브러리 타입
export type LibraryType = 'saved' | 'my_project';

export interface LibraryResponse {
  boards: (SavedBoard | MyProjectBoard)[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export default LibraryResponse;
