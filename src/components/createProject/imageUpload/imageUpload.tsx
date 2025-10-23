import React, { useRef, useState, useCallback } from 'react';
import {
  ImageUploadContainer,
  ImageUploadButton,
  ImageCountText,
  ImageUploadWrapper,
} from './imageUpload.styles';
import ImagePreview, { ImageFile } from './imagePreview';
import camera from '../../../assets/icons/camera.svg';

interface ImageUploadProps {
  maxCount: number;
  onImagesChange?: (images: File[]) => void;
  showPreview?: boolean;
  previewSize?: 'small' | 'medium' | 'large';
  previewLayout?: 'grid' | 'horizontal' | 'vertical';
  disabled?: boolean;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  maxCount,
  onImagesChange,
  showPreview = true,
  previewSize = 'medium',
  previewLayout = 'grid',
  disabled = false,
  className,
}) => {
  const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const createImageFile = useCallback(
    (file: File): ImageFile => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      file,
      preview: URL.createObjectURL(file),
    }),
    [],
  );

  const handleImageSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      if (files.length === 0) return;

      const newImageFiles = files.map(createImageFile);
      const updatedImages = [...imageFiles, ...newImageFiles].slice(0, maxCount);

      setImageFiles(updatedImages);
      onImagesChange?.(updatedImages.map((img) => img.file));

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [imageFiles, maxCount, onImagesChange, createImageFile],
  );

  const handleRemoveImage = useCallback(
    (id: string) => {
      const updatedImages = imageFiles.filter((img) => {
        if (img.id === id) {
          URL.revokeObjectURL(img.preview);
          return false;
        }
        return true;
      });

      setImageFiles(updatedImages);
      onImagesChange?.(updatedImages.map((img) => img.file));
    },
    [imageFiles, onImagesChange],
  );

  const handleClick = useCallback(() => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  }, [disabled]);

  return (
    <div className={className}>
      {imageFiles.length === 0 ? (
        <ImageUploadContainer
          onClick={handleClick}
          disabled={disabled}
          hasImages={false}
          style={{
            opacity: disabled ? 0.6 : 1,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          <img src={camera} alt="camera" />
          <div>
            사진추가 ({imageFiles.length}/{maxCount})
          </div>
        </ImageUploadContainer>
      ) : (
        <ImageUploadWrapper>
          {showPreview && (
            <ImagePreview
              images={imageFiles}
              onRemove={handleRemoveImage}
              maxImages={maxCount}
              imageSize={previewSize}
              layout={previewLayout}
            />
          )}
          <ImageUploadButton
            onClick={handleClick}
            disabled={disabled}
            style={{
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          >
            <img src={camera} alt="camera" />
            <ImageCountText>
              ({imageFiles.length}/{maxCount})
            </ImageCountText>
          </ImageUploadButton>
        </ImageUploadWrapper>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageSelect}
        disabled={disabled}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUpload;
