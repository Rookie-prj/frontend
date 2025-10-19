import {
  CompletenessCard,
  CardContent,
  PercentageText,
  TextContainer,
  TitleText,
  DescriptionText,
  CompletenessContainer,
} from './completenessOptions.styles';
import { PROJECT_STATUS_OPTIONS } from '../../../constants/createProject';
import { CheckIcon } from '../distanceOptions/distanceOptions.styles';
import checkIcon from '../../../assets/icons/check.svg';
interface CompletenessOptionsProps {
  selectedValue?: string;
  onSelect: (value: string) => void;
}

const CompletenessOptions = ({ selectedValue, onSelect }: CompletenessOptionsProps) => {
  return (
    <CompletenessContainer>
      {PROJECT_STATUS_OPTIONS.map((option) => (
        <CompletenessCard
          key={option.value}
          isActive={selectedValue === option.value}
          onClick={() => onSelect(option.value)}
        >
          <CardContent>
            <PercentageText>{option.percentage}</PercentageText>
            <TextContainer>
              <TitleText>{option.label}</TitleText>
              <DescriptionText>{option.description}</DescriptionText>
            </TextContainer>
            <CheckIcon isVisible={selectedValue === option.value}>
              <img src={checkIcon} alt="check" />
            </CheckIcon>
          </CardContent>
        </CompletenessCard>
      ))}
    </CompletenessContainer>
  );
};

export default CompletenessOptions;
