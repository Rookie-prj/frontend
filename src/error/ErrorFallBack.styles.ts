import styled from '@emotion/styled';
import { colors } from '../style/colors';
import { typography } from '../style/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorMessage = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[500]};
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ErrorDescription = styled.p`
  font-size: 16px;
  color: ${colors.gray[500]};
  margin-bottom: 32px;
`;

export const Button = styled.button`
  margin-top: 16px;
`;
