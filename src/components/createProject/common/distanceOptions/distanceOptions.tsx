import {
  CheckIcon,
  DistanceIcon,
  DistanceOption,
  DistanceOptionsContainer,
  DistanceText,
} from './distanceOptions.styles';
import checkIcon from '../../../../assets/icons/check.svg';

interface DistanceOption {
  value: string;
  label: string;
  icon: string;
}

interface DistanceOptionsProps {
  options: DistanceOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const DistanceOptions = ({ options, selectedValue, onSelect }: DistanceOptionsProps) => {
  return (
    <DistanceOptionsContainer>
      {options.map((option) => (
        <DistanceOption
          key={option.value}
          isActive={selectedValue === option.value}
          onClick={() => onSelect(option.value)}
        >
          <DistanceIcon isActive={selectedValue === option.value}>
            <img src={option.icon} alt={option.label} />
          </DistanceIcon>
          <DistanceText>{option.label}</DistanceText>
          <CheckIcon isVisible={selectedValue === option.value}>
            <img src={checkIcon} alt="check" />
          </CheckIcon>
        </DistanceOption>
      ))}
    </DistanceOptionsContainer>
  );
};

export default DistanceOptions;
