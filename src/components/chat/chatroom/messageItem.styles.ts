import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

interface MessageWrapperProps {
  isMyMessage: boolean;
}

interface MessageBubbleProps {
  isMyMessage: boolean;
}

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')};
  gap: 13px;
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

export const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ParticipantName = styled.div`
  font-size: ${typography.caption.caption5.fontSize};
  font-weight: ${typography.caption.caption5.fontWeight};
  line-height: ${typography.caption.caption5.lineHeight};
  letter-spacing: ${typography.caption.caption5.letterSpacing};
  color: ${colors.gray[700]};
`;

export const ProfileButton = styled.button`
  font-size: ${typography.caption.caption5.fontSize};
  font-weight: ${typography.caption.caption5.fontWeight};
  line-height: ${typography.caption.caption5.lineHeight};
  letter-spacing: ${typography.caption.caption5.letterSpacing};
  color: ${colors.gray[600]};
  padding: 12px 24.5px;
  border-radius: 999px;
  background-color: ${colors.green[200]};
`;

export const IsProfileMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
`;
