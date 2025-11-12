import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import {
  Board,
  BoardUpdateRequest,
  BoardWithImagesRequest,
  ImageUploadResponse,
  BoardsListResponse,
  BoardFilterRequest,
  BoardFilterResponse,
  PageableRequest,
} from '../models/boards';

/**
 * 게시판 목록 조회
 * GET /api/boards
 */
export const getBoards = async (page = 0, size = 10): Promise<BoardsListResponse> => {
  try {
    console.log('🚀 게시판 목록 조회 시작:', { page, size });
    const response = await apiClient.get<BoardsListResponse>(API_ENDPOINT.BOARDS, {
      params: { page, size },
    });
    console.log('✅ 게시판 목록 조회 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 게시판 목록 조회 실패:', error);
    throw error;
  }
};

/**
 * 게시판 상세 조회
 * GET /api/boards/{id}
 */
export const getBoardDetail = async (id: number): Promise<Board> => {
  try {
    console.log('🚀 게시판 상세 조회 시작:', { id });
    const response = await apiClient.get<Board>(`${API_ENDPOINT.BOARD_DETAIL}/${id}`);
    console.log('✅ 게시판 상세 조회 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 게시판 상세 조회 실패:', error);
    throw error;
  }
};

/**
 * 게시판 삭제
 * DELETE /api/boards/{id}
 */
export const deleteBoard = async (id: number): Promise<void> => {
  try {
    console.log('🚀 게시판 삭제 시작:', { id });
    await apiClient.delete(`${API_ENDPOINT.BOARD_DETAIL}/${id}`);
    console.log('✅ 게시판 삭제 성공');
  } catch (error) {
    console.error('❌ 게시판 삭제 실패:', error);
    throw error;
  }
};

/**
 * 이미지와 함께 게시판 생성 (API 스펙에 맞게 업데이트)
 * POST /api/boards/with-images
 */
export const createBoardWithImages = async (boardData: BoardWithImagesRequest): Promise<Board> => {
  try {
    console.log('🚀 이미지와 함께 게시판 생성 시작:', {
      boardData,
    });

    const formData = new FormData();
    boardData.images.slice(0, 3).forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    // 각 필드를 FormData에 추가
    formData.append('boardType', boardData.boardType);
    formData.append('title', boardData.title);
    formData.append('description', boardData.description);
    formData.append('estmtPeriod', String(boardData.estmtPeriod));
    formData.append('distance', boardData.distance);
    formData.append('techTools', boardData.techTools);
    formData.append('collabMthds', boardData.collabMthds);
    formData.append('isActive', String(boardData.isActive));
    formData.append('requredPpl', String(boardData.requredPpl));
    formData.append('cowrkrPosition', boardData.cowrkrPosition?.join(',') || '');
    formData.append('cowrkrSpeciality', JSON.stringify(boardData.cowrkrSpeciality));
    formData.append('endDate', boardData.endDate || '');
    formData.append('projectFields', boardData.projectFields?.join(',') || '');
    formData.append('workTools', boardData.workTools?.join(',') || '');
    formData.append('collabTools', boardData.collabTools?.join(',') || '');
    formData.append('doneType', boardData.doneType || '');

    if (boardData.processStatus) {
      formData.append('processStatus', boardData.processStatus);
    }

    console.log('📝 FormData entries:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    const response = await apiClient.post<Board>(API_ENDPOINT.BOARD_WITH_IMAGES, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('✅ 이미지와 함께 게시판 생성 성공:', response);
    console.log('📸 응답의 이미지 URLs:', {
      imageUrl1: response.imageUrl1,
      imageUrl2: response.imageUrl2,
      imageUrl3: response.imageUrl3,
    });
    return response;
  } catch (error) {
    console.error('❌ 이미지와 함께 게시판 생성 실패:', error);
    throw error;
  }
};

/**
 * 이미지와 함께 게시판 수정
 * PUT /api/boards/{id}/with-images
 */
export const updateBoardWithImages = async (
  id: number,
  boardData: BoardWithImagesRequest,
): Promise<Board> => {
  try {
    console.log('🚀 이미지와 함께 게시판 수정 시작:', {
      boardData,
    });

    const formData = new FormData();
    boardData.images.slice(0, 3).forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    // 각 필드를 FormData에 추가
    // id는 path parameter이므로 URL 경로에 포함됨 (FormData에 추가하지 않음)
    formData.append('boardType', boardData.boardType);
    formData.append('title', boardData.title);
    formData.append('description', boardData.description);
    formData.append('estmtPeriod', String(boardData.estmtPeriod));
    formData.append('distance', boardData.distance);
    formData.append('techTools', boardData.techTools);
    formData.append('collabMthds', boardData.collabMthds);
    formData.append('isActive', String(boardData.isActive));
    formData.append('requredPpl', String(boardData.requredPpl));
    formData.append('cowrkrPosition', boardData.cowrkrPosition?.join(',') || '');
    formData.append('cowrkrSpeciality', JSON.stringify(boardData.cowrkrSpeciality));
    formData.append('endDate', boardData.endDate || '');
    formData.append('projectFields', boardData.projectFields?.join(',') || '');
    formData.append('workTools', boardData.workTools?.join(',') || '');
    formData.append('collabTools', boardData.collabTools?.join(',') || '');
    formData.append('doneType', boardData.doneType || '');
    formData.append('deleteExisting', String(boardData.deleteExisting ?? true));

    if (boardData.processStatus) {
      formData.append('processStatus', boardData.processStatus);
    }

    console.log('📝 FormData entries:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    const response = await apiClient.put<Board>(
      `${API_ENDPOINT.BOARDS}/${id}/with-images`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    console.log('✅ 이미지와 함께 게시판 수정 성공:', response);
    console.log('📸 응답의 이미지 URLs:', {
      imageUrl1: response.imageUrl1,
      imageUrl2: response.imageUrl2,
      imageUrl3: response.imageUrl3,
    });
    return response;
  } catch (error) {
    console.error('❌ 이미지와 함께 게시판 수정 실패:', error);
    throw error;
  }
};

/**
 * 이미지 삭제
 * DELETE /api/boards/images
 */
export const deleteBoardImages = async (imageIds: string[]): Promise<void> => {
  try {
    console.log('🚀 이미지 삭제 시작:', { imageIds });

    await apiClient.delete(API_ENDPOINT.BOARD_IMAGES_DELETE, {
      params: { imageIds: imageIds.join(',') },
    });

    console.log('✅ 이미지 삭제 성공');
  } catch (error) {
    console.error('❌ 이미지 삭제 실패:', error);
    throw error;
  }
};

/**
 * 게시판 필터 조회
 * POST /explore/boards/filter
 */
export const filterBoards = async (
  pageable: PageableRequest,
  filterRequest: BoardFilterRequest,
): Promise<BoardFilterResponse> => {
  try {
    const response = await apiClient.post<BoardFilterResponse>(
      API_ENDPOINT.BOARD_FILTER,
      filterRequest,
      {
        params: {
          page: pageable.page,
          size: pageable.size,
          ...(pageable.sort && pageable.sort.length > 0 && { sort: pageable.sort }),
        },
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};
