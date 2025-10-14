import styled from '@emotion/styled';
import { ModalBaseContainer } from '../container/container.styles';
import { colors } from '../../../style/colors';

export const CreateProjectContainer = styled(ModalBaseContainer)`
  background: ${colors.white};
  width: 100%;
  max-width: 23.4375rem;
`;
export const CreateProjectTitle = styled.div`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.0225rem;
  color: ${colors.gray[800]};
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
  margin: 2.37rem 0;
`;

export const GroupItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const GroupContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 0.62rem;
  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    letter-spacing: -0.01rem;
    color: ${colors.gray[900]};
  }
  p {
    font-size: 0.75rem;
    color: ${colors.gray[600]};
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem; /* 150% */
    letter-spacing: -0.0075rem;
  }
`;
