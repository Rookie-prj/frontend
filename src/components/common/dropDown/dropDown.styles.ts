import styled from '@emotion/styled';

export const RotatingIcon = styled.img<{ isRotating: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isRotating }) => (isRotating ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
