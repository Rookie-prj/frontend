import { create } from 'zustand';

interface CreateProjectState {
  selectedProjectType: string | null;
  selectedPosition: string | null;
  selectedPeriod: string | null;

  selectedPositionDetail: string | null;
  selectedPositionNumberOfPeople: number | null;
  setSelectedPositionDetail: (positionDetail: string | null) => void;
  setSelectedPositionNumberOfPeople: (positionNumberOfPeople: number | null) => void;
  setSelectedProjectType: (projectType: string | null) => void;
  setSelectedPeriod: (period: string | null) => void;
  setSelectedPosition: (position: string | null) => void;
  reset: () => void;
}

export const useCreateProjectStore = create<CreateProjectState>((set) => ({
  selectedProjectType: null,
  selectedPosition: null,
  selectedPeriod: null,
  selectedPositionDetail: null,
  selectedPositionNumberOfPeople: null,
  setSelectedPositionDetail: (positionDetail) => set({ selectedPositionDetail: positionDetail }),
  setSelectedPositionNumberOfPeople: (positionNumberOfPeople) =>
    set({ selectedPositionNumberOfPeople: positionNumberOfPeople }),
  setSelectedProjectType: (projectType) => set({ selectedProjectType: projectType }),
  setSelectedPeriod: (period) => set({ selectedPeriod: period }),
  setSelectedPosition: (position) => set({ selectedPosition: position }),
  reset: () => set({ selectedProjectType: null, selectedPeriod: null, selectedPosition: null }),
}));
