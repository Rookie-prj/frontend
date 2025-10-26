import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const BaseButton = styled.button<{ variant?: 'primary' | 'gray' }>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? colors.green[200] : colors.gray[10]};
  color: ${colors.gray[800]};
  width: 100%;
  display: flex;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
`;
export const ButtonContainer = styled(BaseButton)<{ $size?: 'small' | 'medium' | 'large' }>`
  width: ${({ $size }) => {
    return '100%';
  }};
  font-size: ${({ $size }) => {
    if ($size === 'small') return '0.875rem';
    else if ($size === 'medium') return '14px';
    else if ($size === 'large') return '1rem';
  }};
  justify-content: center;
  border-radius: 0.75rem;
  line-height: 1.25rem;
  height: ${({ $size }) => {
    if ($size === 'small') return '3.125rem';
    else if ($size === 'medium') return '43px';
    else if ($size === 'large') return '3.625rem';
  }};
  padding: ${({ $size }) => {
    if ($size === 'small') return '1rem 2rem';
    else if ($size === 'large') return '1rem 9.875rem';
  }};
    &:disabled {
    cursor: not-allowed;
  }
`;

export const HeroBannerButton = styled(BaseButton)`
  position: absolute;
  bottom: 45px;
  border-radius: 0.65156rem;
  right: 20px;
  z-index: 10;
  display: inline-flex;

  height: 2.3rem;
  font-size: 0.8145rem;
  line-height: 1.19456rem; /* 146.667% */
  letter-spacing: -0.00813rem;
  padding: 0.86875rem 1.30313rem;
  justify-content: center;
  align-items: center;
  gap: 0.543rem;
`;
