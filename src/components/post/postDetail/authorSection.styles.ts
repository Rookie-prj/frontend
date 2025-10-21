import { colors } from '../../../style/colors';
import styled from '@emotion/styled';
export const AuthorContainer = styled.div`
  margin-bottom: 1.38rem;
`;

export const AuthorTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.gray[900]};
  margin-bottom: 0.5rem;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
`;

export const AuthorCard = styled.div`
  background: ${colors.gray[70]};
  border-radius: 0.625rem;
  padding-top: 1.38rem;
padding-bottom: 1.57rem;
  }
`;

export const AuthorProfile = styled.div`
  display: flex;
  gap: 1.0625rem;
  align-items: flex-start;

  margin-left: 0.81rem;
`;

export const AuthorInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
`;

export const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.gray[800]};
  margin: 0;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
`;

export const AuthorLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  span {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${colors.gray[400]};
    line-height: 1.125rem;
    letter-spacing: -0.0075rem;
  }
`;

export const AuthorStats = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  margin-top: 0.75rem;

  justify-content: center;
  .response-rate {
    border-left: 1.5px solid ${colors.gray[200]};
    border-right: 1px solid ${colors.gray[200]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AuthorStatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1875rem;
  justify-content: center;
  flex: 1;
`;

export const AuthorStatValue = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.gray[900]};
  line-height: 1.625rem;
  letter-spacing: -0.0225rem;
`;

export const AuthorStatLabel = styled.div`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${colors.gray[900]};
  line-height: 0.75rem;
  letter-spacing: -0.00625rem;
  text-align: center;
`;

export const AuthorLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  height: 100%;
  flex: 1;
`;

export const LevelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-7px);
`;

export const LevelText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;

  span {
    font-size: 0.625rem;
    font-weight: 500;
    color: ${colors.gray[900]};
    line-height: 0.75rem;
    letter-spacing: -0.00625rem;
  }
`;
