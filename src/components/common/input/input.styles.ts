import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

// export const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.375rem;
//   width: 100%;
// `;

// export const InputWrapper = styled.div`
//   position: relative; /* ✅ x 아이콘 absolute 배치를 위한 기준 */
//   width: 100%;
//   height: 2.875rem;
// `;

// export const InputField = styled.input`
//   width: 100%;
//   height: 100%;
//   color: ${colors.gray[700]};
//   font-size: 0.875rem;
//   font-weight: 500;
//   padding: 0 2.5rem 0 1rem; /* ✅ 오른쪽에 아이콘 자리 확보 */
//   border: 1.25px solid ${colors.gray[300]};
//   border-radius: 0.5rem;
//   background: transparent;

//   &::placeholder {
//     color: ${colors.gray[300]};
//   }

//   &:focus {
//     outline: none;
//     border-color: ${colors.green[200]};
//   }
// `;

// export const ClearButton = styled.img`
//   position: absolute;
//   right: 0.75rem;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 1.25rem;
//   height: 1.25rem;
//   border-radius: 50%;
//   background: ${colors.gray[150]};
//   padding: 0.25rem;
//   cursor: pointer;
// `;
// export const InputCharacterLimit = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

export const InputContainer = styled.div`
  width: 100%;
  gap: 0.37rem;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
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

export const InputField = styled.input`
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

export const InputCharacterLimit = styled.div`
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
