import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = (date: Date | null | undefined): string => {
  if (!date) return '';

  return format(date, 'M월 d일', { locale: ko });
};
