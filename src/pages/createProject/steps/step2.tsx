import { TEAM, TEAM_POSITION_OPTIONS } from '../../../constants/createProject';
import Button from '../../../components/common/button/button';
import AddCollaboratorButton from '../../../components/createProject/addCollaboratorButton';
import StepBar from '../../../components/createProject/stepBar/stepBar';
import {
  StepContainer,
  BaseContainer,
  BaseContainerWithSpaceBetween,
} from '../../../components/container/container.styles';
import NumberOfPeople from '../../../components/modal/numberOfPeople/numberOfPeople';
import { OptionsScrollWrapper } from '../../../components/createProject/common/options/options.styles';
import BackDrop from '../../../components/common/backDrop/backDrop';
import { StepTitle } from './steps.styles';
import Questions from '../../../components/createProject/common/questions/questions';
import Options from '../../../components/createProject/common/options/options';
import { useCreateProjectStore } from '../../../store/createProjectStore';
import Input from '../../../components/common/input/input';
import DropDown from '../../../components/common/dropDown/dropDown';
import { useState } from 'react';

interface CreateProjectStep2Props {
  onNext: () => void;
  onPrev?: () => void;
  onChange?: (positionDetail: string | null) => void;
  currentStep: number;
}

export const CreateProjectStep2 = ({
  onNext,
  onPrev,
  onChange,
  currentStep,
}: CreateProjectStep2Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    selectedPosition,
    setSelectedPosition,
    selectedPositionDetail,
    setSelectedPositionDetail,
    selectedPositionNumberOfPeople,
    setSelectedPositionNumberOfPeople,
  } = useCreateProjectStore();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handlePositionSelect = (position: string) => {
    setSelectedPosition(position);
    console.log('Selected position:', position);
  };
  const handlePositionDetailChange = (value: string) => {
    const positionDetail = value || null;
    setSelectedPositionDetail(positionDetail);
    onChange?.(positionDetail);
    console.log('Selected position detail:', positionDetail);
  };

  const handleNumberOfPeopleSelect = (value: string) => {
    setSelectedPositionNumberOfPeople(value);
    console.log('Selected number of people:', value);
  };

  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP2}</StepTitle>
          <StepBar currentStep={currentStep} totalSteps={5} />
          <Questions text={TEAM.STEP2_POSITION} number="one" />
          <OptionsScrollWrapper>
            {TEAM_POSITION_OPTIONS.map((option) => (
              <Options
                key={option.value}
                text={option.label}
                icon={option.icon}
                isActive={selectedPosition === option.value}
                onClick={() => handlePositionSelect(option.value)}
              />
            ))}
          </OptionsScrollWrapper>

          <StepContainer style={{ marginTop: '1.88rem' }}>
            <Questions text={TEAM.STEP2_POSITION_DETAIL} number="two" />
            <Input
              placeholder={'Front end 개발자'}
              value={selectedPositionDetail}
              maxLength={22}
              onChange={handlePositionDetailChange}
            />
          </StepContainer>

          <StepContainer style={{ marginTop: '0.5rem' }}>
            <Questions text={TEAM.STEP2_POSITION_NUMBER_OF_PEOPLE} number="three" />
            <DropDown
              placeholder={'1명'}
              value={selectedPositionNumberOfPeople || ''}
              onClick={handleOpenModal}
              isOpen={isModalOpen}
            />
          </StepContainer>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.13rem' }}>
            <AddCollaboratorButton />
          </div>
        </BaseContainer>
        <div style={{ marginBottom: '1.7rem' }}>
          <Button onClick={onNext}>다음</Button>
        </div>
      </BaseContainerWithSpaceBetween>
      <NumberOfPeople
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelect={handleNumberOfPeopleSelect}
      />
    </>
  );
};
