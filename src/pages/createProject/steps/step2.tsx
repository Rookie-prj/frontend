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
import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

interface CreateProjectStep2Props {
  onNext: () => void;
  onPrev?: () => void;
  onChange?: (positionDetail: string | null) => void;
  currentStep: number;
}

const CollaboratorItemContainer = styled.div`
  margin-top: 1.5rem;

  padding: 1rem;
  background-color: ${colors.gray[100]};
  border-radius: 0.625rem;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: ${colors.gray[500]};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    color: ${colors.gray[700]};
  }
`;

const CollaboratorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CollaboratorText = styled.p`
  color: ${colors.gray[700]};
  font-size: 0.875rem;
  margin: 0;
`;

interface CollaboratorInputGroup {
  id: string;
  position: string | null;
  positionDetail: string | null;
  numberOfPeople: string | null;
  isModalOpen: boolean;
}

export const CreateProjectStep2 = ({
  onNext,
  onPrev,
  onChange,
  currentStep,
}: CreateProjectStep2Props) => {
  const [inputGroups, setInputGroups] = useState<CollaboratorInputGroup[]>([
    {
      id: '1',
      position: null,
      positionDetail: null,
      numberOfPeople: null,
      isModalOpen: false,
    },
  ]);
  const { collaborators, addCollaborator, removeCollaborator } = useCreateProjectStore();

  const handleCloseModal = (groupId: string) => {
    setInputGroups((groups) =>
      groups.map((group) => (group.id === groupId ? { ...group, isModalOpen: false } : group)),
    );
  };

  const handleOpenModal = (groupId: string) => {
    setInputGroups((groups) =>
      groups.map((group) => (group.id === groupId ? { ...group, isModalOpen: true } : group)),
    );
  };

  const handlePositionSelect = (groupId: string, position: string) => {
    setInputGroups((groups) =>
      groups.map((group) => (group.id === groupId ? { ...group, position } : group)),
    );
  };

  const handlePositionDetailChange = (groupId: string, value: string) => {
    const positionDetail = value || null;
    setInputGroups((groups) =>
      groups.map((group) => (group.id === groupId ? { ...group, positionDetail } : group)),
    );
    onChange?.(positionDetail);
  };

  const handleNumberOfPeopleSelect = (groupId: string, value: string) => {
    setInputGroups((groups) =>
      groups.map((group) => (group.id === groupId ? { ...group, numberOfPeople: value } : group)),
    );
  };

  const handleAddNewInputGroup = () => {
    const newId = Date.now().toString();
    setInputGroups((groups) => [
      ...groups,
      {
        id: newId,
        position: null,
        positionDetail: null,
        numberOfPeople: null,
        isModalOpen: false,
      },
    ]);
  };

  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP2}</StepTitle>
          <StepBar currentStep={currentStep} totalSteps={5} />

          {/* 입력 필드 그룹들 */}
          {inputGroups.map((group, groupIndex) => (
            <div key={group.id} style={{ marginTop: groupIndex > 0 ? '2rem' : '0' }}>
              <Questions text={TEAM.STEP2_POSITION} number="one" />
              <OptionsScrollWrapper>
                {TEAM_POSITION_OPTIONS.map((option) => (
                  <Options
                    key={option.value}
                    text={option.label}
                    icon={option.icon}
                    isActive={group.position === option.value}
                    onClick={() => handlePositionSelect(group.id, option.value)}
                  />
                ))}
              </OptionsScrollWrapper>

              <StepContainer style={{ marginTop: '1.88rem' }}>
                <Questions text={TEAM.STEP2_POSITION_DETAIL} number="two" />
                <Input
                  placeholder={'Front end 개발자'}
                  value={group.positionDetail || ''}
                  maxLength={22}
                  onChange={(value) => handlePositionDetailChange(group.id, value)}
                />
              </StepContainer>

              <StepContainer style={{ marginTop: '0.5rem' }}>
                <Questions text={TEAM.STEP2_POSITION_NUMBER_OF_PEOPLE} number="three" />
                <DropDown
                  placeholder={'1명'}
                  value={group.numberOfPeople || ''}
                  onClick={() => handleOpenModal(group.id)}
                  isOpen={group.isModalOpen}
                />
              </StepContainer>

              <NumberOfPeople
                isOpen={group.isModalOpen}
                onClose={() => handleCloseModal(group.id)}
                onSelect={(value) => handleNumberOfPeopleSelect(group.id, value)}
              />
            </div>
          ))}

          <div
            style={{
              display: 'flex',
              marginBottom: '1.7rem',
              justifyContent: 'center',
              marginTop: '2.13rem',
            }}
          >
            <AddCollaboratorButton onClick={handleAddNewInputGroup} />
          </div>

          {/* 추가된 협업자 리스트 */}
          {collaborators.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              {collaborators.map((collaborator, index) => (
                <CollaboratorItemContainer key={index}>
                  <DeleteButton onClick={() => removeCollaborator(index)}>×</DeleteButton>
                  <CollaboratorInfo>
                    <CollaboratorText>
                      <strong>역할:</strong>{' '}
                      {TEAM_POSITION_OPTIONS.find((opt) => opt.value === collaborator.position)
                        ?.label || collaborator.position}
                    </CollaboratorText>
                    <CollaboratorText>
                      <strong>역할 상세:</strong> {collaborator.positionDetail}
                    </CollaboratorText>
                    <CollaboratorText>
                      <strong>인원 수:</strong> {collaborator.numberOfPeople}
                    </CollaboratorText>
                  </CollaboratorInfo>
                </CollaboratorItemContainer>
              ))}
            </div>
          )}
        </BaseContainer>
        <div style={{ marginBottom: '1.7rem' }}>
          <Button onClick={onNext}>다음</Button>
        </div>
      </BaseContainerWithSpaceBetween>
    </>
  );
};
