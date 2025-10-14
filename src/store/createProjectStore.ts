import { create } from 'zustand';

interface CreateProjectState {
  selectedProjectType: string | null;
  selectedPosition: string | null;
  selectedPeriod: string | null;
  setSelectedProjectType: (projectType: string | null) => void;
  setSelectedPeriod: (period: string | null) => void;
  setSelectedPosition: (position: string | null) => void;
  reset: () => void;
}

export const useCreateProjectStore = create<CreateProjectState>((set) => ({
  selectedProjectType: null,
  selectedPosition: null,
  selectedPeriod: null,
  setSelectedProjectType: (projectType) => set({ selectedProjectType: projectType }),
  setSelectedPeriod: (period) => set({ selectedPeriod: period }),
  setSelectedPosition: (position) => set({ selectedPosition: position }),
  reset: () => set({ selectedProjectType: null, selectedPeriod: null, selectedPosition: null }),
}));
