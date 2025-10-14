import { useMemo } from 'react';
import { useFunnel } from '@use-funnel/react-router-dom';

type Step = 'projectCategory' | 'collaborator' | 'projectInfo' | 'rookie' | 'endDate';

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

export type PlantFormData = {
  plantName: string;
  plantDate: string;
  plantType: string;
  plantLocation: string;
};

export function useMyFunnel() {
  const initialConfig = useMemo(
    () => ({
      step: 'projectCategory' as const,
      context: {},
    }),
    [],
  );

  return useFunnel<{
    projectCategory: ProjectCategoryInput;
    collaborator: CollaboratorInput;
    projectInfo: ProjectInfoInput;
    rookie: RookieInput;
    endDate: EndDateInput;
  }>({
    id: 'create-project',
    initial: initialConfig,
  });
}
