import { Rookie } from '../../models/rookie';
import RookieInfoRow from './RookieInfoRow';
import * as S from './RookieInfoSection.styles';
import {
  TOOLSET_OPTIONS,
  CURRENT_STUDY_DETAIL_OPTIONS,
  FAVORITE_SUBJECT,
} from '../../constants/signup';

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

// value를 label로 변환하는 함수
const convertValueToLabel = (value: string, fieldKey: keyof Rookie): string => {
  if (!value) return value;

  const values = value.split(',').map((v) => v.trim());

  const convertedLabels = values.map((val) => {
    switch (fieldKey) {
      case 'toolset': {
        // TOOLSET_OPTIONS에서 찾기 (디자인 그룹 포함)
        const allTools: Array<{ value: string; label: string }> = [];
        TOOLSET_OPTIONS.forEach((option) => {
          if (option.toolsGroup1) {
            allTools.push(...option.toolsGroup1);
          }
          if (option.toolsGroup2) {
            allTools.push(...option.toolsGroup2);
          }
          if (option.toolsGroup3) {
            allTools.push(...option.toolsGroup3);
          }
          if (option.value && option.label) {
            allTools.push({ value: option.value, label: option.label });
          }
        });
        const tool = allTools.find((t) => t.value === val);
        return tool ? tool.label : val;
      }
      case 'currentStudyDetail': {
        const detail = CURRENT_STUDY_DETAIL_OPTIONS.find((d) => d.value === val);
        return detail ? detail.label : val;
      }
      case 'favoriteSubject': {
        const subject = FAVORITE_SUBJECT.find((s) => s.value === val);
        return subject ? subject.label : val;
      }
      default:
        return val;
    }
  });

  return convertedLabels.join(', ');
};

function RookieInfoSection({ rookie, fields = defaultFields }: RookieInfoSectionProps) {
  return (
    <S.InfoSectionContainer>
      {fields.map((field) => {
        const value = rookie[field.key];

        if (!value) return null;

        // value를 label로 변환
        const convertedValue = convertValueToLabel(value as string, field.key);

        return (
          <RookieInfoRow
            key={field.key}
            label={field.label}
            value={convertedValue}
            separator={field.separator}
          />
        );
      })}
    </S.InfoSectionContainer>
  );
}

export default RookieInfoSection;
