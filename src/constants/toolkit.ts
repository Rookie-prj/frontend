import { colors } from '../style/colors';
import ToolkitCharacter from '../assets/img/toolkit-character.svg';

import ToolkitFile from '../assets/img/toolkit-file.svg';
import ToolkitFire from '../assets/img/toolkit-fire.svg';
import ToolkitWrite from '../assets/img/toolkit-write.svg';
import ToolkitPin from '../assets/img/toolkit-pin.svg';
import Toolkit1 from '../assets/img/toolkit-1.svg';
import Toolkit2 from '../assets/img/toolkit-2.svg';
import Toolkit3 from '../assets/img/toolkit-3.svg';
import Toolkit4 from '../assets/img/toolkit-4.svg';
import Toolkit5 from '../assets/img/toolkit-5.svg';
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
  cardTitle: string;
  contentDescription: string;
  performance: string;
  categories: string;
  image: string;
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
    cardTitle: '함께하기 전에, 나부터 알자',
    subtitle: 'Collab Path – 협업으로 가는 나만의 경로',
    backgroundColor: colors.green[50],
    icon: ToolkitCharacter,
    image: Toolkit1,
    contentDescription:
      '팀플이나 프로젝트를 시작하기 전, 나의 스타일과 강점을 알아보는 테스트예요. 질문에 답하다 보면, 내가 어떤 방식으로 일하고 협업 하는지 한눈에 볼 수 있어요. 이걸 팀원과 공유하면 서로 더 잘 맞추고, 불필요한 갈등도 줄일 수 있겠죠?',
    categories: '협업스타일 진단 테스트',
    performance:
      '• 팀에 합류하기 전, 나의 협업 스타일과 성향을 알고 싶은 분\n• 프로젝트 초반 팀 빌딩 전 ‘나의 역할’을 먼저 점검해보고 싶은 사람\n• 팀 내 소통 방식이나 리더십 스타일을 진단하고 싶은 분\n• 협업 중 잦은 오해나 갈등을 줄이고 싶은 사람',
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
    cardTitle: '내 안의 프로젝트\n아이디어 찾기',
    subtitle: 'Spark Finder Toolkit – 내 안의 숨겨진 아이디어 찾기',
    backgroundColor: colors.white,
    icon: ToolkitFire,
    contentDescription:
      '팀플이나 프로젝트를 시작하기 전, 나의 스타일과 강점을 알아보는 테스트예요. 질문에 답하다 보면, 내가 어떤 방식으로 일하고 협업 하는지 한눈에 볼 수 있어요. 이걸 팀원과 공유하면 서로 더 잘 맞추고, 불필요한 갈등도 줄일 수 있겠죠?',
    categories: '아이디어발굴',
    performance:
      '• 하고 싶은 프로젝트는 있는데 뭐부터 할지 막막한 분\n• 평소 생각해온 아이디어를 구체화하고 싶은 학생, 창작자\n• 주제를 잡지 못해 전시·공모전 준비가 어려운 사람\n• 나만의 관심사에서 프로젝트 주제를 발굴하고 싶은 분',
    image: Toolkit2,
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
    cardTitle: '포트폴리오, 만들어볼까?\n나의 색과 결을 찾아서',
    subtitle: 'Portfolio Path – 나만의 결을 찾아가는 디자인 여정',
    backgroundColor: colors.gray[800],
    icon: ToolkitFile,
    contentDescription:
      '나의 색과 결을 찾는 건, 결국 나를 이해하는 일입니다. 이 툴킷은 내가 좋아하는 것, 내가 잘하는 것, 그리고 내가 되고 싶은 나를 시각화하기 위한 워크북입니다. 완벽한 답을 찾기보다, 지금의 나를 솔직하게 표현해보세요. 그게 바로 당신만의 Moodfolio가 될 거예요.',
    categories: '포트폴리오 플랜',
    performance:
      '• 나다운 포트폴리오를 만들고 싶은 디자이너, 창작자\n• 프로젝트 결과보다 나의 방향성과 메시지를 정리하고 싶은 분\n• 자기 소개서나 인터뷰 전에 나의 핵심 키워드를 정리하고 싶은 사람\n• 포트폴리오를 감각적으로 구조화하고 싶은 학생',
    image: Toolkit3,
  },
  {
    id: '4',
    title: [{ text: '시작 전,\n우리들의 ' }, { text: '첫걸음', color: colors.green[200] }],
    mainTitle: '시작 전, 우리들의 첫걸음',
    cardTitle: '시작 전, 우리들의 첫걸음',
    subtitle: 'Project Idea Brief Toolkit – 협업의 첫걸음',
    backgroundColor: colors.white,
    icon: ToolkitWrite,
    image: Toolkit4,
    contentDescription:
      '프로젝트를 시작하기 전, 모두 한 장씩 적어보세요.  하고 싶은 이야기를 편하게 적어보는 시트예요. 거창한 계획이 아니라, 그냥 떠오르는 생각과 바람을 담아주세요. 이 한 장이면 팀원과 금방 마음이 통할 거예요.',
    categories: '프로젝트 아이디어 찾기',
    performance:
      '• 새 팀을 꾸려 프로젝트를 막 시작하려는 대학생 팀\n• 공모전 · 졸업작품 등 협업 초기 팀 정리가 필요한 분\n• 팀 목표, 일정, 역할을 명확히 정하고 싶은 리더\n• 무엇부터 시작해야 할지 감이 안 잡히는 분',
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
    cardTitle: '빙고: 서로를 알아가는\n첫 대화 게임',
    subtitle: 'Icebreak Bingo Toolkit – 시작을 위한 대화 게임',
    backgroundColor: colors.green[50],
    icon: ToolkitPin,
    image: Toolkit5,
    contentDescription:
      '프로젝트의 시작은 아이디어보다 사람을 이해하는 일에서 시작됩니다. 이 빙고는 첫 회의나 아이스브레이킹 시간에 서로의 성향과 협업 스타일을 자연스럽게 나눌 수 있도록 만들어진 툴킷입니다. 대화를 통해 칸을 채워가며 나와 다른 방식을 이해하고 서로의 강점을 발견해보세요.',
    categories: '팀케미테스트',
    performance:
      '• 팀 결성 후 첫 만남의 어색함을 깨고 싶은 사람\n• 서로의 성향과 일하는 방식을 자연스럽게 알고 싶은 팀\n• 아이스브레이킹이나 워크숍 시작 전에 분위기를 풀고 싶은 리더\n• 프로젝트 전 팀 케미를 미리 테스트해보고 싶은 분',
  },
];
