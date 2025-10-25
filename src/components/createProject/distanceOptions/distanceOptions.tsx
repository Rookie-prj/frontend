import {
  CheckIcon,
  DistanceIcon,
  DistanceOption,
  DistanceOptionsContainer,
  DistanceSubText,
  DistanceText,
} from './distanceOptions.styles';
import checkIcon from '../../../assets/icons/check.svg';

interface DistanceOption {
  value: string;
  label: string;
  description?: string;
  icon: string;
}

interface DistanceOptionsProps {
  options: DistanceOption[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
  fontWeight?: 600 | 700;
}

const DistanceOptions = ({
  options,
  selectedValue = '',
  onSelect = () => {},
  fontWeight = 600,
}: DistanceOptionsProps) => {
  return (
    <DistanceOptionsContainer>
      {options.map((option) => (
        <DistanceOption
          key={option.value}
          isActive={selectedValue === option.value}
          onClick={() => onSelect(option.value)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <DistanceIcon isActive={selectedValue === option.value}>
              <img src={option.icon} alt={option.label} />
            </DistanceIcon>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <DistanceText fontWeight={fontWeight}>{option.label}</DistanceText>
              <DistanceSubText>{option.description}</DistanceSubText>
            </div>
          </div>
          <CheckIcon isVisible={selectedValue === option.value}>
            <img src={checkIcon} alt="check" />
          </CheckIcon>
        </DistanceOption>
      ))}
    </DistanceOptionsContainer>
  );
};

export default DistanceOptions;
