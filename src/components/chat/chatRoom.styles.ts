import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 11px 16px;
  width: 100%;
  height: 72px;
  background-color: #f9fafb;
  position: relative;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: -1%;
  color: #101828;
  margin-bottom: 0;
`;

export const LastMessage = styled.div`
  font-weight: 500;
  font-size: ${typography.caption.caption3.fontSize};
  color: ${colors.gray[600]};
  width: 265px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  background-color: ${colors.red[300]};
  border-radius: 50%;
  position: absolute;
  top: 28px;
  right: 16px;
`;

export const BadgeText = styled.span`
  font-weight: 700;
  font-size: 8.62px;
  color: ${colors.white};
`;
