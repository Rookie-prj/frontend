import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const ImageUploadContainer = styled.button<{ disabled?: boolean; hasImages?: boolean }>`
  display: flex;
  height: 3.125rem;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  color: ${({ hasImages }) => (hasImages ? colors.gray[600] : colors.gray[600])};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.00875rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1.25px solid ${colors.gray[150]};
  background: ${colors.white};
  cursor: pointer;
`;

export const ImageUploadButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  width: 3.125rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.gray[150]};
  background: ${colors.white};
  cursor: pointer;
`;

export const ImageCountText = styled.p`
  color: ${colors.gray[600]};
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 0.75rem;
  letter-spacing: -0.00625rem;
  margin: 0;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const ImageItem = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid ${colors.gray[200]};
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
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  img {
    width: 0.75rem;
    height: 0.75rem;
    filter: invert(1);
  }
`;
