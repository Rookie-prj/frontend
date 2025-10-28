import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

interface MessageWrapperProps {
  isMyMessage: boolean;
}

interface MessageBubbleProps {
  isMyMessage: boolean;
}

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')};
  gap: 16px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 16px;
`;

export const MessageBubble = styled.div<MessageBubbleProps>`
  display: inline-flex;
  align-items: center;
  padding: 11px 14px;
  min-height: 40px;
  max-width: 80%;

  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: -1%;
  color: #101828;

  background-color: ${({ isMyMessage }) => (isMyMessage ? colors.green[100] : '#FFFFFF')};
  border: ${({ isMyMessage }) => (isMyMessage ? 'none' : '1px solid #EDEFF2')};

  border-radius: ${({ isMyMessage }) =>
    isMyMessage ? '20px 4px 20px 20px' : '4px 20px 20px 20px'};

  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
`;
