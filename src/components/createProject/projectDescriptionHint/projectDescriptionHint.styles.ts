// import styled from '@emotion/styled';
// import { colors } from '../../../style/colors';

// export const ProjectDescriptionHintContainer = styled.div`
//   background-color: ${colors.gray[50]};
//   border: 1px solid ${colors.gray[200]};
//   border-radius: 0.5rem;
//   padding: 0.8125rem;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0.625rem;
// `;

// export const HintText = styled.p`
//   color: ${colors.gray[600]};
//   font-size: 0.75rem;
//   font-weight: 500;
//   line-height: 1.125rem;
//   letter-spacing: -0.0075rem;
//   margin: 0;
//   white-space: pre-line;
// `;

// export const HintList = styled.ul`
//   list-style: disc;
//   margin: 0;
//   padding-left: 1.5rem;
// `;

// export const HintListItem = styled.li`
//   color: ${colors.gray[600]};
//   font-size: 0.75rem;
//   font-weight: 500;
//   line-height: 1.125rem;
//   letter-spacing: -0.0075rem;
//   margin-bottom: 0;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const ProjectDescriptionHintContainer = styled.div`
  border-radius: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.white};
  height: 6.5rem;
  padding: 0.8125rem;
  align-items: flex-start;
`;
export const HintText = styled.p`
  color: ${colors.gray[600]};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
  margin: 0;
  white-space: pre-line;
`;
export const HintList = styled.ul`
  color: var(--gray-400, #99a1af);
  list-style: disc;
  margin: 0;
  padding-left: 1rem;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
export const HintListItem = styled.li`
  color: var(--gray-400, #99a1af);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
export const HintListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
