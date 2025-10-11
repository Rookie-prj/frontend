import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10.75rem;
  height: 11.9375rem;
  border-radius: 0.5rem;
  border: 1.25px solid ${colors.gray[100]};
  background: ${colors.white};
  cursor: pointer;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  gap: 0.63rem;
`;
interface PostCardTitleWrapperProps {
  backgroundImage?: string;
  backgroundColor?: string;
}

export const PostCardTitleWrapper = styled.div<PostCardTitleWrapperProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem 0.5rem 0 0;
  position: relative;
  justify-content: flex-end;
  width: 10.75rem;
  height: 7.125rem;
  border-bottom: 1px solid ${colors.gray[150]};
  flex-shrink: 0;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    border-radius: 0.5rem 0.5rem 0 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 'rgba(67, 179, 99, 0.6)';
    z-index: 1;
  }
`;
export const PostCardTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  margin-bottom: 0.81rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const PostCardTitleText = styled.p`
  overflow: hidden;
  color: ${colors.white};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; /* 146.667% */
  letter-spacing: -0.00938rem;
`;
export const PostCardAuthor = styled.p`
  color: ${colors.white};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 120% */
  letter-spacing: -0.00625rem;
`;

export const PostCardStartStatusWrapper = styled.div`
  display: flex;

  border-radius: 0.40538rem;

  padding-left: 1rem;

  justify-content: flex-start;

  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: center;
  gap: 0.375rem;
`;
export const PostCardRecruitmentStatus = styled.div`
  display: flex;
  height: 1.25rem;
  padding: 0.3125rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.40538rem;
  background: ${colors.green[100]};
  color: ${colors.gray[800]};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PostCardStartStatus = styled.div`
  color: ${colors.gray[700]};
  border-radius: 0.40538rem;
  background: ${colors.gray[150]};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  height: 1.25675rem;
  padding: 0.3125rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`;
export const PostCardRecruitTeamWrapper = styled.div`
  display: flex;
  padding-bottom: 0.81rem;
  margin-left: 0.95rem;
  gap: 0.87rem;
`;
export const PostCardRecruitTeamPeople = styled.p`
  color: ${colors.gray[500]};
  font-size: 0.75rem;
  font-style: normal;
  flex-direction: row;
  gap: 0.38rem;
  font-weight: 700;
  align-items: center;
  display: flex;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
