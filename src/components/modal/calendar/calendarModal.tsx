import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '../../../style/colors';
import { ModalOverlay, ModalTitle } from '../container/container.styles';
import Button from '../../common/button/button';
import LeftArrow from '../../../assets/icons/leftArrow.svg';
import { CalendarContainer, CalendarWrapper } from './calendarModal.styles';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: Date) => void;
  selectedDate?: Date | null;
}

const CalendarModal = ({ isOpen, onClose, onDateSelect, selectedDate }: CalendarModalProps) => {
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(selectedDate || null);

  const handleDateChange = (date: Date | null) => {
    setTempSelectedDate(date);
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

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: any) => {
    const months = [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ];

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: '1rem',
            lineHeight: '1.375rem',
            color: colors.gray[700],
            letterSpacing: '-0.16px',
          }}
        >
          {date.getFullYear()} {months[date.getMonth()]}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <button
            type="button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              border: 'none',
              background: 'none',
              cursor: prevMonthButtonDisabled ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.5rem',
              transition: 'background 0.2s ease',
              opacity: prevMonthButtonDisabled ? 0.3 : 1,
            }}
            onMouseEnter={(e) => {
              if (!prevMonthButtonDisabled) {
                e.currentTarget.style.background = colors.gray[50];
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none';
            }}
          >
            <img src={LeftArrow} alt="이전 달" style={{ transform: 'rotate(180deg)' }} />
          </button>
          <button
            type="button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              border: 'none',
              background: 'none',
              cursor: nextMonthButtonDisabled ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.5rem',
              transition: 'background 0.2s ease',
              opacity: nextMonthButtonDisabled ? 0.3 : 1,
            }}
            onMouseEnter={(e) => {
              if (!nextMonthButtonDisabled) {
                e.currentTarget.style.background = colors.gray[50];
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none';
            }}
          >
            <img src={LeftArrow} alt="다음 달" />
          </button>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <CalendarContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>마감일을 선택해주세요</ModalTitle>

        <CalendarWrapper>
          <DatePicker
            selected={tempSelectedDate}
            onChange={handleDateChange}
            inline
            showPopperArrow={false}
            calendarStartDay={0}
            formatWeekDay={(nameOfDay) => nameOfDay.charAt(0)}
            locale={ko}
            renderCustomHeader={renderCustomHeader}
          />
        </CalendarWrapper>

        <Button onClick={handleConfirm}>확인</Button>
      </CalendarContainer>
    </ModalOverlay>
  );
};

export default CalendarModal;
