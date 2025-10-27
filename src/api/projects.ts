import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import {
  Project,
  ProjectCreateRequest,
  ProjectUpdateRequest,
  ProjectWithImagesRequest,
  ProjectsListResponse,
  StoreProjectData,
} from '../models/projects';
import { createBoardWithImages } from './boards';
import { BoardWithImagesRequest } from '../models/boards';
import { format } from 'date-fns';

// 헬퍼 함수들
// const getPeriodInMonths = (period: string): number => {
//   const periodMap: { [key: string]: number } = {
//     ONE_MONTH: 1,
//     TWO_MONTHS: 2,
//     THREE_MONTHS: 3,
//     SIX_MONTHS: 6,
//     ONE_YEAR: 12,
//   };
//   return periodMap[period] || 1;
// };

/**
 * 프로젝트 목록 조회
 * GET /api/projects
 */
export const getProjects = async (page = 0, size = 10): Promise<ProjectsListResponse> => {
  try {
    console.log('🚀 프로젝트 목록 조회 시작:', { page, size });
    const response = await apiClient.get<ProjectsListResponse>(API_ENDPOINT.PROJECT, {
      params: { page, size },
    });

    console.log('✅ 프로젝트 목록 조회 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 프로젝트 목록 조회 실패:', error);
    throw error;
  }
};

/**
 * 프로젝트 상세 조회
 * GET /api/projects/{id}
 */
export const getProjectDetail = async (id: number): Promise<Project> => {
  try {
    console.log('🚀 프로젝트 상세 조회 시작:', { id });
    const response = await apiClient.get<Project>(`${API_ENDPOINT.PROJECT}/${id}`);
    console.log('✅ 프로젝트 상세 조회 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 프로젝트 상세 조회 실패:', error);
    throw error;
  }
};

/**
 * 프로젝트 생성
 * POST /api/projects
 */
export const createProject = async (projectData: ProjectCreateRequest): Promise<Project> => {
  try {
    console.log('🚀 프로젝트 생성 시작:', projectData);

    const response = await apiClient.post<Project>(API_ENDPOINT.PROJECT, projectData);

    console.log('✅ 프로젝트 생성 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 프로젝트 생성 실패:', error);
    throw error;
  }
};

/**
 * 프로젝트 수정
 * PUT /api/projects/{id}
 */
export const updateProject = async (
  id: number,
  projectData: ProjectUpdateRequest,
): Promise<Project> => {
  try {
    console.log('🚀 프로젝트 수정 시작:', { id, projectData });
    const response = await apiClient.put<Project>(`${API_ENDPOINT.PROJECT}/${id}`, projectData);
    console.log('✅ 프로젝트 수정 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 프로젝트 수정 실패:', error);
    throw error;
  }
};

/**
 * 프로젝트 삭제
 * DELETE /api/projects/{id}
 */
export const deleteProject = async (id: number): Promise<void> => {
  try {
    console.log('🚀 프로젝트 삭제 시작:', { id });
    await apiClient.delete(`${API_ENDPOINT.PROJECT}/${id}`);
    console.log('✅ 프로젝트 삭제 성공');
  } catch (error) {
    console.error('❌ 프로젝트 삭제 실패:', error);
    throw error;
  }
};

/**
 * 이미지와 함께 프로젝트 생성
 * POST /api/projects/with-images
 */
export const createProjectWithImages = async (
  projectData: ProjectWithImagesRequest,
): Promise<Project> => {
  try {
    console.log('🚀 이미지와 함께 프로젝트 생성 시작:', {
      ...projectData,
      images: `${projectData.images.length}개 파일`,
    });

    const formData = new FormData();
    formData.append('title', projectData.title);
    formData.append('description', projectData.description);
    formData.append('category', projectData.category);
    formData.append('status', projectData.status);
    formData.append('endDate', projectData.endDate);
    // 협업자 정보를 JSON 문자열로 변환하여 추가
    formData.append('collaborators', JSON.stringify(projectData.collaborators));
    projectData.images.forEach((image) => {
      formData.append('images', image);
    });
    const response = await apiClient.post<Project>(
      `${API_ENDPOINT.PROJECT}/with-images`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log('✅ 이미지와 함께 프로젝트 생성 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 이미지와 함께 프로젝트 생성 실패:', error);
    throw error;
  }
};
/**
 * 스토어 데이터를 받아서 게시글 생성
 * @param storeData 스토어에서 가져온 프로젝트 데이터
 */
export const createProjectFromStore = async (storeData: StoreProjectData): Promise<any> => {
  try {
    console.log('🚀 스토어 데이터로 게시글 생성 시작');
    const boardData: BoardWithImagesRequest = {
      boardType:
        (storeData.selectedProjectType as 'PROJECT' | 'STUDY' | 'CONTEST' | 'MENTORING') ||
        'PROJECT',
      title: storeData.selectedProjectTitle || '',
      description: storeData.selectedProjectDescription || '',
      estmtPeriod: storeData.selectedPeriod || 0,
      distance: storeData.selectedDistance || '',
      techTools: storeData.skillText || '',
      collabMthds: storeData.selectedMethod || '',
      isActive: true,
      requredPpl: parseInt(storeData.selectedPositionNumberOfPeople || ''),
      cowrkrPosition: storeData.selectedPosition ? [storeData.selectedPosition] : [],
      cowrkrSpeciality:
        storeData.selectedPositionDetail && storeData.selectedPositionNumberOfPeople
          ? {
              [storeData.selectedPositionDetail]: parseInt(
                storeData.selectedPositionNumberOfPeople,
              ),
            }
          : {},
      endDate: storeData.selectedEndDate
        ? format(storeData.selectedEndDate, "yyyy-MM-dd'T'HH:mm:ss")
        : '',
      projectFields: storeData.projectFields || [],
      workTools: storeData.selectedTools || [],
      collabTools: storeData.selectedTools || [],
      doneType: storeData.selectedEndDateType || '',
      images: storeData.selectedImages || [],
    };
    console.log('📝 변환된 게시글 데이터:', boardData);
    console.log('📝 원본 스토어 데이터:', storeData);

    // boards API를 사용하여 게시글 생성
    const result = await createBoardWithImages(boardData);
    console.log('✅ 스토어 데이터로 게시글 생성 성공:', result);
    return result;
  } catch (error) {
    console.error('❌ 스토어 데이터로 게시글 생성 실패:', error);
    throw error;
  }
};
