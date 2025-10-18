import { useRookieFunnel } from '../../hooks/funnel/context';
import { CreateProjectStep1 } from './steps/step1';
import { CreateProjectStep2 } from './steps/step2';
import { CreateProjectStep3 } from './steps/step3';
import { CreateProjectStep4 } from './steps/step4';
import { CreateProjectStep5 } from './steps/step5';

export const CreateRookie = () => {
  const funnel = useRookieFunnel();

  const handleSubmit = () => {
    // 프로젝트 등록 로직
    console.log('프로젝트가 등록되었습니다!');
    // 여기에 API 호출이나 다른 로직을 추가할 수 있습니다
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
