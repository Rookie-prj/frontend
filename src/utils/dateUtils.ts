export const formatDate = (date: Date | null | undefined): string => {
  if (!date) return '';

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${month}월 ${day}일`;
};
