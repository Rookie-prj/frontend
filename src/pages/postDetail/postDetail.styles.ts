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

export const ProjectDescription = styled.div`
  margin-bottom: 16px;
`;

export const DescriptionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.gray[900]};
  margin: 0 0 12px 0;
  line-height: 20px;
  letter-spacing: -0.14px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 172px;
    height: 2px;
    background: ${colors.gray[900]};
  }
`;

export const DescriptionContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.gray[900]};
  line-height: 24px;
  letter-spacing: -0.14px;
  white-space: pre-wrap;
  margin-top: 24px;
`;

export const PreferencesSection = styled.div`
  margin-bottom: 16px;
`;

export const PreferencesTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[900]};
  margin: 0 0 16px 0;
  line-height: 22px;
  letter-spacing: -0.16px;
`;

export const PreferencesItem = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PreferencesLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.gray[400]};
  margin-bottom: 8px;
  line-height: 20px;
  letter-spacing: -0.14px;
`;

export const PreferencesValue = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const DistanceChip = styled.div`
  background: ${colors.green[100]};
  color: ${colors.gray[600]};
  padding: 2px 5px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.12px;
`;

export const ToolsChip = styled.div`
  background: ${colors.green[100]};
  color: ${colors.gray[700]};
  padding: 2px 5px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.12px;
`;

export const MethodChip = styled.div`
  background: ${colors.green[100]};
  color: ${colors.gray[700]};
  padding: 2px 5px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.12px;
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
  position: fixed;
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
