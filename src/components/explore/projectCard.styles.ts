import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const ProjectCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 261px;
  border-radius: 8px;
  border: 1.25px solid ${colors.gray[150]};
  background: ${colors.white};
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 131px;
  border-radius: 8px 8px 0 0;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const ImageDimOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 8px 8px 0 0;
`;

export const IconButtonWrapper = styled.div<{
  iconSrc?: string;
  onClick?: (e: React.MouseEvent) => void;
}>`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 2px 4px;
  cursor: pointer;
  z-index: 2;

  ${(props) =>
    props.iconSrc &&
    `
    background-color: ${colors.white}; /* 원하는 색상으로 변경 */
    mask: url(${props.iconSrc}) no-repeat center;
    -webkit-mask: url(${props.iconSrc}) no-repeat center;
  `}

  &:hover {
    opacity: 0.8;
  }
`;

export const ProjectTitle = styled.h3`
  position: absolute;
  top: 81px;
  left: 16px;
  width: 240px;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.375em;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;
`;

export const WriterInfo = styled.div`
  position: absolute;
  top: 106px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.white};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: -0.01em;
  z-index: 1;
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 106px;
  right: 14px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${colors.white};
  border: 2px solid ${colors.white};
  z-index: 1;
`;

export const TagsWrapper = styled.div`
  position: absolute;
  top: 145px;
  left: 15px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 1;
`;

export const Tag = styled.div<{
  backgroundColor?: string;
  isdoneType?: boolean;
  textColor?: string;
  isActive?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 5px;
  height: 20px;
  border-radius: 6.49px;
  background: ${(props) => {
    if (props.isActive === false) {
      return colors.red[100];
    }
    if (props.isActive) {
      return colors.green[200];
    }
    if (!props.isActive) {
      return colors.gray[150];
    }
    return colors.green[200];
  }};
  color: ${(props) => props.textColor || colors.gray[800]};
  font-size: 10px;
  font-weight: 700;
  line-height: 1.19em;
  white-space: nowrap;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 177px;
  left: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const InfoIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const InfoText = styled.span`
  color: ${colors.gray[600]};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5em;
  letter-spacing: -0.01em;
`;

export const DetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const DetailLabel = styled.div`
  color: ${colors.gray[950]};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  white-space: nowrap;
`;

export const DetailContent = styled.div`
  flex: 1;
  color: ${colors.gray[600]};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
