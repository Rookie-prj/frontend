import * as S from './emptyState.styles';

interface EmptyStateProps {
  message?: string;
  icon?: string;
  subMessage?: string;
}

const EmptyState = ({ message = '데이터가 없습니다', icon, subMessage }: EmptyStateProps) => {
  return (
    <S.EmptyStateContainer>
      {icon && <S.EmptyIcon src={icon} alt="빈 상태" />}
      <S.EmptyMessage>{message}</S.EmptyMessage>
      {subMessage && <S.EmptySubMessage>{subMessage}</S.EmptySubMessage>}
    </S.EmptyStateContainer>
  );
};

export default EmptyState;
