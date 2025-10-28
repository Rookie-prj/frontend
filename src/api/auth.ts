import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { useSignupStore } from '../store/signupStore';
import { SignupRequest, SignupResponse, LoginRequest, LoginResponse } from '../models/auth';

/**
 * 회원가입 API 호출 함수
 */
export const signupUser = async (signupData: SignupRequest): Promise<SignupResponse> => {
  try {
    console.log('🚀 회원가입 API 호출 시작:', {
      endpoint: API_ENDPOINT.ROOKIE_SIGNUP,
      data: {
        ...signupData,
        password: '[HIDDEN]',
      },
    });

    const response = await apiClient.post<SignupResponse>(API_ENDPOINT.ROOKIE_SIGNUP, signupData);

    console.log('✅ 회원가입 API 응답 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 회원가입 API 호출 실패:', error);
    throw error;
  }
};

/**
 * 로그인 API 호출 함수
 * @param loginData 로그인 데이터
 * @returns Promise<LoginResponse>
 */
export const loginUser = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {
    console.log('🚀 로그인 API 호출 시작:', {
      endpoint: API_ENDPOINT.ROOKIE_LOGIN,
      data: {
        ...loginData,
        password: '[HIDDEN]',
      },
    });

    const response = await apiClient.post<LoginResponse>(API_ENDPOINT.ROOKIE_LOGIN, loginData);

    console.log('✅ 로그인 API 응답 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 로그인 API 호출 실패:', error);
    throw error;
  }
};

/**
 * 스토어 데이터를 API 스펙에 맞춰 변환하는 헬퍼 함수
 * @param storeData 스토어에서 가져온 데이터
 * @param additionalData 추가로 필요한 데이터 (name 등)
 * @returns SignupRequest
 */
export const transformStoreDataToSignupRequest = (
  storeData: {
    email: string;
    password: string;
    university: string;
    universityPublic: string;
    universityMajor: string;
    universityGrade: string;
    currentStudy: string;
    currentStudyDetail: string;
    toolset: string;
    favoriteSubject: string;
    projectCount: string;
  },
  additionalData: {
    name: string;
    recruitPeople?: string;
    responseRate?: string;
    passionMeter?: string;
  },
): SignupRequest => {
  console.log('🔄 스토어 데이터를 API 스펙으로 변환:', {
    storeData: {
      ...storeData,
      password: '[HIDDEN]',
    },
    additionalData,
  });

  const signupRequest: SignupRequest = {
    currentStudy: storeData.currentStudy,
    emailId: storeData.email,
    password: storeData.password,
    name: additionalData.name,
    universityName: storeData.university,
    schoolPublicFlag: storeData.universityPublic === 'public' ? 1 : 0,
    major: storeData.universityMajor,
    grade: storeData.universityGrade,
    currentStudyDetail: storeData.currentStudyDetail,
    toolset: storeData.toolset,
    favoritSubject: storeData.favoriteSubject,
    publicPortfolioCount: storeData.projectCount,
    recruitPeople: additionalData.recruitPeople || '',
    responseRate: additionalData.responseRate || '',
    passionMeter: additionalData.passionMeter || '',
  };

  console.log('✅ 변환된 API 요청 데이터:', {
    ...signupRequest,
    password: '[HIDDEN]',
  });

  return signupRequest;
};

/**
 * 스토어에서 직접 회원가입을 수행하는 함수
 * @param additionalData 추가로 필요한 데이터
 * @returns Promise<SignupResponse>
 */
export const signupFromStore = async (additionalData: {
  name: string;
  recruitPeople?: string;
  responseRate?: string;
  passionMeter?: string;
}): Promise<SignupResponse> => {
  const storeData = useSignupStore.getState();

  console.log('📦 스토어에서 회원가입 데이터 가져오기:', {
    storeData: {
      ...storeData,
      password: '[HIDDEN]',
    },
    additionalData,
  });

  const signupRequest = transformStoreDataToSignupRequest(storeData, additionalData);
  return await signupUser(signupRequest);
};
