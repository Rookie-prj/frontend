import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const RookieCardContainer = styled.div<{ isExplore?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  border-radius: ${(props) => (props.isExplore ? '1.75rem 0.75rem 1.75rem 0.75rem' : '0.75rem')};
  border: 0.5px solid ${colors.gray[150]};
  background: ${colors.white};
  min-height: ${(props) => (props.isExplore ? '215px' : 'auto')};
`;
export const RookieTitleWrapper = styled.div<{ isExplore?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => (props.isExplore ? '1.75rem 0.5rem 0 0' : '0.5rem 0.5rem 0 0')};
  position: relative;
  padding-top: 0.75rem;
  width: 100%;
  height: 7.125rem;
  border-bottom: 1px solid ${colors.gray[150]};
  background: ${colors.gray[150]};
`;
export const RookieIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const RookieName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray[950]};
  text-align: center;
  padding-top: 0.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.00875rem;
`;
export const RookieDepartmentText = styled.p`
  color: ${colors.gray[700]};
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const RookieYearText = styled.span`
  color: ${colors.gray[700]};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const RookieSchoolTextWrapper = styled.div<{ isExplore?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.06rem;
  flex-direction: row;
  padding-bottom: ${(props) => (props.isExplore ? '10px' : '1.06rem')};
`;
export const RookieSchoolText = styled.p`
  color: ${colors.gray[500]};
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.75rem;
  letter-spacing: -0.00625rem;
`;
export const RookieDepartmentTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 1.375rem;
  padding: 0.3125rem 0.5625rem;
  border-radius: 62.4375rem;
  background: ${colors.green[200]};
`;
export const RookieDepartmentTextContainer = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
`;

export const RookieFavoriteSubjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 10px 10px 10px;
`;

export const RookieFavoriteSubjectChip = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.5625rem;
  align-items: center;
  border-radius: 62.4375rem;
  background: ${colors.gray[150]};
  color: ${colors.gray[600]};
  font-size: 10px;
  font-weight: 700;
  line-height: 0.75rem;
  letter-spacing: -0.00625rem;
`;
