import { create } from 'zustand';

interface CreateProjectState {
  projectType: string | null;
  period: string | null;
  setProjectType: (projectType: string | null) => void;
  setPeriod: (period: string | null) => void;
  reset: () => void;
}

export const useCreateProjectStore = create<CreateProjectState>((set) => ({
  projectType: null,
  period: null,
  setProjectType: (projectType) => set({ projectType: projectType }),
  setPeriod: (period) => set({ period: period }),
  reset: () => set({ projectType: null, period: null }),
}));
