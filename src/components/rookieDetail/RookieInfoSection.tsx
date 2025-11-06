import { Rookie } from '../../models/rookie';
import RookieInfoRow from './RookieInfoRow';
import * as S from './RookieInfoSection.styles';

interface InfoField {
  label: string;
  key: keyof Rookie;
  separator?: string;
}

interface RookieInfoSectionProps {
  rookie: Rookie;
  fields?: InfoField[];
}

const defaultFields: InfoField[] = [
  { label: '세부 분야', key: 'currentStudyDetail' },
  { label: '사용 가능 툴', key: 'toolset' },
  { label: '관심주제', key: 'favoriteSubject' },
];

function RookieInfoSection({ rookie, fields = defaultFields }: RookieInfoSectionProps) {
  return (
    <S.InfoSectionContainer>
      {fields.map((field) => {
        const value = rookie[field.key];

        if (!value) return null;

        return (
          <RookieInfoRow
            key={field.key}
            label={field.label}
            value={value as string | string[]}
            separator={field.separator}
          />
        );
      })}
    </S.InfoSectionContainer>
  );
}

export default RookieInfoSection;
