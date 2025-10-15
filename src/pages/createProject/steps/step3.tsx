// import Button from '../../../components/common/button/button';
// import StepBar from '../../../components/createProject/stepBar/stepBar';

// interface CreateProjectStep3Props {
//   onNext: () => void;
//   onPrev: () => void;
// }

// export const CreateProjectStep3 = ({ onNext, onPrev }: CreateProjectStep3Props) => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <StepBar currentStep={2} totalSteps={5} />
//       <h2 style={{ marginTop: '2rem' }}>팀 정보 설정</h2>
//       <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//         <div>
//           <label>모집 인원</label>
//           <input
//             type="number"
//             placeholder="모집할 인원 수"
//             min="1"
//             max="10"
//             style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
//           />
//         </div>
//         <div>
//           <label>필요한 역할</label>
//           <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
//             {['프론트엔드', '백엔드', '디자이너', '기획자', '데이터분석가'].map((role) => (
//               <label key={role} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                 <input type="checkbox" />
//                 {role}
//               </label>
//             ))}
//           </div>
//         </div>
//         <div>
//           <label>프로젝트 기간</label>
//           <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
//             <input type="date" style={{ padding: '0.5rem' }} />
//             <span>~</span>
//             <input type="date" style={{ padding: '0.5rem' }} />
//           </div>
//         </div>
//         <div>
//           <label>모집 마감일</label>
//           <input type="date" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
//         </div>
//       </div>
//       <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
//         <Button onClick={onPrev}>이전</Button>
//         <Button onClick={onNext}>다음</Button>
//       </div>
//     </div>
//   );
// };
// // import Button from '../../../components/common/button/button';
// // import StepBar from '../../../components/createProject/stepBar/stepBar';

// // interface CreateProjectStep2Props {
// //   onNext: () => void;
// //   onPrev: () => void;
// // }

// // export const CreateProjectStep2 = ({ onNext, onPrev }: CreateProjectStep2Props) => {
// //   return (
// //     <div style={{ padding: '2rem' }}>
// //       <StepBar currentStep={1} totalSteps={5} />
// //       <h2 style={{ marginTop: '2rem' }}>프로젝트 정보 입력</h2>
// //       <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
// //         <div>
// //           <label>프로젝트 제목</label>
// //           <input
// //             type="text"
// //             placeholder="프로젝트 제목을 입력하세요"
// //             style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
// //           />
// //         </div>
// //         <div>
// //           <label>프로젝트 설명</label>
// //           <textarea
// //             placeholder="프로젝트에 대해 설명해주세요"
// //             style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', height: '100px' }}
// //           />
// //         </div>
// //         <div>
// //           <label>카테고리</label>
// //           <select style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
// //             <option>웹 개발</option>
// //             <option>모바일 앱</option>
// //             <option>AI/ML</option>
// //             <option>게임</option>
// //             <option>기타</option>
// //           </select>
// //         </div>
// //       </div>
// //       <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
// //         <Button onClick={onPrev}>이전</Button>
// //         <Button onClick={onNext}>다음</Button>
// //       </div>
// //     </div>
// //   );
// // };

// import { TEAM, TEAM_POSITION_OPTIONS } from '../../../constants/createProject';
// import Button from '../../../components/common/button/button';
// import AddCollaboratorButton from '../../../components/createProject/addCollaboratorButton';
// import StepBar from '../../../components/createProject/stepBar/stepBar';
// import {
//   StepContainer,
//   CreateProjectBaseContainer,
//   BaseContainerWithSpaceBetween,
// } from '../../../components/container/container.styles';
// import NumberOfPeople from '../../../components/modal/numberOfPeople/numberOfPeople';
// import { OptionsScrollWrapper } from '../../../components/createProject/common/options/options.styles';
// import BackDrop from '../../../components/common/backDrop/backDrop';
// import { StepTitle } from './steps.styles';
// import Questions from '../../../components/createProject/common/questions/questions';
// import Options from '../../../components/createProject/common/options/options';
// import { useCreateProjectStore } from '../../../store/createProjectStore';
// import Input from '../../../components/common/input/input';
// import DropDown from '../../../components/common/dropDown/dropDown';
// import { useState } from 'react';

// interface CreateProjectStep2Props {
//   onNext: () => void;
//   onChange: (positionDetail: string | null) => void;
// }

// export const CreateProjectStep2 = ({ onNext, onChange }: CreateProjectStep2Props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const {
//     selectedPosition,
//     setSelectedPosition,
//     selectedPositionDetail,
//     setSelectedPositionDetail,
//     selectedPositionNumberOfPeople,
//     setSelectedPositionNumberOfPeople,
//   } = useCreateProjectStore();

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };
//   const handlePositionSelect = (position: string) => {
//     setSelectedPosition(position);
//     console.log('Selected position:', position);
//   };
//   const handlePositionDetailChange = (value: string) => {
//     const positionDetail = value || null;
//     setSelectedPositionDetail(positionDetail);
//     console.log('Selected position detail:', positionDetail);
//   };

//   const handleNumberOfPeopleSelect = (value: string) => {
//     setSelectedPositionNumberOfPeople(value);
//     console.log('Selected number of people:', value);
//   };

//   return (
//     <>
//       <CreateProjectBaseContainer>
//         <BackDrop />

