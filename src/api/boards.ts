import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import {
  Board,
  BoardUpdateRequest,
  BoardWithImagesRequest,
  ImageUploadResponse,
  BoardsListResponse,
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
 * 게시판 수정
 * PUT /api/boards/{id}
 */
export const updateBoard = async (id: number, boardData: BoardUpdateRequest): Promise<Board> => {
  try {
    console.log('🚀 게시판 수정 시작:', { id, boardData });
    const response = await apiClient.put<Board>(`${API_ENDPOINT.BOARD_DETAIL}/${id}`, boardData);
    console.log('✅ 게시판 수정 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 게시판 수정 실패:', error);
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
      ...boardData,
      images: boardData.images.length > 0 ? `${boardData.images.length}개 파일` : '이미지 없음',
    });
    const formData = new FormData();
    // 이미지 파일들 추가
    boardData.images.forEach((image) => {
      formData.append('images', image);
    });

    // JSON 데이터 구성
    const jsonData = {
      boardType: boardData.boardType,
      title: boardData.title,
      description: boardData.description,
      estmtPeriod: boardData.estmtPeriod,
      distance: boardData.distance,
      techTools: boardData.techTools,
      collabMthds: boardData.collabMthds,
      isActive: boardData.isActive,
      requredPpl: boardData.requredPpl,
      cowrkrPosition: boardData.cowrkrPosition,
      cowrkrSpeciality: boardData.cowrkrSpeciality,
      endDate: boardData.endDate,
      projectFields: boardData.projectFields,
      workTools: boardData.workTools,
      collabTools: boardData.collabTools,
      doneType: boardData.doneType,
      processStatus: boardData.processStatus,
    };

    console.log('📝 JSON Data:', jsonData);
    console.log('📝 FormData entries:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // JSON 데이터를 FormData에 추가
    Object.entries(jsonData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

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
      id,
      ...boardData,
      images: `${boardData.images.length}개 파일`,
    });

    const formData = new FormData();
    formData.append('title', boardData.title);
    formData.append('description', boardData.description);

    boardData.images.forEach((image, index) => {
      formData.append(`images`, image);
    });

    const response = await apiClient.put<Board>(
      `${API_ENDPOINT.BOARD_WITH_IMAGES}/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    console.log('✅ 이미지와 함께 게시판 수정 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 이미지와 함께 게시판 수정 실패:', error);
    throw error;
  }
};

/**
 * 다중 이미지 업로드
 * POST /api/boards/images/upload
 */
export const uploadBoardImages = async (images: File[]): Promise<ImageUploadResponse> => {
  try {
    console.log('🚀 다중 이미지 업로드 시작:', { count: images.length });
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });
    const response = await apiClient.post<ImageUploadResponse>(
      API_ENDPOINT.BOARD_IMAGES_UPLOAD,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log('✅ 다중 이미지 업로드 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 다중 이미지 업로드 실패:', error);
    throw error;
  }
};

/**
 * 단일 이미지 업로드
 * POST /api/boards/images/upload/single
 */
export const uploadSingleBoardImage = async (image: File): Promise<ImageUploadResponse> => {
  try {
    console.log('🚀 단일 이미지 업로드 시작:', { fileName: image.name });

    const formData = new FormData();
    formData.append('image', image);

    const response = await apiClient.post<ImageUploadResponse>(
      API_ENDPOINT.BOARD_IMAGES_UPLOAD_SINGLE,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    console.log('✅ 단일 이미지 업로드 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 단일 이미지 업로드 실패:', error);
    throw error;
  }
};

/**
 * 이미지 미리보기 조회
 * GET /api/boards/images/preview
 */
export const getBoardImagesPreview = async (imageIds: string[]): Promise<string[]> => {
  try {
    console.log('🚀 이미지 미리보기 조회 시작:', { imageIds });

    const response = await apiClient.get<string[]>(API_ENDPOINT.BOARD_IMAGES_PREVIEW, {
      params: { imageIds: imageIds.join(',') },
    });

    console.log('✅ 이미지 미리보기 조회 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 이미지 미리보기 조회 실패:', error);
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
