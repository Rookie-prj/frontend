export interface Board {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  imageUrl1: string | null;
  imageUrl2: string | null;
  imageUrl3: string | null;
}

export interface BoardUpdateRequest {
  title?: string;
  content?: string;
}

// API 스펙에 맞는 게시글 생성 요청 타입
export interface BoardWithImagesRequest {
  boardType: 'PROJECT' | 'STUDY' | 'CONTEST' | 'MENTORING';
  title: string;
  description: string;
  estmtPeriod: number;
  distance: string;
  techTools: string;
  collabMthds: string;
  isActive: boolean;
  requredPpl: number;
  cowrkrPosition?: string[];
  cowrkrSpeciality?: { [key: string]: any };
  endDate?: string;
  projectFields?: string[];
  workTools?: string[];
  collabTools?: string[];
  doneType?: string;
  processStatus?: string;
  images: File[];
}
export interface ImageUploadResponse {
  imageUrls: string[];
  base64Previews: string[];
  message: string;
}

export interface BoardsListResponse {
  boards: Board[];
  totalCount: number;
  page: number;
  size: number;
}
