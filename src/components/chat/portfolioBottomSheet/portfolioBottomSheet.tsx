import * as S from './portfolioBottomSheet.styles';
import { usePreventScroll } from '../../../hooks/usepreventScroll';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useRef } from 'react';

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
          {/* 숨겨진 이미지 input */}
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <S.OptionItem onClick={handleFileClick}>
            <S.OptionLeft>
              <S.IconWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 11V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H12"
                    stroke="#45BE67"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 9H19V15M13 15H19M16 9V15"
                    stroke="#66F285"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="5"
                    y="6"
                    width="15"
                    height="13"
                    rx="2"
                    stroke="#45BE67"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.88 9.71L9.38 12.95C9.76 13.43 10.49 13.43 10.87 12.95L12.13 11.29C12.51 10.81 13.24 10.81 13.62 11.29L17.13 15.29"
                    stroke="#66F285"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
