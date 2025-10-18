import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const FieldContainer = styled.div`
  width: 100%;
  gap: 0.37rem;
  display: flex;
  flex-direction: column;
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.gray[700]};
  width: 100%;
  border: 1.25px solid ${colors.gray[300]};
  border-radius: 0.5rem;
  padding: 1rem;

  &:focus-within {
    border-color: ${colors.green[200]};
  }
`;

export const FieldInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${colors.gray[700]};
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  width: 100%;
  height: 100%;
  background: transparent;
  &::placeholder {
    color: ${colors.gray[300]};
  }
`;
export const FieldCharacterLimitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;
export const FieldCharacterLimit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.375rem;
  align-self: stretch;
  color: var(--gray-300, #d1d5dc);
  text-align: right;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 120% */
  letter-spacing: -0.00625rem;
`;
export const FieldCharacterLengthText = styled.span`
  color: ${colors.gray[700]};
  text-align: right;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 120% */
  letter-spacing: -0.00625rem;
`;
