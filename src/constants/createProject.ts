import handsIcon from '../assets/icons/hands.svg';
import speakerIcon from '../assets/icons/speaker.svg';
import leftArrow from '../assets/icons/leftArrow.svg';
import pmIcon from '../assets/icons/pm.svg';
import developerIcon from '../assets/icons/developer.svg';
import designerIcon from '../assets/icons/designer.svg';
import etcIcon from '../assets/icons/etc.svg';
import nearLocationIcon from '../assets/icons/nearLocation.svg';
import farLocationIcon from '../assets/icons/farLocation.svg';
import calendarIcon from '../assets/icons/calendar.svg';
import greenThunder from '../assets/icons/greenThunder.svg';
export const CREATE_PROJECT_MODAL = {
  title: '프로젝트 등록하기',
  groups: [
    {
      id: '1',
      title: '처음부터 팀을 구성해요',
      description: '아무것도 시작된 게 없어요',
      icon: handsIcon,
      arrowIcon: leftArrow,
    },
    {
      id: '2',
      title: '추가 협업자를 구해요',
      description: '진행 중인 프로젝트에 필요한 포지션을 추가해요',
      icon: speakerIcon,
      arrowIcon: leftArrow,
    },
  ],
  button: '닫기',
};

export const TEAM = {
  STEP1: '어떤\n프로젝트예요?',
  STEP1_EXPECTED_PERIOD: '프로젝트 예상기간',
  STEP2: '어떤 협업자를\n구하시나요?',
  STEP2_POSITION: '구하고 싶은 포지션을 선택해주세요',
  STEP2_POSITION_DETAIL: '구체적인 분야를 작성해주세요',
  STEP2_POSITION_NUMBER_OF_PEOPLE: '몇 명을 구하시나요?',
  STEP2_POSITION_NUMBER_OF_PEOPLE_MODAL: '구하시는 인원을 선택해주세요',
  STEP3: '진행하게 될\n프로젝트를 설명해주세요',
  STEP3_PROJECT_TITLE: '어떤 제목으로 올려볼까요?',
  STEP3_PROJECT_TITLE_PLACEHOLDER: '제목을 입력해주세요',
  STEP3_PROJECT_DESCRIPTION_PLACEHOLDER: '협업자 포지션과 프로젝트 주제가 포함되면 좋아요!',
  STEP3_PROJECT_DESCRIPTION: '프로젝트를 자유롭게 설명해주세요!',
  STEP3_PROJECT_MORE_DESCRIPTION: '어떤 프로젝트인지 더 구체적으로 알려주세요!',
  STEP3_PROJECT_DESCRIPTION_EXPLANATION: '어떤 프로젝트인지 더 구체적으로 알려주세요!',
  STEP3_PROJECT_DESCRIPTION_EXPLANATION_DETAIL_1: '프로젝트의 목표와 하고자 하는 일',
  STEP3_PROJECT_DESCRIPTION_EXPLANATION_DETAIL_2: '현재까지의 진행 상황',
  STEP3_PROJECT_DESCRIPTION_EXPLANATION_DETAIL_3: '필요하거나 함께하고 싶은 협업자 역할',
  STEP3_PROJECT_DESCRIPTION_EXPLANATION_PIC:
    '관련된 사진이 있으면 더 많은 사람들이 확인해요 (선택)',
  STEP4: '이런 루키를\n선호해요',
  STEP4_ROOKIE_DISTANCE: '거리가',
  STEP4_ROOKIE_SKILL: '이 툴을 다룰 줄 아시는 분이 필요해요!',
  STEP4_ROOKIE_SKILL_PLACEHOLDER: 'ex) 포토샵, 일러스트레이터',
  STEP4_ROOKIE_COOPERATION_TOOL: '함께 사용하는 협업툴이에요',
  STEP4_ROOKIE_COOPERATION_TOOL_PLACEHOLDER: '최대 3개 선택 가능',
  STEP4_ROOKIE_COOPERATION_METHOD: '협업 방식은',
  STEP5: '거의\n다 됐어요!',
  STEP5_END_DATE: '모집 마감일을 설정해주세요',
  STEP5_END_DATE_LABEL: '마감일',
  STEP6: '프로젝트의 상태에\n대해 알려주세요',
  STEP6_PROJECT_STATUS: '현재 프로젝트를 완성도가 어떻게 되나요?',
};
export const TEAM_PERIOD_OPTIONS = [
  { value: 'ONE_MONTH', label: '1개월' },
  { value: 'THREE_MONTHS', label: '3개월' },
  { value: 'SIX_MONTHS', label: '6개월' },
  { value: 'TEN_MONTHS', label: '10개월' },
  { value: 'ONE_YEAR', label: '1년' },
  { value: 'OVER_ONE_YEAR', label: '1년 이상' },
];
export const TEAM_POSITION_OPTIONS = [
  { value: 'PM', label: '기획자', icon: pmIcon },
  { value: 'DEVELOPER', label: '개발자', icon: developerIcon },
  { value: 'DESIGNER', label: '디자이너', icon: designerIcon },
  { value: 'ETC', label: '기타', icon: etcIcon },
];
export const TEAM_DISTANCE_OPTIONS = [
  { value: 'NEAR', label: '가까운 게 좋아요', icon: nearLocationIcon },
  { value: 'IRRELEVANT', label: '상관없어요', icon: farLocationIcon },
];
export const TEAM_COOPERATION_METHOD_OPTIONS = [
  { value: 'ONLINE', label: '온라인' },
  { value: 'OFFLINE', label: '오프라인' },
  { value: 'HYBRID', label: '온라인, 오프라인 둘 다 필요' },
];
export const TEAM_COOPERATION_TOOL_OPTIONS = [
  { value: 'TOOL_1', label: 'Discord' },
  { value: 'TOOL_2', label: '카카오톡' },
  { value: 'TOOL_3', label: 'Notion' },
  { value: 'TOOL_4', label: 'Zoom' },
  { value: 'TOOL_5', label: 'Slack' },
  { value: 'TOOL_6', label: 'Google Workspace' },
  { value: 'TOOL_7', label: 'Figma' },
];
export const TEAM_NUMBER_OF_PEOPLE_OPTIONS = [
  { value: '1', label: '1명' },
  { value: '2', label: '2명' },
  { value: '3', label: '3명' },
  { value: '4', label: '4명' },
  { value: '5', label: '5명 이상' },
];
export const TEAM_END_DATE_OPTIONS = [
  {
    value: 'DATE_SPECIFIED',
    label: '날짜 지정 마감',
    description: '마감일을 정해서 여유 있게 모집해요',
    icon: calendarIcon,
  },
  {
    value: 'RECRUITMENT_END',
    label: '모집 시 마감',
    description: '필요한 인원이 모이면 바로 마감돼요',
    icon: greenThunder,
  },
];
export const PROJECT_STATUS_OPTIONS = [
  {
    value: 'IDEA',
    label: '아이디어 단계',
    description: '아이디어만 나온 상태예요',
    percentage: '10%',
  },
  {
    value: 'PLANNING',
    label: '기획 중',
    description: '상세한 일정과 기획을 다듬고 있어요',
    percentage: '30%',
  },
  {
    value: 'IN_PROGRESS',
    label: '진행 중',
    description: '이미 일부 작업이 시작됐어요',
    percentage: '50%',
  },
  {
    value: 'COMPLETING',
    label: '마무리 단계',
    description: '많은 것이 진행됐고 마무리 작업 중이에요',
    percentage: '80%',
  },
];
export const PROJECT_STATUS_DESCRIPTION_OPTIONS = {
  PROJECT_TYPE: '프로젝트 유형(필수)',
  PROJECT_FIELD: '프로젝트 해당 분야(선택)',
  PROJECT_FIELD_MAX_SELECT: '최대 3개 선택',
};

export const COMPLETE_PROJECT_STEPS = '게시물 등록이 완료되었습니다!';
