import { LoadingContainer, Spinner, LoadingText } from './loading.styles';

interface LoadingProps {
  text?: string;
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Loading = ({ text = '로딩 중...', showText = false, size = 'medium' }: LoadingProps) => {
  const sizeMap = {
    small: '24px',
    medium: '40px',
    large: '60px',
  };

  return (
    <LoadingContainer>
      <Spinner style={{ width: sizeMap[size], height: sizeMap[size] }} />
      {showText && <LoadingText>{text}</LoadingText>}
    </LoadingContainer>
  );
};

export default Loading;
