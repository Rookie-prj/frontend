import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export const RookieCardContainer = styled.div<{ type?: 'explore' | 'default' | 'detail' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  border: 0.5px solid ${colors.gray[150]};
  background: ${colors.white};
  min-height: ${(props) => (props.type ? '215px' : 'auto')};
  ${(props) => {
    if (props.type === 'explore') {
      return `
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05);
    border-radius: 1.75rem 0.75rem 1.75rem 0.75rem;
    min-height: 220.6px;
  `;
    } else if (props.type === 'default') {
      return `
        box-shadow: none;
        border-radius: 0.75rem;
        min-height: auto;
      `;
    } else if (props.type === 'detail') {
      return `
        box-shadow: none;
        border-radius: 0;
        border-bottom: none;
      `;
    }
  }}
`;
export const RookieTitleWrapper = styled.div<{ type?: 'explore' | 'default' | 'detail' }>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 0.75rem;
  width: 100%;
  height: 7.125rem;
  border-bottom: 1px solid ${colors.gray[150]};
  background: ${colors.gray[150]};

  ${(props) => {
    if (props.type === 'explore') {
      return `
    border-radius: 1.75rem 0.5rem 0 0;
  `;
    } else if (props.type === 'default') {
      return `
        border-radius: 0.5rem 0.5rem 0 0;
      `;
    } else if (props.type === 'detail') {
      return `
        background: ${colors.gray[70]};
        height:140px;
      `;
    }
  }}
`;
export const RookieIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const RookieName = styled.div<{ type?: 'explore' | 'default' | 'detail' }>`
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
  ${(props) => {
    if (props.type === 'detail') {
      return `
    font-size: ${typography.headline.headline2.fontSize};
  `;
    }
  }}
`;
export const RookieDepartmentText = styled.p<{ type?: 'explore' | 'default' | 'detail' }>`
  color: ${colors.gray[700]};
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  ${(props) => {
    if (props.type === 'detail') {
      return `
    font-size: ${typography.caption.caption5.fontSize};
  `;
    }
  }}
`;

export const RookieYearText = styled.span<{ type?: 'explore' | 'default' | 'detail' }>`
  color: ${colors.gray[700]};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${(props) => {
    if (props.type === 'detail') {
      return `
    font-size: ${typography.caption.caption5.fontSize};
  `;
    }
  }}
`;
export const RookieSchoolTextWrapper = styled.div<{ type?: 'explore' | 'default' | 'detail' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.06rem;
  flex-direction: row;
  ${(props) => {
    if (props.type === 'explore') {
      return `
    padding-bottom: 10px;
  `;
    } else if (props.type === 'default') {
      return `
        padding-bottom: 1.06rem;
      `;
    }
  }}
`;
export const RookieSchoolText = styled.p<{ type?: 'explore' | 'default' | 'detail' }>`
  color: ${colors.gray[500]};
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.75rem;
  letter-spacing: -0.00625rem;
  ${(props) => {
    if (props.type === 'detail') {
      return `
    font-size: ${typography.caption.caption5.fontSize};
  `;
    }
  }}
`;
export const RookieDepartmentTextWrapper = styled.div<{ type?: 'explore' | 'default' | 'detail' }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem 0.5625rem;
  border-radius: 62.4375rem;
  background: ${colors.green[200]};
  ${(props) => {
    if (props.type === 'detail') {
      return `
    padding: 6px 12px;
  `;
    }
  }}
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
  max-height: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
