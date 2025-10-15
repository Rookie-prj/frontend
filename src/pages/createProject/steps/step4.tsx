// import Button from '../../../components/common/button/button';
// import StepBar from '../../../components/createProject/stepBar/stepBar';

// interface CreateProjectStep4Props {
//   onNext: () => void;
//   onPrev: () => void;
// }

// export const CreateProjectStep4 = ({ onNext, onPrev }: CreateProjectStep4Props) => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <StepBar currentStep={3} totalSteps={5} />
//       <h2 style={{ marginTop: '2rem' }}>요구사항 및 조건</h2>
//       <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//         <div>
//           <label>기술 스택</label>
//           <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
//             {['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'TypeScript'].map((tech) => (
//               <label key={tech} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                 <input type="checkbox" />
//                 {tech}
//               </label>
//             ))}
//           </div>
//         </div>
//         <div>
//           <label>경력 요구사항</label>
//           <select style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
//             <option>신입 가능</option>
//             <option>1년 이상</option>
//             <option>3년 이상</option>
//             <option>5년 이상</option>
//           </select>
//         </div>
//         <div>
//           <label>활동 방식</label>
//           <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
//             <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//               <input type="radio" name="activity" value="online" />
//               온라인
//             </label>
//             <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//               <input type="radio" name="activity" value="offline" />
//               오프라인
//             </label>
//             <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//               <input type="radio" name="activity" value="hybrid" />
//               혼합
//             </label>
//           </div>
//         </div>
//         <div>
//           <label>추가 요구사항</label>
//           <textarea
//             placeholder="기타 요구사항이나 조건을 입력해주세요"
//             style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', height: '80px' }}
//           />
//         </div>
//       </div>
//       <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
//         <Button onClick={onPrev}>이전</Button>
//         <Button onClick={onNext}>다음</Button>
//       </div>
//     </div>
//   );
// };

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
  onPrev: () => void;
  onChange?: (positionDetail: string | null) => void;
}

export const CreateProjectStep4 = ({ onNext, onPrev, onChange }: CreateProjectStep2Props) => {
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
          <StepBar currentStep={1} totalSteps={5} />
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
