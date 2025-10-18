import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

type LayoutType = 'grid' | 'horizontal' | 'vertical';
type SizeType = 'small' | 'medium' | 'large';

const sizeMap = {
  small: '3rem',
  medium: '5rem',
  large: '8rem',
};

export const ImagePreviewContainer = styled.div<{ layout: LayoutType }>`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  ${({ layout }) => {
    switch (layout) {
      case 'horizontal':
        return `
          flex-direction: row;
          flex-wrap: wrap;
        `;
      case 'vertical':
        return `
          flex-direction: column;
          align-items: flex-start;
        `;
      case 'grid':
      default:
        return `
          flex-wrap: wrap;
        `;
    }
  }}
`;

export const ImageItem = styled.div<{ size: SizeType }>`
  position: relative;
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid ${colors.gray[200]};
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ImagePreviewImage = styled.img<{ size: SizeType }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 0.75rem;
    height: 0.75rem;
    filter: invert(1);
  }
`;
