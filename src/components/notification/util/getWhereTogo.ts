const getWhereToGo = (message: string, supporterId?: number, projectId?: number): string => {
  if (message.includes('당신을') && supporterId) return `/explore/rookie/${supporterId}`;
  if (message.includes('프로젝트') && projectId) return `/post/${projectId}`;
  if (message.includes('댓글')) return '/notification'; // 임시 경로
  if (message.includes('초대')) return '/notification'; // 임시 경로
  if (message.includes('메시지')) return '/chat'; // 채팅 페이지로
  if (message.includes('마감')) return '/notification'; // 임시 경로
  if (message.includes('업데이트')) return '/notification'; // 임시 경로
  if (message.includes('조회')) return '/notification'; // 임시 경로

  // 기본값: 알림 페이지로
  return '/notification';
};

export default getWhereToGo;
