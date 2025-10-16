import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { formatDate } from '../../../utils/dateUtils';

type Value = Date | Date[] | null;

interface CalendarComponentProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  placeholder?: string;
}

const CalendarContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CalendarInput = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ isOpen }) => (isOpen ? colors.green[200] : colors.gray[150])};
  border-radius: 0.5rem;
  background: white;
  cursor: pointer;
  font-size: 0.875rem;
  color: ${colors.gray[600]};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.green[200]};
  }
`;

const CalendarDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  border: 1px solid ${colors.gray[150]};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 0.25rem;
`;

const StyledCalendar = styled(Calendar)`
  width: 100% !important;
  border: none !important;
  font-family: 'Pretendard', sans-serif;

  .react-calendar__tile {
    font-size: 0.875rem;
    padding: 0.75rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.125rem;
  }

  .react-calendar__tile--active {
    background: ${colors.green[200]} !important;
    color: white !important;
  }

  .react-calendar__tile--now {
    background: ${colors.green[50]} !important;
    color: ${colors.green[600]} !important;
  }

  .react-calendar__tile:hover {
    background: ${colors.green[50]} !important;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: ${colors.gray[50]};
    border-bottom: 1px solid ${colors.gray[150]};
  }

  .react-calendar__navigation button {
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.gray[600]};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.25rem;

    &:hover {
      background: ${colors.gray[100]};
    }
  }

  .react-calendar__month-view__weekdays {
    background: ${colors.gray[50]};
    border-bottom: 1px solid ${colors.gray[150]};
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${colors.gray[500]};
    text-align: center;
  }
`;

const CalendarComponent = ({
  selectedDate,
  onDateChange,
  placeholder = '날짜를 선택해주세요',
}: CalendarComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      onDateChange(value);
      setIsOpen(false);
    }
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CalendarContainer>
      <CalendarInput isOpen={isOpen} onClick={handleInputClick}>
        {selectedDate ? formatDate(selectedDate) : placeholder}
      </CalendarInput>
      <CalendarDropdown isOpen={isOpen}>
        <StyledCalendar
          onChange={handleDateChange}
          value={selectedDate}
          locale="ko"
          formatDay={(locale, date) => date.getDate().toString()}
        />
      </CalendarDropdown>
    </CalendarContainer>
  );
};

export default CalendarComponent;
