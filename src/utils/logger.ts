/**
 * API 호출 로깅 헬퍼 함수들
 */

/**
 * API 호출 시작 로그
 */
export const logApiStart = (endpoint: string, data: any, hidePassword = true) => {
  const logData = hidePassword && data.password 
    ? { ...data, password: '[HIDDEN]' }
    : data;
    
  console.log('🚀 API 호출 시작:', {
    endpoint,
    data: logData,
  });
};

/**
 * API 호출 성공 로그
 */
export const logApiSuccess = (response: any) => {
  console.log('✅ API 응답 성공:', response);
};

/**
 * API 호출 실패 로그
 */
export const logApiError = (error: any, operation: string) => {
  console.error(`❌ ${operation} 실패:`, error);
};

/**
 * 데이터 변환 로그
 */
export const logDataTransform = (operation: string, data: any, hidePassword = true) => {
  const logData = hidePassword && data.password 
    ? { ...data, password: '[HIDDEN]' }
    : data;
    
  console.log(`🔄 ${operation}:`, logData);
};

/**
 * 데이터 변환 완료 로그
 */
export const logDataTransformComplete = (data: any, hidePassword = true) => {
  const logData = hidePassword && data.password 
    ? { ...data, password: '[HIDDEN]' }
    : data;
    
  console.log('✅ 변환된 데이터:', logData);
};
