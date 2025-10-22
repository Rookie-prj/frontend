import { colors } from '../style/colors';
import ToolkitCharacter from '../assets/img/toolkit-character.svg';

import ToolkitFile from '../assets/img/toolkit-file.svg';
import ToolkitFire from '../assets/img/toolkit-fire.svg';
import ToolkitWrite from '../assets/img/toolkit-write.svg';
import ToolkitPin from '../assets/img/toolkit-pin.svg';

export interface TextSegment {
  text: string;
  color?: string;
}

export interface ToolkitItem {
  id: string;
  title: TextSegment[];
  mainTitle: string;
  subtitle: string;
  backgroundColor: string;
  icon: string;
}

export const ToolkitData: ToolkitItem[] = [
  {
    id: '1',
    title: [
      { text: '함께하기 전에', color: colors.green[200] },
      { text: ',\n ' },
      { text: '나', color: colors.green[200] },
      { text: '부터 알자' },
    ],
    mainTitle: '함께하기 전에, 나부터 알자',
    subtitle: 'Collab Path – 협업으로 가는 나만의 경로',
    backgroundColor: colors.green[50],
    icon: ToolkitCharacter,
  },
  {
    id: '2',
    title: [
      { text: '내 안의 ' },
      { text: '프로젝트', color: colors.green[200] },
      { text: '\n 아이디어', color: colors.green[200] },
      { text: ' 찾기' },
    ],
    mainTitle: '내 안의 프로젝트 아이디어 찾기',
    subtitle: 'Spark Finder Toolkit – 내 안의 숨겨진 아이디어 찾기',
    backgroundColor: colors.white,
    icon: ToolkitFile,
  },
  {
    id: '3',
    title: [
      { text: '포트폴리오,', color: colors.green[200] },
      { text: '만들어볼까?', color: colors.gray[50] },
      { text: '\n나의 ', color: colors.gray[50] },
      { text: '색과 결', color: colors.green[200] },
      { text: '을 찾아서', color: colors.gray[50] },
    ],
    mainTitle: '포트폴리오, 만들어볼까?나의 색과 결을 찾아서',
    subtitle: 'Portfolio Path – 나만의 결을 찾아가는 디자인 여정',
    backgroundColor: colors.gray[800],
    icon: ToolkitFire,
  },
  {
    id: '4',
    title: [{ text: '시작 전,\n우리들의 ' }, { text: '첫걸음', color: colors.green[200] }],
    mainTitle: '시작 전, 우리들의 첫걸음',
    subtitle: 'Project Idea Brief Toolkit – 협업의 첫걸음',
    backgroundColor: colors.white,
    icon: ToolkitWrite,
  },
  {
    id: '5',
    title: [
      { text: '빙고', color: colors.green[200] },
      { text: ': 서로를 알아가는\n', color: colors.gray[900] },
      { text: '첫 대화 ', color: colors.green[200] },
      { text: '게임', color: colors.gray[900] },
    ],
    mainTitle: '빙고: 서로를 알아가는 첫 대화 게임',
    subtitle: 'Icebreak Bingo Toolkit – 시작을 위한 대화 게임',
    backgroundColor: colors.green[50],
    icon: ToolkitPin,
  },
];
