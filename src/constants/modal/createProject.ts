import handsIcon from '../../assets/icons/hands.svg';
import speakerIcon from '../../assets/icons/speaker.svg';
import leftArrow from '../../assets/icons/leftArrow.svg';
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
