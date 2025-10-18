import { useMemo } from 'react';
import { useFunnel } from '@use-funnel/react-router-dom';

type ProjectStep = 'projectCategory' | 'collaborator' | 'projectInfo' | 'rookie' | 'endDate';
type RookieStep = 'projectCategory' | 'collaborator' | 'projectInfo' | 'rookie' | 'endDate';

// 각 단계별로 필요한 데이터를 정의
type ProjectCategoryInput = {
  projectCategory?: string;
  collaborator?: string;
  projectInfo?: string;
  rookie?: string;
  endDate?: string;
};
type CollaboratorInput = {
  projectCategory?: string;
  collaborator?: string;
  projectInfo?: string;
  rookie?: string;
  endDate?: string;
};
type ProjectInfoInput = {
  projectCategory?: string;
  collaborator?: string;
  projectInfo?: string;
  rookie?: string;
  endDate?: string;
};
type RookieInput = {
  projectCategory?: string;
  collaborator?: string;
  projectInfo?: string;
  rookie?: string;
  endDate?: string;
};
type EndDateInput = {
  projectCategory?: string;
  collaborator?: string;
  projectInfo?: string;
  rookie?: string;
  endDate?: string;
};

const STEP_ORDER: ProjectStep[] = [
  'projectCategory',
  'collaborator',
  'projectInfo',
  'rookie',
  'endDate',
];
export const getCurrentStepNumber = (currentStep: ProjectStep): number => {
  return STEP_ORDER.indexOf(currentStep);
};

export function useMyFunnel() {
  const initialConfig = useMemo(
    () => ({
      step: 'projectCategory' as const,
      context: {},
    }),
    [],
  );

  const funnel = useFunnel<{
    projectCategory: ProjectCategoryInput;
    collaborator: CollaboratorInput;
    projectInfo: ProjectInfoInput;
    rookie: RookieInput;
    endDate: EndDateInput;
  }>({
    id: 'create-project',
    initial: initialConfig,
  });

  const currentStepNumber = getCurrentStepNumber(funnel.step);

  return {
    ...funnel,
    currentStep: currentStepNumber,
  };
}

const ROOKIE_STEP_ORDER: ProjectStep[] = [
  'collaborator',
  'projectCategory',
  'projectInfo',
  'rookie',
  'endDate',
];

export const getRookieCurrentStepNumber = (currentStep: ProjectStep): number => {
  return ROOKIE_STEP_ORDER.indexOf(currentStep);
};

export function useRookieFunnel() {
  const initialConfig = useMemo(
    () => ({
      step: 'collaborator' as const,
      context: {},
    }),
    [],
  );

  const funnel = useFunnel<{
    projectCategory: ProjectCategoryInput;
    collaborator: CollaboratorInput;
    projectInfo: ProjectInfoInput;
    rookie: RookieInput;
    endDate: EndDateInput;
  }>({
    id: 'create-rookie',
    initial: initialConfig,
  });

  const currentStepNumber = getRookieCurrentStepNumber(funnel.step);
  return {
    ...funnel,
    currentStep: currentStepNumber,
  };
}
