import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';
import CalendarModal from '../../../components/modal/calendar/calendarModal';
import {
  StepContainer,
  BaseContainer,
  BaseContainerWithSpaceBetween,
} from '../../../components/container/container.styles';
import BackDrop from '../../../components/common/backDrop/backDrop';
import { StepTitle } from './steps.styles';
import Questions from '../../../components/createProject/common/questions/questions';
import { TEAM, TEAM_END_DATE_OPTIONS } from '../../../constants/createProject';
import { useCreateProjectStore } from '../../../store/createProjectStore';
import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { useState } from 'react';
import DistanceOptions from '../../../components/createProject/common/distanceOptions/distanceOptions';

interface CreateProjectStep5Props {
  onPrev: () => void;
  onSubmit?: () => void;
}

const EndDateOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const EndDateOption = styled.div<{ isActive?: boolean }>`
  background: white;
  border: 1.5px solid ${colors.gray[150]};
  border-radius: 0.625rem;
  padding: 1.125rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 1.1875rem;

  &:hover {
    border-color: ${colors.green[200]};
  }
`;

const EndDateIcon = styled.div`
  width: 3.1875rem;
  height: 3.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 0.5rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const EndDateTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

const EndDateTitle = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[600]};
`;

const EndDateDescription = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 0.6875rem;
  line-height: 1rem;
  color: ${colors.gray[500]};
`;

const DateButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${colors.green[200]};
  border-radius: 0.625rem;
  background: ${colors.green[50]};
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[600]};
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.green[100]};
  }
`;

const SelectedDateText = styled.span`
  color: ${colors.gray[800]};
  font-weight: 600;
`;

const CreateProjectStep5 = ({ onPrev, onSubmit }: CreateProjectStep5Props) => {
  const { selectedEndDate, setSelectedEndDate, selectedEndDateType, setSelectedEndDateType } =
    useCreateProjectStore();

  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  const handleEndDateTypeChange = (type: string) => {
    setSelectedEndDateType(type);
  };

  const handleCalendarModalOpen = () => {
    setIsCalendarModalOpen(true);
  };

  const handleCalendarModalClose = () => {
    setIsCalendarModalOpen(false);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedEndDate(date);
    setIsCalendarModalOpen(false);
  };

  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP5}</StepTitle>
          <StepBar currentStep={4} totalSteps={5} />
          <StepContainer>
            <Questions text={TEAM.STEP5_END_DATE} number="one" />
            <DistanceOptions
              fontWeight={700}
              options={TEAM_END_DATE_OPTIONS}
              selectedValue={selectedEndDateType || undefined}
              onSelect={handleEndDateTypeChange}
            />

            {selectedEndDateType === 'DATE_SPECIFIED' && (
              <div style={{ marginTop: '1rem' }}>
                <DateButton onClick={handleCalendarModalOpen}>
                  {selectedEndDate ? (
                    <SelectedDateText>
                      {selectedEndDate.getMonth() + 1}월 {selectedEndDate.getDate()}일
                    </SelectedDateText>
                  ) : (
                    '마감일을 선택해주세요'
                  )}
                </DateButton>
              </div>
            )}
          </StepContainer>
        </BaseContainer>

        <div
          style={{ marginBottom: '1.7rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <Button onClick={onSubmit || (() => {})}>다음</Button>
        </div>
      </BaseContainerWithSpaceBetween>

      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={handleCalendarModalClose}
        onDateSelect={handleDateSelect}
        selectedDate={selectedEndDate}
      />
    </>
  );
};

export { CreateProjectStep5 };
