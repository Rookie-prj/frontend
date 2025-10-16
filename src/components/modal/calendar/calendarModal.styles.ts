import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { ModalBaseContainer } from '../container/container.styles';
import Button from '../../common/button/button';

export const CalendarContainer = styled(ModalBaseContainer)`
  height: auto;
  background: ${colors.white};
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  padding: 1.8125rem 1rem 2.6875rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;

  .react-datepicker {
    border: none;
    font-family: 'Pretendard', sans-serif;
    background: white;
    box-shadow: none;
    width: 100%;
  }

  .react-datepicker__header {
    background: white;
    border: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.375rem;
    color: ${colors.gray[700]};
    letter-spacing: -0.16px;

    text-align: left;
  }

  .react-datepicker__navigation {
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background: none;
    border-radius: 0.5rem;
    transition: background 0.2s ease;

    &:hover {
      background: ${colors.gray[50]};
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .react-datepicker__navigation--previous {
    right: 2.5rem;
    left: auto;
  }

  .react-datepicker__navigation--next {
    right: 0;
  }

  .react-datepicker__navigation-icon {
    &::before {
      border-color: ${colors.gray[700]};
      border-width: 2px 2px 0 0;
      width: 8px;
      height: 8px;
    }
  }

  .react-datepicker__month-container {
    width: 100%;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin: 0;
  }

  .react-datepicker__day-names {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 0.5rem;
  }

  .react-datepicker__day-name {
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: ${colors.gray[700]};
    text-align: center;
    letter-spacing: -0.12px;
    padding: 0.5rem 0;
    width: auto;
    margin: 0;
  }

  .react-datepicker__day {
    width: 3.125rem;
    height: 3.125rem;
    border: none;
    background: transparent;
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
    margin: 0;
    padding: 0;

    &.react-datepicker__day--selected {
      background: ${colors.green[200]};
      color: ${colors.gray[700]};
      font-weight: 700;
      border-radius: 0.75rem;

      &:hover {
        background: ${colors.green[200]};
      }
    }

    &.react-datepicker__day--outside-month {
      color: ${colors.gray[400]};
    }

    &.react-datepicker__day--today {
      background: transparent;
      color: ${colors.gray[700]};
    }
  }
`;
