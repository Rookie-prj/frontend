import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { ModalOverlay, ModalBaseContainer, ModalTitle } from '../container/container.styles';
import Button from '../../common/button/button';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: Date) => void;
  selectedDate?: Date | null;
}

const CalendarContainer = styled(ModalBaseContainer)`
  background: ${colors.white};
  width: 100%;
  max-width: 375px;
  height: 542px;
  position: relative;
  padding: 1.8125rem 1rem 2.6875rem 1rem;
`;

const CalendarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const StyledCalendar = styled(Calendar)`
  width: 100% !important;
  border: none !important;
  font-family: 'Pretendard', sans-serif;
  background: white !important;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0;
  }

  .react-calendar__navigation__label {
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.375rem;
    color: ${colors.gray[700]};
    letter-spacing: -0.16px;
    background: none !important;
    border: none !important;
    padding: 0;
  }

  .react-calendar__navigation__arrow {
    width: 2.5rem;
    height: 2.5rem;
    background: none !important;
    border: none !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    transition: background 0.2s ease;

    &:hover {
      background: ${colors.gray[50]} !important;
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .react-calendar__month-view__weekdays {
    background: white !important;
    border: none !important;
    margin-bottom: 0.5rem;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5rem 0;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: ${colors.gray[700]};
    text-align: center;
    letter-spacing: -0.12px;
    text-decoration: none !important;
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
  }

  .react-calendar__tile {
    width: 3.125rem !important;
    height: 3.125rem !important;
    border: none !important;
    background: transparent !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${colors.gray[700]};
    letter-spacing: -0.14px;
    transition: all 0.2s ease;
    border-radius: 0;
    margin: 0 !important;
    padding: 0 !important;

    &:hover {
      background: ${colors.green[50]} !important;
      border-radius: 0.75rem;
    }
  }

  .react-calendar__tile--active {
    background: ${colors.green[200]} !important;
    color: ${colors.gray[700]} !important;
    font-weight: 700 !important;
    border-radius: 0.75rem !important;
  }

  .react-calendar__tile--now {
    background: transparent !important;
    color: ${colors.gray[700]} !important;
  }

  .react-calendar__tile--neighboringMonth {
    color: ${colors.gray[400]} !important;
  }

  .react-calendar__tile--neighboringMonth:hover {
    background: ${colors.green[50]} !important;
    border-radius: 0.75rem;
  }
`;

const ConfirmButton = styled(Button)`
  position: absolute;
  bottom: 2.6875rem;
  left: 1rem;
  right: 1rem;
  background: ${colors.green[200]};
  color: ${colors.gray[800]};
  border: none;

  &:hover {
    background: ${colors.green[300]};
  }
`;

const CalendarModal = ({ isOpen, onClose, onDateSelect, selectedDate }: CalendarModalProps) => {
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(selectedDate || null);

  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      setTempSelectedDate(value);
    }
  };

  const handleConfirm = () => {
    if (tempSelectedDate) {
      onDateSelect(tempSelectedDate);
    }
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <CalendarContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>마감일을 선택해주세요</ModalTitle>

        <CalendarWrapper>
          <StyledCalendar
            onChange={handleDateChange}
            value={tempSelectedDate}
            locale="ko"
            formatDay={(locale, date) => date.getDate().toString()}
            showNeighboringMonth={true}
            calendarType="gregory"
          />
        </CalendarWrapper>

        <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
      </CalendarContainer>
    </ModalOverlay>
  );
};

export default CalendarModal;
