import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export type ChipVariant =
  | 'default'
  | 'primary'
  | 'outlined'
  | 'defaultOutlined'
  | 'chatRoomPdf'
  | 'chatRoomProfile';
export type ChipSize = 'small' | 'medium' | 'large';

interface ChipButtonProps {
  $variant: ChipVariant;
  $size: ChipSize;
  $isActive: boolean;
}

const getChipStyles = ($variant: ChipVariant, $isActive: boolean) => {
  // primary: 항상 초록 배경, 테두리 없음
  if ($variant === 'primary') {
    return {
      background: colors.green[200],
      color: colors.gray[900],
      border: 'none',
    };
  }

  // outlined: isActive에 따라 색상 변경, 테두리는 항상 유지
  if ($variant === 'outlined') {
    return {
      background: colors.gray[100],
      color: colors.gray[500],
      border: `1px solid ${colors.gray[500]}`,
    };
  }

  if ($variant === 'chatRoomProfile') {
    return {
      background: colors.gray[100],
      color: colors.gray[600],
      border: 'none',
    };
  }

  if ($variant === 'chatRoomPdf') {
    return {
      background: colors.gray[50],
      color: colors.gray[600],
      border: `1px solid ${colors.gray[200]}`,
    };
  }

  // defaultOutlined: 회색 배경에 테두리 (isActive 무시)
  if ($variant === 'defaultOutlined') {
    if ($isActive) {
      return {
        background: colors.gray[100],
        color: colors.gray[700],
        border: `1px solid ${colors.gray[500]}`,
      };
    }
    return {
      background: colors.gray[100],
      color: colors.gray[500],
      border: 'none',
    };
  }

  // default: isActive에 따라 색상 변경, 테두리 없음
  if ($isActive) {
    return {
      background: colors.green[200],
      color: colors.gray[900],
      border: 'none',
    };
  }

  return {
    background: colors.gray[100],
    color: colors.gray[500],
    border: 'none',
  };
};

const getSizeStyles = ($size: ChipSize) => {
  switch ($size) {
    case 'small':
      return {
        padding: '8px 11px',
        height: '33px',
        fontSize: '10px', // 10px
      };
    case 'large':
      return {
        padding: '12px 14px',
        height: '35px',
        fontSize: typography.caption.caption5.fontSize, //12px
      };
    case 'medium':
    default:
      return {
        padding: '8.5px 11px',
        height: '33px',
        fontSize: typography.caption.caption4.fontSize, // 10px
      };
  }
};

export const ChipButton = styled.button<ChipButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 700;
  line-height: 1.5em;

  ${({ $variant, $isActive }) => {
    const styles = getChipStyles($variant, $isActive);
    return `
      background: ${styles.background};
      color: ${styles.color};
      border: ${styles.border};
    `;
  }}

  ${({ $size }) => {
    const sizeStyles = getSizeStyles($size);
    return `
      padding: ${sizeStyles.padding};
      min-height: ${sizeStyles.height};
      font-size: ${sizeStyles.fontSize};
    `;
  }}

  &:hover {
    opacity: 0.8;
  }
`;
