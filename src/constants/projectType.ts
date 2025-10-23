import capstoneIcon from '../assets/icons/capstone.svg';
import contestIcon from '../assets/icons/contest.svg';
import teamProjectIcon from '../assets/icons/teamProject.svg';
import graduationIcon from '../assets/icons/graduation.svg';

const PROJECT_TYPE = {
  TEAM_PROJECT: {
    value: 'teamProject',
    label: '팀 프로젝트',
    tag: '#일반 프로젝트',
    icon: teamProjectIcon,
  },
  GRADUATION: {
    value: 'graduation',
    label: '졸업작품',
    tag: '#졸업 #졸업전시',
    icon: graduationIcon,
  },
  CONTEST: {
    value: 'contest',
    label: '공모전',
    tag: '#수상 #단기프로젝트',
    icon: contestIcon,
  },

  CAPSTONE: {
    value: 'capstone',
    label: '캡스톤 디자인',
    tag: '#산학연계 #실무프로젝트',
    icon: capstoneIcon,
  },
} as const;

export default PROJECT_TYPE;

export type ProjectTypeValue = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE]['value'];
export type ProjectTypeLabel = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE]['label'];
export type ProjectTypeTag = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE]['tag'];
