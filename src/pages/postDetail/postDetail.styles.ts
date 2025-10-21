import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.gray[50]};
`;

export const HeaderImage = styled.div`
  position: relative;
  width: 100%;
  height: 237px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const BookmarkInfo = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: ${colors.gray[400]};
  line-height: 12px;
  letter-spacing: -0.1px;
  margin-top: 8px;
`;

export const BottomActions = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.gray[50]};
  padding: 10px 15px;
  display: flex;
  gap: 5px;
  justify-content: center;
  border-top: 1px solid ${colors.gray[200]};
`;

export const ActionButton = styled.button`
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 58px;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled(ActionButton)`
  background: ${colors.gray[150]};
  color: ${colors.gray[800]};
  flex: 1;
  max-width: 136px;
`;

export const PrimaryButton = styled(ActionButton)`
  background: ${colors.green[200]};
  color: ${colors.gray[800]};
  flex: 1;
  max-width: 202px;
`;
