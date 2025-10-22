export interface Project {
  boardId: number;
  title: string;
  boardType: string;
  cowrkrPosition: string;
  cowrkrSpeciality: string;
  distance: string;
  deadline: string | null;
  writer: string;
  viewCount: number;
  support: number;
  bookmark: number;
  createdAt: string;
}

export interface ProjectResponse {
  boards: Project[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export type ProjectList = Project[];
