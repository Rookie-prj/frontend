// 보관함 모델
export interface BookmarkBoard {
  boardId: number;
  boardType: 'PROJECT' | 'ROOKIE';
  estmtPeriod: number;
  cowrkrPosition: string | string[];
  cowrkrSpeciality: Record<string, string>;
  endDate: string;
  title: string;
  description: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  projectFields: string | string[];
  distance: string;
  techTools: string;
  workTools: string | string[];
  collabTools: string | string[];
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

export interface BookmarkItem {
  bookmarkId: number;
  userId: number;
  board: BookmarkBoard;
  isActive: boolean;
  createdAt: string;
}

export interface SavedLibraryResponse {
  bookmarks: BookmarkItem[];
}

export default SavedLibraryResponse;
