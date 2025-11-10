// 내가 작성한 프로젝트 모델
export interface CowrkrSpeciality {
  additionalProp1?: string;
  additionalProp2?: string;
  additionalProp3?: string;
}

export interface MyProjectBoard {
  boardId: number;
  boardType: 'PROJECT' | 'ROOKIE' | 'STUDY' | 'CONTEST';
  estmtPeriod: number;
  cowrkrPosition: string;
  processStatus: string | null;
  cowrkrSpeciality: Record<string, number>;
  endDate: string;
  title: string;
  description: string;
  imageUrl1: string | null;
  imageUrl2: string | null;
  imageUrl3: string | null;
  projectFields: string;
  distance: string;
  techTools: string;
  workTools: string;
  collabTools: string;
  collabMthds: string;
  isActive: boolean;
  requredPpl: number;
  viewCount: number;
  support: number;
  bookmark: number;
  writer: string;
  writerUniversity?: string; // 작성자 학교
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

export default MyProjectLibraryResponse;
