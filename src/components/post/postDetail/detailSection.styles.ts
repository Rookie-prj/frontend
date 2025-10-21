import { colors } from '../../../style/colors';
import styled from '@emotion/styled';
import { typography } from '../../../style/theme';
export const DetailContainer = styled.div`
  margin-bottom: 16px;
  padding: 1.5rem 0.31rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.gray[900]};
  display: flex;
  align-items: center;
  gap: 0.31rem;
  width: 10rem;
  text-align: right;
  line-height: 20px;
  letter-spacing: -0.14px;
  span {
    font-size: 14px;
    font-weight: 600;
    color: ${colors.gray[900]};

    line-height: 20px;
    letter-spacing: -0.14px;
  }
`;
export const DetailContent = styled.span`
  color: ${colors.gray[700]};
  font-size: ${typography.caption.caption5.fontSize};
  font-weight: ${typography.caption.caption5.fontWeight};
  line-height: ${typography.caption.caption5.lineHeight};
  letter-spacing: -0.0075rem;
`;
