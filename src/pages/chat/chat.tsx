import { useSearchParams } from 'react-router-dom';
import { ChipBar } from '../../components/common/chipbar/chipBar';
import Header from '../../components/header/header';
import { CHAT_TABS, ChatTabValue } from '../../constants/filter';
import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import useChatRooms from '../../hooks/useChatRooms';
import ChatCardList from '../../components/chat/chatCardList';
import { BASE_URL } from '../../api/httpclient';
import { API_ENDPOINT } from '../../constants/apiEndpoint';
import { CHAT_MESSAGES } from '../../constants/chat';
import { ChatEmpty } from '../../components/chat';

const Chat = () => {
  const [searchParams] = useSearchParams();
  const chatType = searchParams.get('roleType') as ChatTabValue;
  const [stompClient, setStompClient] = useState<Client | null>(null);

  const { chatRooms, isLoading, error } = useChatRooms();

  return (
    <div>
      <Header type="title" title="채팅" />
      <div style={{ display: 'flex', padding: '18px 16px', marginBottom: '3px' }}>
        <ChipBar tabs={CHAT_TABS} type={chatType} gap="8px" />
      </div>
      {chatRooms && chatRooms.length > 0 && <ChatCardList chatRooms={chatRooms} />}
      {chatRooms && chatRooms.length === 0 && <ChatEmpty message={CHAT_MESSAGES.EMPTY_CHAT_LIST} />}
    </div>
  );
};

export default Chat;
