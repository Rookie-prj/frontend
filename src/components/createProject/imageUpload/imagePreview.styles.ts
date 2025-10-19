import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

type LayoutType = 'grid' | 'horizontal' | 'vertical';

export const ImagePreviewContainer = styled.div<{ layout: LayoutType }>`
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;

  ${({ layout }) => {
    switch (layout) {
      case 'horizontal':
        return `
          flex-direction: row;
          flex-wrap: nowrap;
        `;
      case 'vertical':
        return `
          flex-direction: column;
          align-items: flex-start;
        `;
      case 'grid':
      default:
        return `
          flex-wrap: nowrap;
        `;
    }
  }}
`;

export const ImageItem = styled.div`
  position: relative;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid ${colors.gray[200]};
`;

export const ImagePreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: 0.3125rem;
  top: 0.3125rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  img {
    width: 1rem;
    height: 1rem;
  }
`;
