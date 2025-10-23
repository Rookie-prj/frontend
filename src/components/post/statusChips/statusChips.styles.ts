import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const StatusChipsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

interface StatusChipProps {
  variant: 'progress' | 'deadline';
}

export const StatusChip = styled.div<StatusChipProps>`
  padding: 0.31rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.12px;

  ${({ variant }) => {
    switch (variant) {
      case 'progress':
        return `
          background: ${colors.gray[150]};
          color: ${colors.gray[700]};
        `;
      case 'deadline':
        return `
          background: ${colors.green[100]};
          color: ${colors.gray[800]};
        `;
      default:
        return '';
    }
  }}
`;
