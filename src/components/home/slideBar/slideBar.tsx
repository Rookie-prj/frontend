import { SlideBarContainer, SlideBarDot } from './slideBar.styles';

interface SlideBarProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (slideIndex: number) => void;
}

const SlideBar = ({ currentSlide, totalSlides, onSlideChange }: SlideBarProps) => {
  return (
    <SlideBarContainer>
      {Array.from({ length: totalSlides }, (_, index) => (
        <SlideBarDot
          key={index}
          active={index === currentSlide}
          onClick={() => onSlideChange(index)}
        />
      ))}
    </SlideBarContainer>
  );
};

export default SlideBar;
