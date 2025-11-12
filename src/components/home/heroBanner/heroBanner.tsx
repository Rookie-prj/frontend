import { HeroBannerContainer, SlideBarWrapper } from './heroBanner.styles';
import slide1 from '../../../assets/img/slide-1.svg';
import slide2 from '../../../assets/img/slide-2.svg';
import slide3 from '../../../assets/img/slide-3.svg';
import SlideBar from '../slideBar/slideBar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import {
  HeroBannerSlideOneButton,
  HeroBannerSlideTwoButton,
  HeroBannerSlideThreeButton,
} from '../../common/button/button.styles';
import { ROUTES } from '../../../constants/routes';
import RedirectModal from '../../rookieDetail/redirectModal';
import { useModal } from '../../../hooks/useModal';
import CreateProject from '../../modal/createProject/createProject';
import 'swiper/css';

interface HeroBannerProps {
  totalSlides?: number;
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
}

const HeroBanner = ({ totalSlides = 3, currentSlide, onSlideChange }: HeroBannerProps) => {
  const slides = [
    { src: slide1, alt: 'slide-1' },
    { src: slide2, alt: 'slide-2' },
    { src: slide3, alt: 'slide-3' },
  ];

  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);
  const {
    isOpen: isRedirectOpen,
    handleModalOpen: openRedirect,
    handleModalClose: closeRedirect,
  } = useModal();
  const {
    isOpen: isCreateProjectModalOpen,
    handleModalOpen: openCreateProjectModal,
    handleModalClose: closeCreateProjectModal,
  } = useModal();

  const handleCreateProjectClick = () => {
    openCreateProjectModal();
  };

  // 버튼 설정을 배열로 관리
  const slideButtons = [
    {
      Button: HeroBannerSlideOneButton,
      label: '툴킷 바로가기',
      onClick: () => navigate('/toolkit'),
    },
    {
      Button: HeroBannerSlideTwoButton,
      label: '프로젝트 등록하기',
      onClick: handleCreateProjectClick,
    },
    {
      Button: HeroBannerSlideThreeButton,
      label: '프로젝트 보러가기',
      onClick: () => navigate('/explore'),
    },
  ];

  // currentSlide 변경 시 Swiper 슬라이드 이동
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== currentSlide) {
      swiperRef.current.slideTo(currentSlide);
    }
  }, [currentSlide]);

  return (
    <HeroBannerContainer>
      <Swiper
        modules={[Autoplay, Mousewheel]}
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        speed={500}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          onSlideChange(swiper.activeIndex);
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, index) => {
          const { Button, label, onClick } = slideButtons[index];

          return (
            <SwiperSlide
              key={index}
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                style={{ width: '100%', height: '100%', marginTop: '0.37rem' }}
              />
              <Button onClick={onClick}>{label}</Button>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <SlideBarWrapper>
        <SlideBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onSlideChange={onSlideChange}
        />
      </SlideBarWrapper>

      <RedirectModal
        isOpen={isRedirectOpen}
        onClose={closeRedirect}
        title="로그인 후 이용해주세요"
        redirectTo={ROUTES.login}
      />
      <CreateProject isOpen={isCreateProjectModalOpen} onClose={closeCreateProjectModal} />
    </HeroBannerContainer>
  );
};

export default HeroBanner;
