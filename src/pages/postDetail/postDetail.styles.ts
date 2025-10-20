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

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;

  .title-content {
    flex: 1;
  }
`;

export const TitleText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: ${colors.gray[900]};
  margin: 0 0 8px 0;
  letter-spacing: -0.2px;
`;

export const TagsText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${colors.gray[300]};
  margin: 0;
  letter-spacing: -0.12px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.gray[400]};
  line-height: 18px;
  letter-spacing: -0.12px;
`;

export const InfoValue = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.gray[800]};
  line-height: 18px;
  letter-spacing: -0.12px;
`;

export const PositionSection = styled.div`
  margin-bottom: 16px;
`;

export const PositionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[800]};
  margin: 0 0 12px 0;
  line-height: 22px;
  letter-spacing: -0.16px;
`;

export const PositionCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PositionCard = styled.div`
  background: ${colors.green[100]};
  border-radius: 10px;
  padding: 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 13px;
    right: 16px;
    width: 5px;
    height: 5px;
    background: ${colors.gray[400]};
    border-radius: 50%;
  }
`;

export const PositionCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PositionCardTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[900]};
  margin: 0;
  line-height: 22px;
  letter-spacing: -0.16px;
`;

export const PositionCount = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[900]};
  line-height: 22px;
  letter-spacing: -0.16px;
`;

export const AuthorSection = styled.div`
  margin-bottom: 16px;
`;

export const AuthorTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[900]};
  margin: 0 0 12px 0;
  line-height: 22px;
  letter-spacing: -0.16px;
`;

export const AuthorCard = styled.div`
  background: ${colors.gray[70]};
  border-radius: 10px;
  padding: 16px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 52px;
    height: 1px;
    background: ${colors.gray[200]};
    transform: translateY(-50%) rotate(90deg);
  }

  &::before {
    left: 50px;
  }

  &::after {
    right: 50px;
  }
`;

export const AuthorProfile = styled.div`
  display: flex;
  gap: 17px;
  align-items: flex-start;
  margin-bottom: 12px;

  .profile-image {
    width: 66px;
    height: 66px;
    flex-shrink: 0;
  }
`;

export const AuthorInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const AuthorName = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[800]};
  margin: 0;
  line-height: 22px;
  letter-spacing: -0.16px;
`;

export const AuthorVerification = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 3px;

  span {
    font-size: 10px;
    font-weight: 500;
    color: ${colors.gray[400]};
    text-decoration: underline;
    line-height: 12px;
    letter-spacing: -0.1px;
  }
`;

export const AuthorLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${colors.gray[400]};
    line-height: 18px;
    letter-spacing: -0.12px;
  }
`;

export const AuthorStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const AuthorStatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  flex: 1;
`;

export const AuthorStatValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.gray[900]};
  line-height: 26px;
  letter-spacing: -0.36px;
`;

export const AuthorStatLabel = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: ${colors.gray[900]};
  line-height: 12px;
  letter-spacing: -0.1px;
  text-align: center;
`;

export const AuthorLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const LevelIcon = styled.div`
  width: 51px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LevelText = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  span {
    font-size: 10px;
    font-weight: 500;
    color: ${colors.gray[900]};
    line-height: 12px;
    letter-spacing: -0.1px;
  }
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
