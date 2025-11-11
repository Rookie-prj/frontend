import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
export const BaseButton = styled.button<{ variant?: 'primary' | 'gray' | 'disabled' }>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? colors.green[200] : colors.gray[10]};
  color: ${({ variant }) => {
    if (variant === 'disabled') return colors.gray[400];
    if (variant === 'gray') return colors.gray[400];
    return colors.gray[800];
  }};
  display: flex;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  align-items: center;
  white-space: nowrap;
  cursor: ${({ variant }) => (variant === 'disabled' ? 'not-allowed' : 'pointer')};
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
  border-radius: ${({ $size }) => {
    if ($size === 'medium') return '8px';
    return '0.75rem';
  }};
  line-height: 1.25rem;
  height: ${({ $size }) => {
    if ($size === 'small') return '3.125rem';
    else if ($size === 'medium') return '50px';
    else if ($size === 'large') return '3.625rem';
  }};
  padding: ${({ $size }) => {
    if ($size === 'small') return '1rem 2rem';
    else if ($size === 'large') return '1rem 9.875rem';
  }};
  max-width: ${({ $size }) => {
    if ($size === 'medium') return '343px';
    return '100%';
  }};
`;

export const HeroBannerBaseButton = styled.button`
  position: absolute;
  display: flex;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 0.65156rem;
  padding: 0.87rem 1.3rem;
  z-index: 10;
  font-size: 0.8145rem;
  line-height: 1.19456rem; /* 146.667% */
  letter-spacing: -0.00813rem;

  height: 2.3rem;
`;
export const HeroBannerSlideOneButton = styled(HeroBannerBaseButton)`
  position: absolute;
  bottom: 11.25%;
  background-color: ${colors.green[200]};
  color: ${colors.gray[800]};
  right: 5%;
  bottom: 15%;
`;

export const HeroBannerSlideTwoButton = styled(HeroBannerBaseButton)`
  top: 35%;
  right: 33%;
  background-color: ${colors.gray[800]};
  color: ${colors.white};
`;
export const HeroBannerSlideThreeButton = styled(HeroBannerBaseButton)`
  top: 45%;
  right: 33%;
  background-color: ${colors.green[200]};
  color: ${colors.gray[800]} !important;
`;
