import React from 'react';
import { StatusChipsContainer, StatusChip } from './statusChips.styles';
import { PROJECT_STATUS_OPTIONS } from '../../../constants/createProject';

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

  return (
    <StatusChipsContainer className={className}>
      <StatusChip variant="progress">{getProgressLabel()}</StatusChip>
      <StatusChip variant="deadline">{deadline}</StatusChip>
    </StatusChipsContainer>
  );
};

export default StatusChips;
