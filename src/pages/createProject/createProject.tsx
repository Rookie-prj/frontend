import { useMyFunnel } from '../../hooks/funnel/postContext';
import { CreateProjectStep1 } from './steps/step1';
import { CreateProjectStep2 } from './steps/step2';
import { CreateProjectStep3 } from './steps/step3';
import { CreateProjectStep4 } from './steps/step4';
import { CreateProjectStep5 } from './steps/step5';
import {
  createProjectFromStore,
  updateProjectFromStore,
  convertBoardToStoreData,
} from '../../api/projects';
import { useCreateProjectStore } from '../../store/createProjectStore';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBoardDetail } from '../../api/boards';

export const CreateProject = () => {
  const funnel = useMyFunnel();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBoard, setIsLoadingBoard] = useState(false);
  const storeData = useCreateProjectStore();
  const [searchParams] = useSearchParams();
  const boardId = searchParams.get('boardId');
  const isEditMode = !!boardId;
  const hasLoadedRef = useRef<string | null>(null);

  // 수정 모드일 때 기존 데이터 로드
  useEffect(() => {
    if (isEditMode && boardId && hasLoadedRef.current !== boardId) {
      hasLoadedRef.current = boardId;
      const loadBoardData = async () => {
        try {
          setIsLoadingBoard(true);
          console.log('📥 게시물 데이터 로드 시작:', { boardId });
          const board = await getBoardDetail(Number(boardId));
          console.log('📥 로드된 게시물 데이터:', board);

          const storeDataFromBoard = convertBoardToStoreData(board);

          // 스토어에 데이터 설정
          if (storeDataFromBoard.selectedProjectType) {
            storeData.setSelectedProjectType(storeDataFromBoard.selectedProjectType);
          }
          if (storeDataFromBoard.selectedPosition) {
            storeData.setSelectedPosition(storeDataFromBoard.selectedPosition);
          }
          if (storeDataFromBoard.selectedPeriod !== undefined) {
            storeData.setSelectedPeriod(storeDataFromBoard.selectedPeriod);
          }
          if (storeDataFromBoard.selectedPositionDetail) {
            storeData.setSelectedPositionDetail(storeDataFromBoard.selectedPositionDetail);
          }
          if (storeDataFromBoard.selectedPositionNumberOfPeople) {
            storeData.setSelectedPositionNumberOfPeople(
              storeDataFromBoard.selectedPositionNumberOfPeople,
            );
          }
          if (storeDataFromBoard.selectedProjectTitle) {
            storeData.setSelectedProjectTitle(storeDataFromBoard.selectedProjectTitle);
          }
          if (storeDataFromBoard.selectedProjectDescription) {
            storeData.setSelectedProjectDescription(storeDataFromBoard.selectedProjectDescription);
          }
          if (storeDataFromBoard.selectedProjectStatus) {
            storeData.setSelectedProjectStatus(storeDataFromBoard.selectedProjectStatus);
          }
          if (storeDataFromBoard.selectedEndDate) {
            storeData.setSelectedEndDate(storeDataFromBoard.selectedEndDate);
          }
          if (storeDataFromBoard.selectedEndDateType) {
            storeData.setSelectedEndDateType(storeDataFromBoard.selectedEndDateType);
          }
          if (storeDataFromBoard.selectedDistance) {
            storeData.setSelectedDistance(storeDataFromBoard.selectedDistance);
          }
          if (storeDataFromBoard.selectedTools) {
            storeData.setSelectedTools(storeDataFromBoard.selectedTools);
          }
          if (storeDataFromBoard.selectedMethod) {
            storeData.setSelectedMethod(storeDataFromBoard.selectedMethod);
          }
          if (storeDataFromBoard.skillText) {
            storeData.setSkillText(storeDataFromBoard.skillText);
          }
          if (storeDataFromBoard.projectFields) {
            storeData.setProjectFields(storeDataFromBoard.projectFields);
          }
          // 기존 collaborators 초기화 후 새로 추가
          if (storeDataFromBoard.collaborators) {
            // 기존 collaborators 모두 제거
            for (let i = storeData.collaborators.length - 1; i >= 0; i--) {
              storeData.removeCollaborator(i);
            }
            // 새로운 collaborators 추가
            storeDataFromBoard.collaborators.forEach((collab) => {
              storeData.addCollaborator(collab);
            });
            console.log('📝 로드된 collaborators:', storeDataFromBoard.collaborators);
          }

          console.log('✅ 게시물 데이터를 스토어에 로드 완료');
        } catch (error) {
          console.error('❌ 게시물 데이터 로드 실패:', error);
          alert('게시물 데이터를 불러오는 중 오류가 발생했습니다.');
        } finally {
          setIsLoadingBoard(false);
        }
      };

      loadBoardData();
    }
  }, [boardId]);

  const handleSubmit = async (onSuccess: (boardId: number) => void) => {
    try {
      setIsLoading(true);
      console.log('🚀 프로젝트 처리 프로세스 시작:', { isEditMode, boardId });

      // 스토어에서 실제 데이터를 가져와서 게시글 생성/수정
      const storeProjectData = {
        selectedProjectType: storeData.selectedProjectType,
        selectedPosition: storeData.selectedPosition,
        selectedPeriod: storeData.selectedPeriod,
        selectedPositionDetail: storeData.selectedPositionDetail,
        selectedPositionNumberOfPeople: storeData.selectedPositionNumberOfPeople,
        selectedProjectTitle: storeData.selectedProjectTitle,
        selectedProjectDescription: storeData.selectedProjectDescription,
        selectedProjectStatus: storeData.selectedProjectStatus,
        selectedEndDate: storeData.selectedEndDate,
        selectedEndDateType: storeData.selectedEndDateType,
        selectedDistance: storeData.selectedDistance,
        selectedTools: storeData.selectedTools,
        selectedMethod: storeData.selectedMethod,
        skillText: storeData.skillText,
        selectedImages: storeData.selectedImages,
        projectFields: storeData.projectFields,
        collaborators: storeData.collaborators,
      };

      let result;
      if (isEditMode && boardId) {
        console.log('📝 게시물 수정 모드');
        result = await updateProjectFromStore(Number(boardId), storeProjectData);
        console.log('✅ 프로젝트 수정 성공:', result);
        console.log('🎉 프로젝트가 수정되었습니다!');
      } else {
        console.log('➕ 게시물 생성 모드');
        result = await createProjectFromStore(storeProjectData);
        console.log('✅ 프로젝트 생성 성공:', result);
        console.log('🎉 프로젝트가 등록되었습니다!');
      }

      // 성공 시 스토어 초기화
      storeData.reset();

      onSuccess(result.boardId);
    } catch (error) {
      console.error('❌ 프로젝트 처리 실패:', error);
      alert(
        isEditMode
          ? '프로젝트 수정 중 오류가 발생했습니다. 다시 시도해주세요.'
          : '프로젝트 생성 중 오류가 발생했습니다. 다시 시도해주세요.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return funnel.Render({
    projectCategory: ({ history }) => (
      <CreateProjectStep1
        onNext={() => history.push('collaborator', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    collaborator: ({ history }) => (
      <CreateProjectStep2
        onNext={() => history.push('projectInfo', (prev) => ({ ...prev }))}
        onPrev={() =>
          history.push('projectCategory', (prev) => ({ projectCategory: prev.projectCategory }))
        }
        currentStep={funnel.currentStep}
      />
    ),
    projectInfo: ({ history }) => (
      <CreateProjectStep3
        onNext={() => history.push('rookie', (prev) => ({ ...prev }))}
        onPrev={() =>
          history.push('collaborator', (prev) => ({
            projectCategory: prev.projectCategory,
            collaborator: prev.collaborator,
          }))
        }
        currentStep={funnel.currentStep}
      />
    ),
    rookie: ({ history }) => (
      <CreateProjectStep4
        onNext={() => history.push('endDate', (prev) => ({ ...prev }))}
        onPrev={() =>
          history.push('projectInfo', (prev) => ({
            projectCategory: prev.projectCategory,
            collaborator: prev.collaborator,
            projectInfo: prev.projectInfo,
          }))
        }
        currentStep={funnel.currentStep}
      />
    ),
    endDate: ({ history }) => (
      <CreateProjectStep5
        onPrev={() =>
          history.push('rookie', (prev) => ({
            projectCategory: prev.projectCategory,
            collaborator: prev.collaborator,
            projectInfo: prev.projectInfo,
            rookie: prev.rookie,
          }))
        }
        onSubmit={handleSubmit}
        currentStep={funnel.currentStep}
      />
    ),
  });
};
