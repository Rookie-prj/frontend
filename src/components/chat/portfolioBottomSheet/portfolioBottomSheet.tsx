import * as S from './portfolioBottomSheet.styles';
import { usePreventScroll } from '../../../hooks/usepreventScroll';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useRef } from 'react';
import chatAlbum from '../../../assets/icons/chatAlbum.svg';
import chatFile from '../../../assets/icons/chatFile.svg';
interface PortfolioBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onFileSelected: (file: File) => void;
}

const PortfolioBottomSheet = ({ isOpen, onClose, onFileSelected }: PortfolioBottomSheetProps) => {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(onClose);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelected(file);
      onClose();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelected(file);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <S.Backdrop onClick={onClose} />
      <S.BottomSheetContainer ref={ref}>
        <S.Handle />
        <S.Title>포트폴리오 보내기</S.Title>
        <S.OptionList>
          {/* 숨겨진 파일 input (PDF) */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {/* 숨겨진 이미지 input - 모바일에서 갤러리 직접 열림 */}
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <S.OptionItem onClick={handleFileClick}>
            <S.OptionLeft>
              <S.IconWrapper>
                <img src={chatFile} alt="파일에서 선택" />
              </S.IconWrapper>
              <S.OptionText>파일에서 선택</S.OptionText>
            </S.OptionLeft>
            <S.ChevronIcon>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M18 15L23 20L18 25"
                  stroke="#1E2939"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </S.ChevronIcon>
          </S.OptionItem>

          <S.OptionItem onClick={handleImageClick}>
            <S.OptionLeft>
              <S.IconWrapper>
                <img src={chatAlbum} alt="앨범에서 선택" />
              </S.IconWrapper>
              <S.OptionText>앨범에서 선택</S.OptionText>
            </S.OptionLeft>
            <S.ChevronIcon>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M18 15L23 20L18 25"
                  stroke="#1E2939"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </S.ChevronIcon>
          </S.OptionItem>
        </S.OptionList>
      </S.BottomSheetContainer>
    </>
  );
};

export default PortfolioBottomSheet;
