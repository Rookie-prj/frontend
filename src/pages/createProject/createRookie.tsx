import { useRookieFunnel } from '../../hooks/funnel/postContext';
import ProjectStatus from './steps/projectStatus';
import { CreateProjectStep1 } from './steps/step1';
import { CreateProjectStep2 } from './steps/step2';
import { CreateProjectStep3 } from './steps/step3';
import { CreateProjectStep4 } from './steps/step4';
import { CreateProjectStep5 } from './steps/step5';
import { createProjectFromStore } from '../../api/projects';
import { useCreateProjectStore } from '../../store/createProjectStore';
import { useState } from 'react';

export const CreateRookie = () => {
  const funnel = useRookieFunnel();
  const [isLoading, setIsLoading] = useState(false);
  const storeData = useCreateProjectStore();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      console.log('🚀 프로젝트 생성 프로세스 시작');

      // 스토어에서 실제 데이터를 가져와서 게시글 생성
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
      };

      console.log('🔍 스토어에서 가져온 데이터:', storeProjectData);

      const result = await createProjectFromStore(storeProjectData);

      console.log('✅ 프로젝트 생성 성공:', result);
      console.log('🎉 프로젝트가 등록되었습니다!');

      // 성공 시 스토어 초기화
      storeData.reset();

      // 성공 시 추가 로직 (리다이렉트 등)
      // navigate('/projects') 또는 다른 페이지로 이동
    } catch (error) {
      console.error('❌ 프로젝트 생성 실패:', error);
      alert('프로젝트 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return funnel.Render({
    collaborator: ({ history }) => (
      <CreateProjectStep2
        onNext={() => history.push('projectCategory', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    projectCategory: ({ history }) => (
      <CreateProjectStep1
        onNext={() => history.push('projectInfo', (prev) => ({ ...prev }))}
        onPrev={() => history.push('collaborator', (prev) => ({ collaborator: prev.collaborator }))}
        currentStep={1}
      />
    ),
    projectInfo: ({ history }) => (
      <CreateProjectStep3
        onNext={() => history.push('projectStatus', (prev) => ({ ...prev }))}
        onPrev={() =>
          history.push('projectCategory', (prev) => ({
            projectCategory: prev.projectCategory,
            collaborator: prev.collaborator,
          }))
        }
        currentStep={1}
      />
    ),
    projectStatus: ({ history }) => (
      <ProjectStatus
        onNext={() => history.push('rookie', (prev) => ({ ...prev }))}
        onPrev={() => history.push('projectInfo', (prev) => ({ ...prev }))}
        currentStep={2}
      />
    ),
    rookie: ({ history }) => (
      <CreateProjectStep4
        onNext={() => history.push('endDate', (prev) => ({ ...prev }))}
        onPrev={() =>
          history.push('projectStatus', (prev) => ({
            projectCategory: prev.projectCategory,
            collaborator: prev.collaborator,
            projectInfo: prev.projectInfo,
            projectStatus: prev.projectStatus,
          }))
        }
        currentStep={3}
      />
    ),
    endDate: ({ history }) => (
      <CreateProjectStep5
        onPrev={() =>
          history.push('rookie', (prev) => ({
            projectCategory: prev.projectCategory,
            collaborator: prev.collaborator,
            projectInfo: prev.projectInfo,
            projectStatus: prev.projectStatus,
            rookie: prev.rookie,
          }))
        }
        onSubmit={handleSubmit}
        currentStep={4}
      />
    ),
  });
};
