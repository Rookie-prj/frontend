import { useSearchParams } from 'react-router-dom';
import { ChipBar } from '../../components/common/chipbar/chipBar';
import Header from '../../components/header/header';
import { CHAT_TABS, ChatTabValue } from '../../constants/filter';
import { useEffect, useState } from 'react';
// import SockJS from 'sockjs-client';
// import { Client } from '@stomp/stompjs';
import useChatRooms from '../../hooks/useChatRooms';
import ChatRoomList from '../../components/chat/chatRoomList';
import { BASE_URL } from '../../api/httpclient';
import { API_ENDPOINT } from '../../constants/apiEndpoint';
import { CHAT_MESSAGES } from '../../constants/chat';
import { ChatEmpty } from '../../components/chat';

const Chat = () => {
  const [searchParams] = useSearchParams();
  const chatType = searchParams.get('roleType') as ChatTabValue;
  // const [stompClient, setStompClient] = useState<Client | null>(null);
  const { chatRooms, isLoading } = useChatRooms();

  // 웹소켓 연결 (주석처리)
  // useEffect(() => {
  //   const socket = new SockJS(`${BASE_URL}${API_ENDPOINT.WS_CHAT}`);
  //   const client = new Client({
  //     webSocketFactory: () => socket,
  //     reconnectDelay: 5000,
  //     debug: function (str) {
  //       console.log('STOMP:', str);
  //     },
  //     onConnect: () => {
  //       console.log('웹소켓 연결 성공');
  //       setStompClient(client);
  //     },
  //     onStompError: (frame) => {
  //       console.log('웹소켓 연결 실패', frame);
  //     },
  //   });

  //   console.log('웹소켓 연결 시도');
  //   client.activate();

  //   return () => {
  //     if (client.connected) {
  //       client.deactivate();
  //     }
  //   };
  // }, []);

  return (
    <div>
      <Header type="title" title="채팅" />
      <div style={{ display: 'flex', padding: '18px 16px', marginBottom: '3px' }}>
        <ChipBar tabs={CHAT_TABS} type={chatType} gap="8px" />
      </div>
      {chatRooms && chatRooms.length > 0 && <ChatRoomList chatRooms={chatRooms} />}
      {chatRooms && chatRooms.length === 0 && <ChatEmpty message={CHAT_MESSAGES.EMPTY_CHAT_LIST} />}
    </div>
  );
};

export default Chat;
