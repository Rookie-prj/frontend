import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = (date: Date | null | undefined): string => {
  if (!date) return '';

  return format(date, 'M월 d일', { locale: ko });
};

/**
 * 날짜에 시간을 14:00:00으로 설정
 * @param date 설정할 날짜
 * @returns 시간이 14:00:00으로 설정된 새로운 Date 객체
 */
export const setDateTo14 = (date: Date): Date => {
  const dateWithTime = new Date(date);
  dateWithTime.setHours(14, 0, 0, 0);
  return dateWithTime;
};

/**
 * 날짜를 API 형식으로 포맷팅 (yyyy-MM-dd HH:mm)
 * @param date 포맷팅할 날짜
 * @returns 포맷팅된 날짜 문자열 또는 빈 문자열
 */
export const formatDateForAPI = (date: Date | null | undefined): string => {
  if (!date) return '';
  return format(date, 'yyyy-MM-dd HH:mm');
};
