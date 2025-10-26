import { create } from 'zustand';

interface SignupStore {
  // 기본 정보
  name?: string;
  email: string;
  password: string;

  // University 관련
  university: string;
  universityPublic: string;
  universityMajor: string;
  universityGrade: string;

  // Current Study 관련
  currentStudy: string;
  currentStudyDetail: string;

  // Toolset 관련
  toolset: string;

  // Favorite Subject 관련
  favoriteSubject: string;

  // Project Count 관련
  projectCount: string;

  // Actions
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUniversity: (university: string) => void;
  setUniversityPublic: (universityPublic: string) => void;
  setUniversityMajor: (universityMajor: string) => void;
  setUniversityGrade: (universityGrade: string) => void;
  setCurrentStudy: (currentStudy: string) => void;
  setCurrentStudyDetail: (currentStudyDetail: string) => void;
  setToolset: (toolset: string) => void;
  setFavoriteSubject: (favoriteSubject: string) => void;
  setProjectCount: (projectCount: string) => void;
  resetSignup: () => void;
}

export const useSignupStore = create<SignupStore>((set) => ({
  // Initial state
  name: '',
  email: '',
  password: '',
  university: '',
  universityPublic: '',
  universityMajor: '',
  universityGrade: '',
  currentStudy: '',
  currentStudyDetail: '',
  toolset: '',
  favoriteSubject: '',
  projectCount: '',

  // Actions
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUniversity: (university) => set({ university }),
  setUniversityPublic: (universityPublic) => set({ universityPublic }),
  setUniversityMajor: (universityMajor) => set({ universityMajor }),
  setUniversityGrade: (universityGrade) => set({ universityGrade }),
  setCurrentStudy: (currentStudy) => set({ currentStudy }),
  setCurrentStudyDetail: (currentStudyDetail) => set({ currentStudyDetail }),
  setToolset: (toolset) => set({ toolset }),
  setFavoriteSubject: (favoriteSubject) => set({ favoriteSubject }),
  setProjectCount: (projectCount) => set({ projectCount }),
  resetSignup: () =>
    set({
      name: '',
      email: '',
      password: '',
      university: '',
      universityPublic: '',
      universityMajor: '',
      universityGrade: '',
      currentStudy: '',
      currentStudyDetail: '',
      toolset: '',
      favoriteSubject: '',
      projectCount: '',
    }),
}));
