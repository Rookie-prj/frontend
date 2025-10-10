import styled from '@emotion/styled';
import { colors } from '../../style/colors';
export const NavBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 23.438rem;
  left: 50%;
  transform: translateX(-50%);
  height: 4.9375rem;
  border-top: 1px solid var(--gray-150, #edeff2);
  background: #fafbfe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.62rem;
  padding-bottom: 1.56rem;
  z-index: 1000;
`;
export const LeftNavBarGroup = styled.div`
  display: flex;
  gap: 2.5rem;
  padding-left: 3rem;
`;
export const RightNavBarGroup = styled.div`
  display: flex;

  gap: 2rem;
  padding-right: 2rem;
`;

export const NavBarItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: ${({ isActive }) => (isActive ? colors.gray[600] : colors.gray[400])};

  font-size: 0.75rem;
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0075rem;
`;
export const NavBarPlus = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 3.125rem;
  height: 3.125rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 1.25rem;
  background: ${colors.green[200]};
  cursor: pointer;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  z-index: 10;
`;
