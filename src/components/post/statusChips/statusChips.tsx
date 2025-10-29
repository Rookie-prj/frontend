import React from 'react';
import { StatusChipsContainer, StatusChip } from './statusChips.styles';
import { PROJECT_STATUS_OPTIONS } from '../../../constants/createProject';
import { differenceInDays, startOfDay, parseISO } from 'date-fns';

export interface StatusChipsProps {
  progress: string | null;
  deadline: string;
  className?: string;
}

const StatusChips: React.FC<StatusChipsProps> = ({ progress, deadline, className }) => {
  const getProgressLabel = () => {
    const statusOption = PROJECT_STATUS_OPTIONS.find((option) => option.value === progress);
    return statusOption ? statusOption.label : '처음부터 시작';
  };

  const calculateDday = (endDate: string) => {
    const today = startOfDay(new Date());
    const end = startOfDay(parseISO(endDate));
    const diffDays = differenceInDays(end, today);

    if (diffDays > 0) {
      return `D-${diffDays}`;
    } else if (diffDays === 0) {
      return 'D-day';
    } else {
      return `D+${Math.abs(diffDays)}`;
    }
  };

  return (
    <StatusChipsContainer className={className}>
      <StatusChip variant="progress">{getProgressLabel()}</StatusChip>
      <StatusChip variant="deadline">{calculateDday(deadline)}</StatusChip>
    </StatusChipsContainer>
  );
};

export default StatusChips;
