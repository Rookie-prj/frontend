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
