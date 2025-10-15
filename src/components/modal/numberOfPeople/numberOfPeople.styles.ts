import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { ModalBaseContainer } from '../container/container.styles';

export const NumberOfPeopleContainer = styled(ModalBaseContainer)`
  height: 23.5rem;
  background: ${colors.white};
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  padding: 1.8125rem 1rem 2.6875rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalTitle = styled.div`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.0225rem;
  color: ${colors.gray[800]};
  margin-bottom: 2rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  height: 9rem;
  overflow-y: auto;
  padding: 1.5rem 0;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.gray[400]};
  }
`;

export const OptionItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  cursor: pointer;
`;

export const OptionText = styled.div<{ isSelected: boolean }>`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? colors.gray[800] : colors.gray[300])};
`;

export const ConfirmButtonWrapper = styled.div`
  position: absolute;
  bottom: 2.6875rem;
  left: 1rem;
  right: 1rem;
  height: 3.125rem;
`;
