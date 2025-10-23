import { useRookieFunnel } from '../../hooks/funnel/context';
import ProjectStatus from './steps/projectStatus';
import { CreateProjectStep1 } from './steps/step1';
import { CreateProjectStep2 } from './steps/step2';
import { CreateProjectStep3 } from './steps/step3';
import { CreateProjectStep4 } from './steps/step4';
import { CreateProjectStep5 } from './steps/step5';

export const CreateRookie = () => {
  const funnel = useRookieFunnel();

  const handleSubmit = () => {
    console.log('프로젝트가 등록되었습니다!');
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
