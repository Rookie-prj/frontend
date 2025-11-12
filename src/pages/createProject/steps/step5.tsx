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
import { validateStep5 } from '../../../utils/formValidation';
import { useState } from 'react';
import DistanceOptions from '../../../components/createProject/distanceOptions/distanceOptions';
import EndDate from '../../../components/createProject/endDate/endDate';
import { setDateTo14 } from '../../../utils/dateUtils';

interface CreateProjectStep5Props {
  onPrev: () => void;
  onSubmit?: (onSuccess: (boardId: number) => void) => void;
  currentStep: number;
}

const CreateProjectStep5 = ({ onPrev, onSubmit, currentStep }: CreateProjectStep5Props) => {
  const {
    selectedEndDate,
    setSelectedEndDate,
    selectedEndDateType,
    setSelectedEndDateType,
    ...storeData
  } = useCreateProjectStore();

  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);
  const [createdBoardId, setCreatedBoardId] = useState<number | null>(null);

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
    // 날짜 선택 시 시간을 14:00:00으로 설정
    const dateWithTime = setDateTo14(date);
    setSelectedEndDate(dateWithTime);
    setIsCalendarModalOpen(false);
  };

  const isFormValid = validateStep5(selectedEndDateType, selectedEndDate);

  const handleSubmit = async () => {
    console.log('=== Step5 Store 데이터 ===');
    console.log('전체 store 데이터:', storeData);
    console.log('선택된 종료일:', selectedEndDate);
    console.log('종료일 타입:', selectedEndDateType);
    console.log('=======================');

    if (onSubmit) {
      onSubmit((boardId) => {
        console.log('✅ 콜백에서 받은 boardId:', boardId);
        setCreatedBoardId(boardId);
        setIsCompletionModalOpen(true);
      });
    } else {
      setIsCompletionModalOpen(true);
    }
  };

  const handleCloseCompletionModal = () => {
    setIsCompletionModalOpen(false);
  };

  const handleViewPost = () => {
    setIsCompletionModalOpen(false);
  };

  return (
    <>
      <BaseContainerWithSpaceBetween style={{ display: isCompletionModalOpen ? 'none' : 'flex' }}>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP5}</StepTitle>
          <StepBar currentStep={currentStep} totalSteps={5} />
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
          <Button onClick={handleSubmit} variant={isFormValid ? 'primary' : 'disabled'}>
            다음
          </Button>
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
        boardId={createdBoardId}
      />
    </>
  );
};

export { CreateProjectStep5 };
