import styled from '@emotion/styled';

export const HeroBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const SlideContainer = styled.div<{ currentSlide: number }>`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({ currentSlide }) => -currentSlide * 50}%);
  transition: transform 0.5s ease-in-out;
`;

export const SlideImage = styled.img<{ slideIndex: number; isActive: boolean }>`
  width: 100%;
  height: 100%;
  margin-top: '0.37rem';
  }};
`;

export const SlideBarWrapper = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 2rem;
  z-index: 10;
`;
