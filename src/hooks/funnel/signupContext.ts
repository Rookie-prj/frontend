import { useMemo } from 'react';
import { useFunnel } from '@use-funnel/react-router-dom';

type SignupStep =
  | 'emailPassword'
  | 'university'
  | 'universityPublic'
  | 'universityMajor'
  | 'currentStudy'
  | 'currentStudyDetail'
  | 'toolset'
  | 'favoriteSubject'
  | 'projectCount'
  | 'complete';
type EmailPassword = {
  email?: string;
  password?: string;
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type University = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type UniversityPublic = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type UniversityMajor = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type CurrentStudy = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type CurrentStudyDetail = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type Toolset = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type FavoriteSubject = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type ProjectCount = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
type Complete = {
  university?: string;
  universityPublic?: string;
  universityMajor?: string;
  universityGrade?: string;
  currentStudy?: string;
  currentStudyDetail?: string;
  toolset?: string;
  favoriteSubject?: string;
  projectCount?: string;
  complete?: string;
};
const STEP_ORDER: SignupStep[] = [
  'emailPassword',
  'university',
  'universityPublic',
  'universityMajor',
  'currentStudy',
  'currentStudyDetail',
  'toolset',
  'favoriteSubject',
  'projectCount',
  'complete',
];
export const getSignupCurrentStepNumber = (currentStep: SignupStep): number => {
  return STEP_ORDER.indexOf(currentStep);
};

export function useSignupFunnel() {
  const initialConfig = useMemo(
    () => ({
      step: 'emailPassword' as const,
      context: {},
    }),
    [],
  );

  const funnel = useFunnel<{
    emailPassword: EmailPassword;
    university: University;
    universityPublic: UniversityPublic;
    universityMajor: UniversityMajor;
    currentStudy: CurrentStudy;
    currentStudyDetail: CurrentStudyDetail;
    toolset: Toolset;
    favoriteSubject: FavoriteSubject;
    projectCount: ProjectCount;
    complete: Complete;
  }>({
    id: 'signup',
    initial: initialConfig,
  });

  const currentStepNumber = getSignupCurrentStepNumber(funnel.step);

  return {
    ...funnel,
    currentStep: currentStepNumber,
  };
}
