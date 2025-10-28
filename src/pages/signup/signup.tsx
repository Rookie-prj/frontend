import { useSignupFunnel } from '../../hooks/funnel/signupContext';
import { signupFromStore } from '../../api/auth';
import { useSignupStore } from '../../store/signupStore';

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
  const { name } = useSignupStore();

  const handleSubmit = async () => {
    try {
      console.log('🚀 회원가입 프로세스 시작');

      // 스토어에서 회원가입 실행
      const result = await signupFromStore({
        name: name || '사용자', // 스토어에서 이름 가져오기
        recruitPeople: '2-3명',
        responseRate: '90%',
        passionMeter: '85%',
      });

      console.log('✅ 회원가입 성공:', result);

      // 성공 시 추가 로직 (토큰 저장, 리다이렉트 등)
      if (result.success) {
        console.log('🎉 회원가입이 완료되었습니다!');
        // 필요시 토큰 저장 또는 다른 처리
      }
    } catch (error) {
      console.error('❌ 회원가입 실패:', error);
      // 에러 처리 로직
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
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
