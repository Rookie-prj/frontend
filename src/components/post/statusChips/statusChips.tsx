import React from 'react';
import { StatusChipsContainer, StatusChip } from './statusChips.styles';

export interface StatusChipsProps {
  progress: string;
  deadline: string;
  className?: string;
}

const StatusChips: React.FC<StatusChipsProps> = ({ progress, deadline, className }) => {
  return (
    <StatusChipsContainer className={className}>
      <StatusChip variant="progress">{progress}</StatusChip>
      <StatusChip variant="deadline">{deadline}</StatusChip>
    </StatusChipsContainer>
  );
};

export default StatusChips;
