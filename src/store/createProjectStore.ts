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
  selectedDistance: string | null;
  selectedTools: string[];
  selectedMethod: string | null;
  skillText: string | null;
  selectedImages: File[];
  setSelectedPositionDetail: (positionDetail: string | null) => void;
  setSelectedPositionNumberOfPeople: (positionNumberOfPeople: string | null) => void;
  setSelectedProjectType: (projectType: string | null) => void;
  setSelectedPeriod: (period: string | null) => void;
  setSelectedProjectTitle: (projectTitle: string | null) => void;
  setSelectedProjectDescription: (projectDescription: string | null) => void;
  setSelectedPosition: (position: string | null) => void;
  setSelectedEndDate: (endDate: Date | null) => void;
  setSelectedEndDateType: (endDateType: string | null) => void;
  setSelectedDistance: (distance: string | null) => void;
  setSelectedTools: (tools: string[]) => void;
  setSelectedMethod: (method: string | null) => void;
  setSkillText: (skillText: string | null) => void;
  setSelectedImages: (images: File[]) => void;
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
  selectedDistance: null,
  selectedTools: [],
  selectedMethod: null,
  skillText: null,
  selectedImages: [],
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
  setSelectedDistance: (distance) => set({ selectedDistance: distance }),
  setSelectedTools: (tools) => set({ selectedTools: tools }),
  setSelectedMethod: (method) => set({ selectedMethod: method }),
  setSkillText: (skillText) => set({ skillText: skillText }),
  setSelectedImages: (images) => set({ selectedImages: images }),
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
      selectedDistance: null,
      selectedTools: [],
      selectedMethod: null,
      skillText: null,
      selectedImages: [],
    }),
}));
