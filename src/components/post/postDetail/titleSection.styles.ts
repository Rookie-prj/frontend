import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.62rem;

  .title-content {
    flex: 1;
  }
`;

export const TitleText = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 30px;
  color: ${colors.gray[900]};

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
