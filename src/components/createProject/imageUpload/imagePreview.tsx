import React from 'react';
import {
  ImagePreviewContainer,
  ImageItem,
  RemoveButton,
  ImagePreviewImage,
} from './imagePreview.styles';
import deleteIcon from '../../../assets/icons/delete.svg';

export interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

interface ImagePreviewProps {
  images: ImageFile[];
  onRemove: (id: string) => void;
  maxImages?: number;
  showRemoveButton?: boolean;
  imageSize?: 'small' | 'medium' | 'large';
  layout?: 'grid' | 'horizontal' | 'vertical';
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  images,
  onRemove,
  maxImages = 3,
  showRemoveButton = true,
  imageSize = 'medium',
  layout = 'grid',
}) => {
  if (images.length === 0) return null;

  return (
    <ImagePreviewContainer layout={layout}>
      {images.slice(0, maxImages).map((image) => (
        <ImageItem key={image.id}>
          <ImagePreviewImage src={image.preview} alt={`preview ${image.id}`} />
          {showRemoveButton && (
            <RemoveButton onClick={() => onRemove(image.id)}>
              <img src={deleteIcon} alt="remove" />
            </RemoveButton>
          )}
        </ImageItem>
      ))}
      {images.length > maxImages && (
        <ImageItem>
          <ImagePreviewImage
            style={{
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '0.75rem',
              fontWeight: '500',
            }}
          >
            +{images.length - maxImages}
          </ImagePreviewImage>
        </ImageItem>
      )}
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
