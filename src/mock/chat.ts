import { API_ENDPOINT } from '../constants/apiEndpoint';
import { HttpResponse, http } from 'msw';
import { ChatMessage } from '../models/chat';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export const mockChatRooms = [
  {
    id: '1',
    participants: [
      {
        userId: 1,
        name: '나',
        profileImageUrl: '',
      },
      {
        userId: 2,
        name: '춤추는 사자',
        profileImageUrl: '',
      },
    ],
    createdAt: '2025-01-20T10:30:00.000Z',
    unreadCount: 3,
    lastMessage: {
      id: 'msg1',
      roomId: '1',
      senderId: 2,
      content: '아 디자인은 피그마로 진행하시는 거죠?',
      messageType: 'TEXT',
      createdAt: '2025-01-20T11:00:00.000Z',
      isRead: false,
    },
  },
  {
    id: '2',
    participants: [
      {
        userId: 1,
        name: '나',
        profileImageUrl: '',
      },
      {
        userId: 3,
        name: '코딩하는 고양이',
        profileImageUrl: '',
      },
    ],
    createdAt: '2025-01-19T15:20:00.000Z',
    unreadCount: 0,
    lastMessage: {
      id: 'msg2',
      roomId: '2',
      senderId: 1,
      content: '네 맞습니다!',
      messageType: 'TEXT',
      createdAt: '2025-01-19T15:30:00.000Z',
      isRead: true,
    },
  },
  {
    id: '3',
    participants: [
      {
        userId: 1,
        name: '나',
        profileImageUrl: '',
      },
      {
        userId: 4,
        name: '프론트엔드 개발자',
        profileImageUrl: '',
      },
      {
        userId: 5,
        name: '백엔드 개발자',
        profileImageUrl: '',
      },
    ],
    createdAt: '2025-01-18T09:15:00.000Z',
    unreadCount: 12,
    lastMessage: {
      id: 'msg3',
      roomId: '3',
      senderId: 4,
      content: '리액트 쿼리를 사용하면 데이터 fetching이 편해집니다.',
      messageType: 'TEXT',
      createdAt: '2025-01-18T10:00:00.000Z',
      isRead: false,
    },
  },
];

// 채팅 메시지 모킹 데이터 (roomId별로 다름)
export const mockChatMessages = {
  '1': [
    {
      id: 'msg1-1',
      roomId: '1',
      senderId: 2,
      content: '안녕하세요! 프로젝트에 관심이 생겼어요.',
      messageType: 'TEXT',
      createdAt: '2025-01-20T10:30:00.000Z',
      isRead: false,
    },
    {
      id: 'msg1-2',
      roomId: '1',
      senderId: 1,
      content: '안녕하세요! 감사합니다. 어떤 부분이 궁금하신가요?',
      messageType: 'TEXT',
      createdAt: '2025-01-20T10:32:00.000Z',
      isRead: true,
    },
    {
      id: 'msg1-3',
      roomId: '1',
      senderId: 2,
      content: '아 디자인은 피그마로 진행하시는 거죠?',
      messageType: 'TEXT',
      createdAt: '2025-01-20T11:00:00.000Z',
      isRead: false,
    },
  ],
  '2': [
    {
      id: 'msg2-1',
      roomId: '2',
      senderId: 3,
      content: '리액트 공부 같이 할 사람 있어요?',
      messageType: 'TEXT',
      createdAt: '2025-01-19T15:20:00.000Z',
      isRead: true,
    },
    {
      id: 'msg2-2',
      roomId: '2',
      senderId: 1,
      content: '네 맞습니다!',
      messageType: 'TEXT',
      createdAt: '2025-01-19T15:30:00.000Z',
      isRead: true,
    },
  ],
  '3': [
    {
      id: 'msg3-1',
      roomId: '3',
      senderId: 4,
      content: '오늘 회의 시간 정해볼까요?',
      messageType: 'TEXT',
      createdAt: '2025-01-18T09:15:00.000Z',
      isRead: false,
    },
    {
      id: 'msg3-2',
      roomId: '3',
      senderId: 5,
      content: '저는 저녁 7시 이후 가능합니다.',
      messageType: 'TEXT',
      createdAt: '2025-01-18T09:20:00.000Z',
      isRead: false,
    },
    {
      id: 'msg3-3',
      roomId: '3',
      senderId: 4,
      content: '리액트 쿼리를 사용하면 데이터 fetching이 편해집니다.',
      messageType: 'TEXT',
      createdAt: '2025-01-18T10:00:00.000Z',
      isRead: false,
    },
  ],
};

