export interface Bookmark {
  id: number;
  boardId: number;
  boardTitle: string;
}

export interface BookmarksResponse {
  bookmarks: Bookmark[];
}
