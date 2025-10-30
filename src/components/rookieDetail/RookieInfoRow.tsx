import * as S from './RookieInfoRow.styles';

interface RookieInfoRowProps {
  label: string;
  value: string | string[];
  separator?: string;
}

function RookieInfoRow({ label, value, separator = ', ' }: RookieInfoRowProps) {
  // 배열인 경우 separator로 결합
  const displayValue = Array.isArray(value) ? value.join(separator) : value.replace(/,/g, ', ');

  return (
    <S.InfoRowContainer>
      <S.Label>{label}</S.Label>
      <S.Value>{displayValue}</S.Value>
    </S.InfoRowContainer>
  );
}

export default RookieInfoRow;
