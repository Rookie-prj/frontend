import { ViewAllContainer, ViewAllTitle, ViewAllButton } from './viewAllSection.styles';
import { ROUTES } from '../../../constants/routes';
import rightArrow from '../../../assets/icons/rightArrow.svg';

interface ViewAllButtonProps {
  title: string;
  onClick: () => void;
  route?: keyof typeof ROUTES;
}

const ViewAllSection = ({ title, onClick }: ViewAllButtonProps) => {
  return (
    <ViewAllContainer onClick={onClick}>
      <ViewAllTitle>{title}</ViewAllTitle>
      <ViewAllButton>
        전체보기
        <img src={rightArrow} alt="right-arrow" />
      </ViewAllButton>
    </ViewAllContainer>
  );
};

export default ViewAllSection;
