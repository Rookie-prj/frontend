import { TEAM } from '../../../constants/createProject';
import { EndDateContainer, EndDateLabel, EndDateLine, EndDateText } from './endDate.styles';
import { formatDate } from '../../../utils/dateUtils';

interface EndDateProps {
  selectedDate?: Date | null;
}

const EndDate = ({ selectedDate }: EndDateProps) => {
  return (
    <EndDateContainer>
      <EndDateLabel>{TEAM.STEP5_END_DATE_LABEL}</EndDateLabel>
      <EndDateText>{formatDate(selectedDate)}</EndDateText>
      <EndDateLine />
    </EndDateContainer>
  );
};

export default EndDate;
