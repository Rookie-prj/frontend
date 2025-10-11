import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

const HeroBannerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(91deg, #2b4161 6.94%, #162437 91.63%);
  margin-top: 1.13rem;
  height: 4.8125rem;
  padding-left: 1.94rem;
`;
export const FireText = styled.span`
  color: ${colors.red[300]};
  font-weight: 700;
`;
export const Title = styled.h4`
  font-weight: 700;
  color: ${colors.gray[50]};
  margin-top: 1.12rem;
`;
export const SubTitle = styled.p`
  color: ${colors.gray[300]};
  font-size: 0.625rem;
  font-style: normal;
  margin-bottom: 1.44rem;
  font-weight: 500;
  line-height: 0.75rem;
  letter-spacing: -0.00625rem;
`;
export const FireIcon = styled.img`
  position: absolute;
  right: 1rem;
  bottom: -1rem;
`;
export default HeroBannerContainer;
