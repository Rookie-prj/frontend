import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';
import CalendarModal from '../../../components/modal/calendar/calendarModal';
import CompletionModal from '../../../components/modal/completionModal/completionModal';
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
import DistanceOptions from '../../../components/createProject/distanceOptions/distanceOptions';
import EndDate from '../../../components/createProject/endDate/endDate';

interface CreateProjectStep5Props {
  onPrev: () => void;
  onSubmit?: () => void;
}

const CreateProjectStep5 = ({ onPrev, onSubmit }: CreateProjectStep5Props) => {
  const {
    selectedEndDate,
    setSelectedEndDate,
    selectedEndDateType,
    setSelectedEndDateType,
    ...storeData
  } = useCreateProjectStore();

  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);

  const handleEndDateTypeChange = (type: string) => {
    setSelectedEndDateType(type);
    if (type === 'DATE_SPECIFIED') {
      setIsCalendarModalOpen(true);
    }
  };

  const handleCalendarModalClose = () => {
    setIsCalendarModalOpen(false);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedEndDate(date);
    setIsCalendarModalOpen(false);
  };

  const handleSubmit = () => {
    console.log('=== Step5 Store 데이터 ===');
    console.log('전체 store 데이터:', storeData);
    console.log('선택된 종료일:', selectedEndDate);
    console.log('종료일 타입:', selectedEndDateType);
    console.log('=======================');

    setIsCompletionModalOpen(true);
  };

  const handleCloseCompletionModal = () => {
    setIsCompletionModalOpen(false);
  };

  const handleViewPost = () => {
    setIsCompletionModalOpen(false);
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <>
      <BaseContainerWithSpaceBetween style={{ display: isCompletionModalOpen ? 'none' : 'flex' }}>
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

            {selectedEndDateType === 'DATE_SPECIFIED' && <EndDate selectedDate={selectedEndDate} />}
          </StepContainer>
        </BaseContainer>

        <div style={{ marginBottom: '1.7rem' }}>
          <Button onClick={handleSubmit}>다음</Button>
        </div>
      </BaseContainerWithSpaceBetween>

      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={handleCalendarModalClose}
        onDateSelect={handleDateSelect}
        selectedDate={selectedEndDate}
      />

      <CompletionModal
        isOpen={isCompletionModalOpen}
        onClose={handleCloseCompletionModal}
        onViewPost={handleViewPost}
      />
    </>
  );
};

export { CreateProjectStep5 };
