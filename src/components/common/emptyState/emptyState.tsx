import * as S from './emptyState.styles';

interface EmptyStateProps {
  message?: string;
  icon?: string;
  subMessage?: string;
  search?: boolean;
}

const EmptyState = ({
  message = '데이터가 없습니다',
  icon,
  subMessage,
  search,
}: EmptyStateProps) => {
  return (
    <S.EmptyStateContainer>
      {icon && <S.EmptyIcon $isSearch={search} src={icon} alt="빈 상태" />}
      <S.EmptyMessage $isSearch={search}>{message}</S.EmptyMessage>
      {subMessage && <S.EmptySubMessage>{subMessage}</S.EmptySubMessage>}
    </S.EmptyStateContainer>
  );
};

export default EmptyState;
