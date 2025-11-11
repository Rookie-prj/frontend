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
import { createBoardWithImages, updateBoardWithImages, getBoardDetail } from './boards';
import { BoardWithImagesRequest, Board } from '../models/boards';
import { format, parseISO } from 'date-fns';
import { removeBrackets } from '../utils/stringUtils';

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
      requredPpl:
        storeData.collaborators.length > 0
          ? storeData.collaborators.reduce((sum, c) => sum + parseInt(c.numberOfPeople || '0'), 0)
          : parseInt(storeData.selectedPositionNumberOfPeople || '0'),
      cowrkrPosition: storeData.selectedPosition
        ? [storeData.selectedPosition]
        : storeData.collaborators.length > 0
        ? [...new Set(storeData.collaborators.map((c) => c.position))]
        : [],
      cowrkrSpeciality:
        storeData.collaborators.length > 0
          ? storeData.collaborators.reduce((acc, c) => {
              acc[c.positionDetail] =
                (acc[c.positionDetail] || 0) + parseInt(c.numberOfPeople || '0');
              return acc;
            }, {} as Record<string, number>)
          : storeData.selectedPositionDetail && storeData.selectedPositionNumberOfPeople
          ? {
              [storeData.selectedPositionDetail]: parseInt(
                storeData.selectedPositionNumberOfPeople,
              ),
            }
          : {},
      endDate: storeData.selectedEndDate
        ? format(storeData.selectedEndDate, "yyyy-MM-dd'T'HH:mm:ss")
        : '',
      projectFields: [...new Set(storeData.projectFields || [])],
      workTools: [...new Set(storeData.selectedTools || [])],
      collabTools: [...new Set(storeData.selectedTools || [])],
      doneType: storeData.selectedEndDateType || '',
      processStatus: storeData.selectedProjectStatus || '',
      images: storeData.selectedImages || [],
    };
    console.log('📝 변환된 게시글 데이터:', boardData);
    console.log('📝 원본 스토어 데이터:', storeData);

    const result = await createBoardWithImages(boardData);
    console.log('✅ 스토어 데이터로 게시글 생성 성공:', result);
    return result;
  } catch (error) {
    console.error('❌ 스토어 데이터로 게시글 생성 실패:', error);
    throw error;
  }
};

/**
 * 스토어 데이터를 받아서 게시글 수정
 * @param boardId 수정할 게시글 ID
 * @param storeData 스토어에서 가져온 프로젝트 데이터
 */
export const updateProjectFromStore = async (
  boardId: number,
  storeData: StoreProjectData,
): Promise<Board> => {
  try {
    console.log('🚀 스토어 데이터로 게시글 수정 시작:', { boardId });

    // 기존 게시물 데이터 가져오기 (이미지 URL 유지용)
    const existingBoard = await getBoardDetail(boardId);
    console.log('📥 기존 게시물 데이터:', existingBoard);

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
      requredPpl:
        storeData.collaborators.length > 0
          ? storeData.collaborators.reduce((sum, c) => sum + parseInt(c.numberOfPeople || '0'), 0)
          : parseInt(storeData.selectedPositionNumberOfPeople || '0'),
      cowrkrPosition: storeData.selectedPosition
        ? [storeData.selectedPosition]
        : storeData.collaborators.length > 0
        ? [...new Set(storeData.collaborators.map((c) => c.position))]
        : [],
      cowrkrSpeciality:
        storeData.collaborators.length > 0
          ? storeData.collaborators.reduce((acc, c) => {
              acc[c.positionDetail] =
                (acc[c.positionDetail] || 0) + parseInt(c.numberOfPeople || '0');
              return acc;
            }, {} as Record<string, number>)
          : storeData.selectedPositionDetail && storeData.selectedPositionNumberOfPeople
          ? {
              [storeData.selectedPositionDetail]: parseInt(
                storeData.selectedPositionNumberOfPeople,
              ),
            }
          : {},
      endDate: storeData.selectedEndDate
        ? format(storeData.selectedEndDate, "yyyy-MM-dd'T'HH:mm:ss")
        : '',
      projectFields: [...new Set(storeData.projectFields || [])],
      workTools: [...new Set(storeData.selectedTools || [])],
      collabTools: [...new Set(storeData.selectedTools || [])],
      doneType: storeData.selectedEndDateType || '',
      processStatus: storeData.selectedProjectStatus || '',
      images: storeData.selectedImages || [],
    };
    console.log('📝 변환된 게시글 수정 데이터:', boardData);

    const result = await updateBoardWithImages(boardId, boardData, existingBoard);
    console.log('✅ 스토어 데이터로 게시글 수정 성공:', result);
    return result;
  } catch (error) {
    console.error('❌ 스토어 데이터로 게시글 수정 실패:', error);
    throw error;
  }
};

/**
 * Board 데이터를 스토어 형식으로 변환
 * @param board Board 데이터
 */
export const convertBoardToStoreData = (board: Board): Partial<StoreProjectData> => {
  console.log('🔄 Board 데이터를 스토어 형식으로 변환:', board);

  // 대괄호 제거 헬퍼 함수
  const cleanValue = (value: string | null | undefined): string | null => {
    if (!value) return null;
    return removeBrackets(value);
  };

  const cleanArray = (arr: string[] | undefined): string[] => {
    if (!arr || arr.length === 0) return [];
    return arr.map((item) => removeBrackets(item));
  };

  // cowrkrPosition에서 대괄호 제거
  const cleanedPosition = board.cowrkrPosition?.[0] ? cleanValue(board.cowrkrPosition[0]) : null;

  // cowrkrSpeciality의 키에서 대괄호 제거
  const cleanedSpecialityKeys =
    board.cowrkrSpeciality && Object.keys(board.cowrkrSpeciality).length > 0
      ? Object.keys(board.cowrkrSpeciality).map((key) => removeBrackets(key))
      : [];

  const collaborators =
    board.cowrkrSpeciality && Object.keys(board.cowrkrSpeciality).length > 0
      ? Object.entries(board.cowrkrSpeciality).map(([positionDetail, numberOfPeople]) => ({
          position: cleanedPosition || '',
          positionDetail: removeBrackets(positionDetail),
          numberOfPeople: String(numberOfPeople),
          requiredSkills: board.techTools ? board.techTools.split(',').map((s) => s.trim()) : [],
          tools: cleanArray([...board.workTools, ...board.collabTools]),
        }))
      : [];

  const storeData: Partial<StoreProjectData> = {
    selectedProjectType: board.boardType,
    selectedPosition: cleanedPosition,
    selectedPeriod: board.estmtPeriod,
    selectedPositionDetail: cleanedSpecialityKeys[0] || null,
    selectedPositionNumberOfPeople:
      board.cowrkrSpeciality && Object.keys(board.cowrkrSpeciality).length > 0
        ? String(Object.values(board.cowrkrSpeciality)[0])
        : null,
    selectedProjectTitle: board.title,
    selectedProjectDescription: board.description,
    selectedProjectStatus: board.processStatus || null,
    selectedEndDate: board.endDate ? parseISO(board.endDate) : null,
    selectedEndDateType: board.doneType || null,
    selectedDistance: cleanValue(board.distance),
    selectedTools: [...new Set(cleanArray([...board.workTools, ...board.collabTools]))],
    selectedMethod: cleanValue(board.collabMthds),
    skillText: board.techTools,
    selectedImages: [],
    projectFields: [...new Set(cleanArray(board.projectFields))],
    collaborators,
  };

  console.log('✅ 변환된 스토어 데이터:', storeData);
  return storeData;
};