//         <StepTitle>{TEAM.STEP2}</StepTitle>
//         <StepBar currentStep={1} totalSteps={5} />
//         <Questions text={TEAM.STEP2_POSITION} number="one" />
//         <OptionsScrollWrapper>
//           {TEAM_POSITION_OPTIONS.map((option) => (
//             <Options
//               key={option.value}
//               text={option.label}
//               icon={option.icon}
//               isActive={selectedPosition === option.value}
//               onClick={() => handlePositionSelect(option.value)}
//             />
//           ))}
//         </OptionsScrollWrapper>

//         <StepContainer style={{ marginTop: '1.88rem' }}>
//           <Questions text={TEAM.STEP2_POSITION_DETAIL} number="two" />
//           <Input
//             placeholder={'Front end 개발자'}
//             value={selectedPositionDetail}
//             maxLength={22}
//             onChange={handlePositionDetailChange}
//           />
//         </StepContainer>

//         <StepContainer>
//           <Questions text={TEAM.STEP2_POSITION_NUMBER_OF_PEOPLE} number="three" />
//           <DropDown
//             placeholder={'1명'}
//             value={selectedPositionNumberOfPeople || ''}
//             onClick={handleOpenModal}
//             isOpen={isModalOpen}
//           />
//         </StepContainer>
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.13rem' }}>
//           <AddCollaboratorButton />
//         </div>

//         <div style={{ marginBottom: '1.7rem' }}>
//           <Button onClick={onNext}>다음</Button>
//         </div>
//       </CreateProjectBaseContainer>
//       <NumberOfPeople
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onSelect={handleNumberOfPeopleSelect}
//       />
//     </>
//   );
// };

// import Button from '../../../components/common/button/button';
// import StepBar from '../../../components/createProject/stepBar/stepBar';

// interface CreateProjectStep2Props {
//   onNext: () => void;
//   onPrev: () => void;
// }

// export const CreateProjectStep2 = ({ onNext, onPrev }: CreateProjectStep2Props) => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <StepBar currentStep={1} totalSteps={5} />
//       <h2 style={{ marginTop: '2rem' }}>프로젝트 정보 입력</h2>
//       <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//         <div>
//           <label>프로젝트 제목</label>
//           <input
//             type="text"
//             placeholder="프로젝트 제목을 입력하세요"
//             style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
//           />
//         </div>
//         <div>
//           <label>프로젝트 설명</label>
//           <textarea
//             placeholder="프로젝트에 대해 설명해주세요"
//             style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', height: '100px' }}
//           />
//         </div>
//         <div>
//           <label>카테고리</label>
//           <select style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
//             <option>웹 개발</option>
//             <option>모바일 앱</option>
//             <option>AI/ML</option>
//             <option>게임</option>
//             <option>기타</option>
//           </select>
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
import TextArea from '../../../components/common/textArea/textArea';
import { ProjectDescriptionHint } from '../../../components/createProject/projectDescriptionHint/projectDescriptionHint';
import ImageUpload from '../../../components/createProject/imageUpload/imageUpload';

interface CreateProjectStep3Props {
  onNext: () => void;
  onPrev: () => void;
}

export const CreateProjectStep3 = ({ onNext, onPrev }: CreateProjectStep3Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    selectedProjectDescription,
    setSelectedProjectDescription,
    selectedProjectTitle,
    setSelectedProjectTitle,
  } = useCreateProjectStore();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleProjectTitleChange = (value: string) => {
    const projectTitle = value || null;
    setSelectedProjectTitle(projectTitle);
    console.log('Selected position detail:', projectTitle);
  };

  const handleProjectDescriptionChange = (value: string) => {
    const projectDescription = value || null;
    setSelectedProjectDescription(projectDescription);
    console.log('Selected position detail:', projectDescription);
  };

  return (
    <>
      <BaseContainerWithSpaceBetween>
        <BackDrop />
        <BaseContainer>
          <StepTitle>{TEAM.STEP3}</StepTitle>
          <StepBar currentStep={2} totalSteps={5} />
          <StepContainer>
            <Questions text={TEAM.STEP3_PROJECT_TITLE} number="one" />
            <Input
              placeholder={TEAM.STEP3_PROJECT_TITLE_PLACEHOLDER}
              value={selectedProjectTitle}
              maxLength={22}
              onChange={handleProjectTitleChange}
            />
          </StepContainer>
          <StepContainer style={{ marginTop: '0.5rem' }}>
            <Questions text={TEAM.STEP3_PROJECT_DESCRIPTION} number="two" />
            <ProjectDescriptionHint />
            <TextArea
              placeholder={TEAM.STEP3_PROJECT_DESCRIPTION_PLACEHOLDER}
              value={selectedProjectDescription || ''}
              maxLength={2000}
              onChange={handleProjectDescriptionChange}
            />
          </StepContainer>
          <StepContainer style={{ marginTop: '0.5rem' }}>
            <Questions text={TEAM.STEP3_PROJECT_DESCRIPTION_EXPLANATION_PIC} number="three" />
            <ImageUpload
              maxCount={3}
              showPreview={true}
              previewSize="medium"
              previewLayout="grid"
              onImagesChange={(images) => {
                console.log('Selected images:', images);
              }}
            />
          </StepContainer>
        </BaseContainer>
        <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
          <Button onClick={onNext}>다음</Button>
        </div>
      </BaseContainerWithSpaceBetween>
    </>
  );
};
