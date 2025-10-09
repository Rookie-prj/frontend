import { useState } from 'react';
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

interface HeroBannerProps {
  totalSlides?: number;
}

const HeroBanner = ({ totalSlides = 4 }: HeroBannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: slide1, alt: 'slide-1' },
    { src: slide2, alt: 'slide-2' },
  ];

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <HeroBannerContainer>
      <SlideContainer currentSlide={currentSlide}>
        {slides.map((slide, index) => (
          <>
            <SlideImage
              src={slide.src}
              alt={slide.alt}
              slideIndex={index}
              isActive={index === currentSlide}
            />
            {index === 1 && currentSlide === 1 && <RegisterButton />}
          </>
        ))}
      </SlideContainer>
      <SlideBarWrapper>
        <SlideBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onSlideChange={handleSlideChange}
        />
      </SlideBarWrapper>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
