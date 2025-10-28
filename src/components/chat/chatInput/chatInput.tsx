import React, { useState } from 'react';
import * as S from './chatInput.styles';
import rightArrow from '../../../assets/icons/rightArrow.svg';
import chatupload from '../../../assets/icons/chatupload.svg';
import chatupload_filled from '../../../assets/icons/chatupload_filled.svg';
interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

/**
 * 채팅 메시지 입력 컴포넌트
 * - 메시지 입력 및 전송 기능
 * - Enter 키로 전송, 또는 전송 버튼 클릭
 */
function ChatInput({
  onSendMessage,
  placeholder = '메세지 입력',
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <S.InputContainer>
      <S.InputWrapper>
        <S.MessageInput
          type="text"
          placeholder={placeholder}
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
        />
        <div onClick={handleSend} style={{ cursor: 'pointer' }}>
          <img src={message.trim() ? chatupload_filled : chatupload} alt="send" />
        </div>
      </S.InputWrapper>
    </S.InputContainer>
  );
}

export default ChatInput;
