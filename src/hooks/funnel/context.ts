import { useMemo } from 'react';
import { useFunnel } from '@use-funnel/react-router-dom';

type ProjectStep = 'projectCategory' | 'collaborator' | 'projectInfo' | 'rookie' | 'endDate';
type RookieStep =
  | 'projectCategory'
  | 'collaborator'
  | 'projectInfo'
  | 'rookie'
  | 'projectStatus'
  | 'endDate';

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
  projectStatus?: string;
  rookie?: string;
  endDate?: string;
};
type EndDateInput = {
  projectCategory?: string;
  collaborator?: string;
  projectInfo?: string;
  projectStatus?: string;
  rookie?: string;
  endDate?: string;
};
type ProjectStatusInput = {
  projectCategory?: string;
  collaborator?: string;
  projectInfo?: string;
  rookie?: string;
  endDate?: string;
  projectStatus?: string;
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

const ROOKIE_STEP_ORDER: RookieStep[] = [
  'collaborator',
  'projectCategory',
  'projectInfo',
  'projectStatus',
  'rookie',
  'endDate',
];

export const getRookieCurrentStepNumber = (currentStep: RookieStep): number => {
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
    projectStatus: ProjectStatusInput;
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
