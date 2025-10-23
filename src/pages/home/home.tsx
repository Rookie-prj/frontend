import { useState } from 'react';
import Header from '../../components/header/header';
import CategoryBar from '../../components/category/category';
import HeroBanner from '../../components/home/heroBanner/heroBanner';
import ProjectCategorySection from '../../components/home/projectCategorySection/projectCategorySection';
import { CategoryValue } from '../../constants/category';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCategoryChange = (category: CategoryValue) => {
    console.log('선택된 카테고리:', category);
  };

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div style={{ overflowY: 'auto', paddingBottom: '4.9375rem' }}>
      <Header type="logo" />
      <CategoryBar group="HOME" onCategoryChange={handleCategoryChange} />
      <HeroBanner currentSlide={currentSlide} onSlideChange={handleSlideChange} />
      <ProjectCategorySection layout="row" />
    </div>
  );
};

export default Home;
