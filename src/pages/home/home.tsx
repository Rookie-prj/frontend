import Category from '../../components/category/category';
import Header from '../../components/header/header';

const Home = () => {
  return (
    <div>
      <Header type="logo" />
      <Category category="home" title="Home" />
    </div>
  );
};

export default Home;
