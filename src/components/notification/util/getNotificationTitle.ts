const getNotificationTitle = (message: string): string => {
  if (message.includes('당신을')) return '루키 응원 알림';
  if (message.includes('지원')) return '프로젝트 지원 알림';
  if (message.includes('댓글')) return '댓글 알림';
  if (message.includes('초대')) return '프로젝트 초대 알림';
  if (message.includes('메시지')) return '새 메시지 알림';
  if (message.includes('마감')) return '프로젝트 마감 알림';
  if (message.includes('업데이트')) return '프로젝트 업데이트 알림';
  if (message.includes('조회')) return '포트폴리오 조회 알림';
  return '알림';
};
export default getNotificationTitle;
