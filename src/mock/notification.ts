import { API_ENDPOINT } from '../constants/apiEndpoint';
import { HttpResponse, http } from 'msw';
import { NotificationList } from '../models/notification';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

// 모킹 알림 데이터
export const mockNotifications: NotificationList = [
  {
    id: 1,
    message: '춤추는 사자님이 회원님의 프로젝트에 지원했습니다.',
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5분 전
    read: false,
  },
  {
    id: 2,
    message: '코딩하는 고양이님이 회원님의 게시글에 댓글을 남겼습니다.',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30분 전
    read: false,
  },
  {
    id: 3,
    message: '프론트엔드 개발자님이 회원님을 프로젝트에 초대했습니다.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2시간 전
    read: false,
  },
  {
    id: 4,
    message: '회원님이 지원한 "AI 기반 학습 플랫폼 개발" 프로젝트가 마감되었습니다.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5시간 전
    read: true,
  },
  {
    id: 5,
    message: '백엔드 개발자님이 회원님에게 메시지를 보냈습니다.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1일 전
    read: true,
  },
  {
    id: 6,
    message: '회원님이 북마크한 "블록체인 기반 투표 시스템" 프로젝트가 업데이트 되었습니다.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2일 전
    read: true,
  },
  {
    id: 7,
    message: '디자이너님이 회원님의 포트폴리오를 조회했습니다.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3일 전
    read: true,
  },
];

// 읽지 않은 알림만 필터링
const getUnreadNotifications = () => {
  return mockNotifications.filter((notification) => !notification.read);
};

// 읽지 않은 알림 조회 API
export const allNotifications = http.get(`${API_BASE_URL}${API_ENDPOINT.NOTIFICATIONS_ALL}`, () => {
  const unreadList = getUnreadNotifications();

  return HttpResponse.json(mockNotifications, {
    status: 200,
  });
});

// 알림 읽음 처리 API
export const markNotificationAsRead = http.patch(
  `${API_BASE_URL}/api/notifications/:id/read`,
  ({ params }) => {
    const { id } = params;
    const notification = mockNotifications.find((n) => n.id === Number(id));

    if (!notification) {
      return HttpResponse.json({ message: '알림을 찾을 수 없습니다.' }, { status: 404 });
    }

    notification.read = true;

    return HttpResponse.json(notification, {
      status: 200,
    });
  },
);