export const chatRooms = http.get(`${API_BASE_URL}${API_ENDPOINT.CHAT_ROOMS}`, () => {
  return HttpResponse.json(mockChatRooms, {
    status: 200,
  });
});

export const chatRoomMessages = http.get(
  `${API_BASE_URL}${API_ENDPOINT.CHAT_ROOM_MESSAGES}/:roomId/messages/all`,
  ({ params }) => {
    const { roomId } = params;
    const messages = mockChatMessages[roomId as keyof typeof mockChatMessages] || [];

    return HttpResponse.json(messages, {
      status: 200,
    });
  },
);

// 채팅방에 메시지 전송 (roomId가 있을 때)
export const sendMessageToRoom = http.post(
  `${API_BASE_URL}${API_ENDPOINT.CHAT_SEND_TO_ROOM}/:roomId/messages`,
  async ({ params, request }) => {
    const { roomId } = params;
    const content = await request.json();

    // 모킹: 새 메시지 추가 (실제로는 서버에서 생성된 메시지 반환)
    const newMessage = {
      id: `msg-${Date.now()}`,
      roomId,
      senderId: 1, // 현재 사용자 ID (실제로는 토큰에서 가져옴)
      content: content as string,
      messageType: 'TEXT' as const,
      fileUrl: '',
      fileName: '',
      fileType: '',
      profileUserId: 0,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    if (mockChatMessages[roomId as keyof typeof mockChatMessages]) {
      mockChatMessages[roomId as keyof typeof mockChatMessages].push(newMessage as any);
    }

    return HttpResponse.json(newMessage, {
      status: 200,
    });
  },
);

// 새 채팅방에 메시지 전송 (roomId가 없을 때)
export const sendMessage = http.post(
  `${API_BASE_URL}${API_ENDPOINT.CHAT_SEND}`,
  async ({ request }) => {
    const url = new URL(request.url);
    const targetUserId = url.searchParams.get('targetUserId');
    const content = await request.json();

    // 모킹: 새 채팅방 생성
    const newRoomId = `room-${Date.now()}`;
    const newMessage = {
      id: `msg-${Date.now()}`,
      roomId: newRoomId,
      senderId: 1, // 현재 사용자 ID
      content: content as string,
      messageType: 'TEXT' as const,
      fileUrl: '',
      fileName: '',
      fileType: '',
      profileUserId: 0,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    // 새 채팅방에 메시지 추가
    (mockChatMessages as any)[newRoomId] = [newMessage];

    // 전체 ChatMessage 객체를 반환 (roomId 포함)
    return HttpResponse.json(newMessage, {
      status: 200,
    });
  },
);

// 메시지 읽음 처리
export const markMessagesAsRead = http.put(
  `${API_BASE_URL}${API_ENDPOINT.CHAT_ROOM_MESSAGES}/:roomId/messages/read`,
  ({ params }) => {
    const { roomId } = params;

    // 해당 채팅방의 메시지들을 읽음 처리
    const messages = mockChatMessages[roomId as keyof typeof mockChatMessages];
    if (messages) {
      messages.forEach((message: ChatMessage) => {
        message.isRead = true;
      });
    }

    return HttpResponse.json({ message: '메시지 읽음 처리 완료' }, { status: 200 });
  },
);
