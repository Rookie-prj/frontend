// 회원가입 요청 타입 정의
export interface SignupRequest {
  currentStudy: string;
  emailId: string;
  password: string;
  name: string;
  universityName: string;
  schoolPublicFlag: number;
  major: string;
  grade: string;
  currentStudyDetail: string;
  toolset: string;
  favoritSubject: string;
  publicPortfolioCount: string;
  recruitPeople: string;
  responseRate: string;
  passionMeter: string;
}

// 회원가입 응답 타입 정의
export interface SignupResponse {
  success: boolean;
  message?: string;
  userId?: number;
}

// 로그인 요청 타입 정의
export interface LoginRequest {
  emailId: string;
  password: string;
}

// 로그인 응답 타입 정의
export interface LoginResponse {
  success: boolean;
  message?: string;
  accessToken?: string;
  user?: {
    userId: number;
    emailId: string;
    name: string;
  };
}

// 리프레시 토큰 응답 타입 정의
export interface RefreshTokenResponse {
  accessToken: string;
}
