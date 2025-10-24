import {
  HeroBannerContainer,
  SlideContainer,
  SlideImage,
  SlideBarWrapper,
} from './heroBanner.styles';
import slide1 from '../../../assets/img/slide-1.svg';
import slide2 from '../../../assets/img/slide-2.svg';
import SlideBar from '../slideBar/slideBar';
import RegisterButton from '../registerButton/registerButton';

import { useNavigate } from 'react-router-dom';
import { HeroBannerButton } from '../../common/button/button.styles';
interface HeroBannerProps {
  totalSlides?: number;
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
}

const HeroBanner = ({ totalSlides = 4, currentSlide, onSlideChange }: HeroBannerProps) => {
  const slides = [
    { src: slide1, alt: 'slide-1' },
    { src: slide2, alt: 'slide-2' },
  ];

  const navigate = useNavigate();

  return (
    <HeroBannerContainer>
      <SlideContainer currentSlide={currentSlide}>
        {slides.map((slide, index) => (
          <div key={index} style={{ position: 'relative', width: '50%', height: '100%' }}>
            <SlideImage
              src={slide.src}
              alt={slide.alt}
              slideIndex={index}
              isActive={index === currentSlide}
            />
            {index === 0 && currentSlide === 0 && (
              <HeroBannerButton
                onClick={() => {
                  navigate('/toolkit');
                }}
              >
                툴킷 바로가기
              </HeroBannerButton>
            )}
            {index === 1 && currentSlide === 1 && <RegisterButton />}
          </div>
        ))}
      </SlideContainer>
      <SlideBarWrapper>
        <SlideBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onSlideChange={onSlideChange}
        />
      </SlideBarWrapper>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
