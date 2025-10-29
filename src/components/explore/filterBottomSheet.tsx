import { BottomSheet } from '../common/bottomSheet';
import { Chip } from '../common/chip/chip';
import { INTEREST_FIELDS, PARTICIPATION_TYPES, FILTER_TABS } from '../../constants/filter';
import { FilterSection, FilterRow, FilterChipsContainer } from './filterBottomSheet.styles';
import { usePreventScroll } from '../../hooks/usepreventScroll';

interface FilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedInterestFields?: string[];
  selectedParticipationTypes?: string[];
  selectedProjectTypes?: string[];
  onInterestFieldToggle?: (value: string) => void;
  onParticipationTypeToggle?: (value: string) => void;
  onProjectTypeToggle?: (value: string) => void;
  onReset?: () => void;
  onConfirm?: () => void;
}

const FilterBottomSheet = ({
  isOpen,
  onClose,
  selectedInterestFields = [],
  selectedParticipationTypes = [],
  selectedProjectTypes = [],
  onInterestFieldToggle,
  onParticipationTypeToggle,
  onProjectTypeToggle,
  onReset,
  onConfirm,
}: FilterBottomSheetProps) => {
  usePreventScroll(isOpen);
  const handleReset = () => {
    onReset?.();
  };

  const handleConfirm = () => {
    onConfirm?.();
    onClose();
  };

  const handleInterestClick = (value: string) => {
    if (onInterestFieldToggle) {
      onInterestFieldToggle(value);
    }
  };

  const handleParticipationClick = (value: string) => {
    if (onParticipationTypeToggle) {
      onParticipationTypeToggle(value);
    }
  };

  const handleProjectClick = (value: string) => {
    if (onProjectTypeToggle) {
      onProjectTypeToggle(value);
    }
  };

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title="탐색 필터"
      onReset={handleReset}
      onConfirm={handleConfirm}
    >
      <FilterSection>
        <h3>프로젝트</h3>
        <FilterChipsContainer>
          <FilterRow>
            {FILTER_TABS.filter((tab) => tab.value !== 'all').map((tab) => (
              <Chip
                key={tab.value}
                label={tab.label}
                size="small"
                variant="defaultOutlined"
                isActive={selectedProjectTypes.includes(tab.value)}
                onClick={() => handleProjectClick(tab.value)}
              />
            ))}
          </FilterRow>
        </FilterChipsContainer>
      </FilterSection>

      <FilterSection>
        <h3>관심분야</h3>
        <FilterChipsContainer>
          <FilterRow>
            {INTEREST_FIELDS.slice(0, 4).map((f) => (
              <Chip
                key={f.value}
                label={f.label}
                size="small"
                variant="defaultOutlined"
                isActive={selectedInterestFields.includes(f.label)}
                onClick={() => handleInterestClick(f.label)}
              />
            ))}
          </FilterRow>
          <FilterRow>
            {INTEREST_FIELDS.slice(4, 8).map((f) => (
              <Chip
                key={f.value}
                label={f.label}
                size="small"
                variant="defaultOutlined"
                isActive={selectedInterestFields.includes(f.label)}
                onClick={() => handleInterestClick(f.label)}
              />
            ))}
          </FilterRow>
          <FilterRow>
            {INTEREST_FIELDS.slice(8, 11).map((f) => (
              <Chip
                key={f.value}
                label={f.label}
                size="small"
                variant="defaultOutlined"
                isActive={selectedInterestFields.includes(f.label)}
                onClick={() => handleInterestClick(f.label)}
              />
            ))}
          </FilterRow>
        </FilterChipsContainer>
      </FilterSection>
    </BottomSheet>
  );
};

export default FilterBottomSheet;
