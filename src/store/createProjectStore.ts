import { create } from 'zustand';

interface CreateProjectState {
  selectedProjectType: string | null;
  selectedPosition: string | null;
  selectedPeriod: string | null;
  selectedPositionDetail: string | null;
  selectedPositionNumberOfPeople: string | null;
  selectedProjectTitle: string | null;
  selectedProjectDescription: string | null;
  selectedEndDate: Date | null;
  selectedEndDateType: string | null;
  setSelectedPositionDetail: (positionDetail: string | null) => void;
  setSelectedPositionNumberOfPeople: (positionNumberOfPeople: string | null) => void;
  setSelectedProjectType: (projectType: string | null) => void;
  setSelectedPeriod: (period: string | null) => void;
  setSelectedProjectTitle: (projectTitle: string | null) => void;
  setSelectedProjectDescription: (projectDescription: string | null) => void;
  setSelectedPosition: (position: string | null) => void;
  setSelectedEndDate: (endDate: Date | null) => void;
  setSelectedEndDateType: (endDateType: string | null) => void;
  reset: () => void;
}

export const useCreateProjectStore = create<CreateProjectState>((set) => ({
  selectedProjectType: null,
  selectedPosition: null,
  selectedPeriod: null,
  selectedProjectTitle: null,
  selectedPositionDetail: null,
  selectedProjectDescription: null,
  selectedPositionNumberOfPeople: null,
  selectedEndDate: null,
  selectedEndDateType: null,
  setSelectedPositionDetail: (positionDetail) => set({ selectedPositionDetail: positionDetail }),
  setSelectedProjectTitle: (projectTitle) => set({ selectedProjectTitle: projectTitle }),
  setSelectedPositionNumberOfPeople: (positionNumberOfPeople) =>
    set({ selectedPositionNumberOfPeople: positionNumberOfPeople }),
  setSelectedProjectType: (projectType) => set({ selectedProjectType: projectType }),
  setSelectedPeriod: (period) => set({ selectedPeriod: period }),
  setSelectedPosition: (position) => set({ selectedPosition: position }),
  setSelectedProjectDescription: (projectDescription) =>
    set({ selectedProjectDescription: projectDescription }),
  setSelectedEndDate: (endDate) => set({ selectedEndDate: endDate }),
  setSelectedEndDateType: (endDateType) => set({ selectedEndDateType: endDateType }),
  reset: () =>
    set({
      selectedProjectType: null,
      selectedPeriod: null,
      selectedPosition: null,
      selectedPositionDetail: null,
      selectedPositionNumberOfPeople: null,
      selectedProjectTitle: null,
      selectedProjectDescription: null,
      selectedEndDate: null,
      selectedEndDateType: null,
    }),
}));
