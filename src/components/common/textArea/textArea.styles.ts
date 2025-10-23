import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const TextAreaContainer = styled.div`
  display: flex;
  height: 5.125rem;
  padding: 0.625rem 1.0625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border: 1.25px solid ${colors.gray[300]};
  border-radius: 0.5rem;
`;

export const TextAreaField = styled.textarea`
  color: var(--gray-700, #364153);
  font-size: 0.875rem;
  width: 100%;
  height: 100%;
  font-style: normal;
  resize: none;
  font-weight: 500;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.00875rem;
  text-align: left;
  &:focus {
    border-color: ${colors.green[200]};
  }

  &::placeholder {
    color: ${colors.gray[300]};
  }
`;
