import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
export const PreferencesContainer = styled.div`
  margin-top: 1.25rem;
`;

export const PreferencesTitle = styled.h3`
  color: ${colors.gray[950]};

  font-size: ${typography.subhead.subhead5.fontSize};
  font-weight: ${typography.subhead.subhead5.fontWeight};
  line-height: ${typography.subhead.subhead5.lineHeight};
  letter-spacing: ${typography.subhead.subhead5.letterSpacing};
`;

export const PreferencesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 0.56rem;
`;

export const PreferencesLabel = styled.div`
  color: ${colors.gray[400]};
  font-size: ${typography.caption.caption5.fontSize};
  font-weight: ${typography.caption.caption5.fontWeight};
  line-height: ${typography.caption.caption5.lineHeight};
  letter-spacing: ${typography.caption.caption5.letterSpacing};
`;

export const ToolsChipsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const PreferencesValue = styled.div`
  display: flex;

  flex-wrap: wrap;
`;

export const DistanceChip = styled.div`
  background: ${colors.green[100]};
  color: ${colors.gray[600]};
  padding: 2px 5px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.12px;
`;

export const ToolsChip = styled.div`
  background: ${colors.green[100]};
  color: ${colors.gray[700]};
  padding: 2px 5px;
  gap: 0.25rem;
  display: flex;
  border-radius: 6px;
  font-size: ${typography.caption.caption5.fontSize};
  font-weight: ${typography.caption.caption5.fontWeight};
  line-height: ${typography.caption.caption5.lineHeight};
  letter-spacing: ${typography.caption.caption5.letterSpacing};
`;

export const MethodChip = styled.div`
  background: ${colors.green[100]};
  color: ${colors.gray[700]};
  padding: 2px 5px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.12px;
`;
