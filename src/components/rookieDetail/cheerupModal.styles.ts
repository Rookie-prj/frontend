import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { typography } from '../../style/theme';
import { colors } from '../../style/colors';

export const ModalBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 13px;
  width: 260px;
`;

export const Text = styled.p`
  font-size: ${typography.subhead.subhead3.fontSize};
  font-weight: ${typography.subhead.subhead3.fontWeight};
  line-height: ${typography.subhead.subhead3.lineHeight};
  color: ${colors.gray[800]};
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: ${typography.caption.caption3.fontSize};
  font-weight: ${typography.caption.caption3.fontWeight};
  line-height: ${typography.caption.caption3.lineHeight};
  color: ${colors.gray[500]};
  text-align: center;
  margin-bottom: 28px;
`;
