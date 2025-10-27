// 프로젝트 생성 관련 타입 정의
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  images?: string[];
  collaborators?: Collaborator[];
}

export interface Collaborator {
  position: string;
  positionDetail: string;
  numberOfPeople: string;
  requiredSkills: string[];
  tools: string[];
}

export interface ProjectCreateRequest {
  title: string;
  description: string;
  category: string;
  status: string;
  endDate: string;
  collaborators: Collaborator[];
  images?: File[];
}

export interface ProjectUpdateRequest {
  title?: string;
  description?: string;
  category?: string;
  status?: string;
  endDate?: string;
  collaborators?: Collaborator[];
}

export interface ProjectWithImagesRequest {
  title: string;
  description: string;
  category: string;
  status: string;
  endDate: string;
  collaborators: Collaborator[];
  images: File[];
}

export interface ProjectsListResponse {
  projects: Project[];
  totalCount: number;
  page: number;
  size: number;
}

// 스토어 데이터를 API 스펙으로 변환하기 위한 타입
export interface StoreProjectData {
  selectedProjectType: string | null;
  selectedPosition: string | null;
  selectedPeriod: number | null;
  selectedPositionDetail: string | null;
  selectedPositionNumberOfPeople: string | null;
  selectedProjectTitle: string | null;
  selectedProjectDescription: string | null;
  selectedProjectStatus: string | null;
  selectedEndDate: Date | null;
  selectedEndDateType: string | null;
  selectedDistance: string | null;
  selectedTools: string[];
  selectedMethod: string | null;
  skillText: string | null;
  selectedImages: File[];
  projectFields: string[];
}
