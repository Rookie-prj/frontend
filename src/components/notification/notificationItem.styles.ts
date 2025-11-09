import styled from '@emotion/styled';
import { colors } from '../../style/colors';

interface NotificationItemContainerProps {
  isUnread: boolean;
}

export const NotificationItemContainer = styled.div<NotificationItemContainerProps>`
  display: flex;
  gap: 10px;
  padding: 14px 13px;
  background-color: ${({ isUnread }) => (isUnread ? colors.gray[70] : 'none')};
  align-items: flex-start;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.2px 3.66px;
  flex-shrink: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  position: relative;
`;

export const TitleAndMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: #99a1af;
`;

export const Message = styled.p`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43em;
  letter-spacing: -0.01em;
  color: #364153;
  max-width: 298px;
  word-break: keep-all;
  margin: 0;
`;

export const TimeStamp = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: #d1d5dc;
`;
