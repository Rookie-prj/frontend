import {
  HeroBannerContainer,
  SlideContainer,
  SlideImage,
  SlideBarWrapper,
} from './heroBanner.styles';
import slide1 from '../../../assets/img/slide-1.svg';
// import slide2 from '../../../assets/img/slide-2.svg';
import slide from '../../../assets/img/slide.svg';
import slide3 from '../../../assets/img/silde-3.svg';
import SlideBar from '../slideBar/slideBar';
import RegisterButton from '../registerButton/registerButton';

import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  HeroBannerSlideOneButton,
  HeroBannerSlideThreeButton,
  HeroBannerSlideTwoButton,
} from '../../common/button/button.styles';

interface HeroBannerProps {
  totalSlides?: number;
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
}

const HeroBanner = ({ totalSlides = 3, currentSlide, onSlideChange }: HeroBannerProps) => {
  const slides = [
    { src: slide1, alt: 'slide-1' },
    { src: slide, alt: 'slide-2' },
    { src: slide3, alt: 'slide-3' },
  ];

  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = totalSlides || 3;

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      onSlideChange((currentSlide + 1) % total);
    }, 2000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, total, onSlideChange]);

  // 스크롤 감지
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      if (timerRef.current) clearInterval(timerRef.current);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (Math.abs(e.deltaX) > 50) {
          const next = (currentSlide + (e.deltaX > 0 ? 1 : -1) + total) % total;
          onSlideChange(next);
        }
      }, 100);
    };

    container.addEventListener('wheel', handleWheel);
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [currentSlide, total, onSlideChange]);

  return (
    <HeroBannerContainer ref={containerRef}>
      <SlideContainer currentSlide={currentSlide}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ position: 'relative', width: '33.333%', height: '100%', flexShrink: 0 }}
          >
            <SlideImage
              src={slide.src}
              alt={slide.alt}
              slideIndex={index}
              isActive={index === currentSlide}
            />
            {index === 0 && currentSlide === 0 && (
              <HeroBannerSlideOneButton
                onClick={() => {
                  navigate('/toolkit');
                }}
              >
                툴킷 바로가기
              </HeroBannerSlideOneButton>
            )}

            {index === 1 && currentSlide === 1 && (
              <HeroBannerSlideTwoButton
                onClick={() => {
                  navigate('/toolkit');
                }}
              >
                프로젝트 등록하기
              </HeroBannerSlideTwoButton>
            )}
            {index === 2 && currentSlide === 2 && (
              <HeroBannerSlideThreeButton
                onClick={() => {
                  navigate('/toolkit');
                }}
              >
                프로젝트 보러가기
              </HeroBannerSlideThreeButton>
            )}
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
