import { useSignupFunnel } from '../../hooks/funnel/signupContext';

import { EmailPassword } from './steps/emailPassword';
import { University } from './steps/university';
import { UniversityPublic } from './steps/universityPublic';
import { UniversityMajor } from './steps/universityMajor';
import { CurrentStudy } from './steps/currentStudy';
import { CurrentStudyDetail } from './steps/currentStudyDetail';
import { Toolset } from './steps/toolset';
import { FavoriteSubject } from './steps/favoriteSubject';
import { Complete } from './steps/complete';
import { ProjectCountStep } from './steps/projectCount';

export const Signup = () => {
  const funnel = useSignupFunnel();

  const handleSubmit = () => {
    // 프로젝트 등록 로직
    console.log('프로젝트가 등록되었습니다!');
    // 여기에 API 호출이나 다른 로직을 추가할 수 있습니다
  };

  return funnel.Render({
    emailPassword: ({ history }) => (
      <EmailPassword
        onNext={() => history.push('university', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    university: ({ history }) => (
      <University
        onNext={() => history.push('universityPublic', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    universityPublic: ({ history }) => (
      <UniversityPublic
        onNext={() => history.push('universityMajor', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    universityMajor: ({ history }) => (
      <UniversityMajor
        onNext={() => history.push('currentStudy', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    currentStudy: ({ history }) => (
      <CurrentStudy
        onNext={() => history.push('currentStudyDetail', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    currentStudyDetail: ({ history }) => (
      <CurrentStudyDetail
        onNext={() => history.push('toolset', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    favoriteSubject: ({ history }) => (
      <FavoriteSubject
        onNext={() => history.push('projectCount', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    toolset: ({ history }) => (
      <Toolset
        onNext={() => history.push('favoriteSubject', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),

    projectCount: ({ history }) => (
      <ProjectCountStep
        onNext={() => history.push('complete', (prev) => ({ ...prev }))}
        currentStep={funnel.currentStep}
      />
    ),
    complete: ({ history }) => <Complete onSubmit={handleSubmit} />,
  });
};
