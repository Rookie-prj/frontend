/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';
import { css } from '@emotion/react';
export const Text = styled.p`
  color: ${colors.gray[800]};
  font-size: ${typography.subhead.subhead3.fontSize};
  font-weight: ${typography.subhead.subhead3.fontWeight};
  line-height: ${typography.subhead.subhead3.lineHeight};
  margin-bottom: 16px;
  text-align: start;
`;

export const RedirectModalBody = css`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 26px 13px 16px 13px;
`;
