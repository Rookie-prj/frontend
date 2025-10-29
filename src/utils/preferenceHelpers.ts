import { TEAM_DISTANCE_OPTIONS, TEAM_COOPERATION_METHOD_OPTIONS } from '../constants/createProject';

/**
 * distance value를 label로 변환
 */
export const getDistanceLabel = (value: string): string => {
  const option = TEAM_DISTANCE_OPTIONS.find((opt) => opt.value === value);
  return option?.label || value;
};

/**
 * method value를 label로 변환
 */
export const getMethodLabel = (value: string): string => {
  const option = TEAM_COOPERATION_METHOD_OPTIONS.find((opt) => opt.value === value);
  return option?.label || value;
};
