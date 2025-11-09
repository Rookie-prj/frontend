import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const InputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInputField = styled.input<{ hasValue: boolean }>`
  width: 100%;
  height: 2.3125rem;
  border-radius: 0.5rem;
  background: var(--gray-100, #f3f4f6);
  padding: 0.5rem ${({ hasValue }) => (hasValue ? '2.5rem' : '0.97rem')} 0.5rem 0.69rem;
  border: none;
  outline: none;
  &::placeholder {
    color: ${colors.gray[400]};
  }
`;

export const BackButton = styled.button`
  margin-right: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[900]};
  letter-spacing: -0.00875rem;
  white-space: nowrap;
`;

export const DeleteIconButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.44rem;
  margin-bottom: 1.31rem;
`;
