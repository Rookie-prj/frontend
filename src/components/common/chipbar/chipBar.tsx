import { ScrollBar } from '../scrollBar';
import { Chip } from '../chip/chip';
import QueryLink from '../../../components/common/queryLink';

interface FilterChipBarProps<T extends readonly { value: string; label: string }[]> {
  tabs: T;
  type: string | null;
  gap?: string;
}

export const ChipBar = <T extends readonly { value: string; label: string }[]>({
  tabs,
  type,
  gap = '8px',
}: FilterChipBarProps<T>) => {
  return (
    <ScrollBar gap={gap}>
      {tabs.map((tab) => (
        <QueryLink key={tab.value} extraQuery={{ roleType: tab.value }}>
          <Chip
            key={tab.value}
            label={tab.label}
            size="medium"
            variant={type === tab.value ? 'primary' : 'default'}
          />
        </QueryLink>
      ))}
    </ScrollBar>
  );
};
