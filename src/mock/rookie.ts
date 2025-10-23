import { HttpResponse, http } from 'msw';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export const mockRookieData = [
  {
    userId: 1,
    currentStudy: '백엔드 개발',
    emailId: 'string',
    passwordHash: '$2a$12$wuvvbq3X2rt6IkRwWfcb8.SCtBMVmdvZS.yUIyHu47YpHPo28ACW.',
    name: '김철수',
    universityName: '서울대학교',
    schoolPublicFlag: 1,
    major: '컴퓨터공학과',
    grade: '3학년',
    currentStudyDetail:
      'Spring Boot를 활용한 RESTful API 개발, JPA/Hibernate ORM, 마이크로서비스 아키텍처 학습 중',
    toolset: 'Java, Spring Boot, MySQL, Docker, Git, IntelliJ IDEA',
    favoriteSubject: '웹 개발, 클라우드 컴퓨팅',
    publicPortfolioCount: '5',
    recruitPeople: '2-3명',
    responseRate: '95%',
    passionMeter: '90%',
    profileImageUrl: '/images/profile/default_1.jpg',
  },
  {
    userId: 2,
    currentStudy: '인공지능/머신러닝',
    emailId: 'jane.smith@tech.ac.kr',
    passwordHash: '$2a$12$ukr8icddMNuYuPv6fV8EQesLGwr.spuhEda8mlvkbUGgLbQB//9Jy',
    name: '이영희',
    universityName: 'KAIST',
    schoolPublicFlag: 1,
    major: '전기전자공학과',
    grade: '4학년',
    currentStudyDetail:
      '딥러닝 프레임워크(TensorFlow, PyTorch) 활용, 컴퓨터 비전 프로젝트, NLP 모델 개발',
    toolset: 'Python, TensorFlow, PyTorch, Jupyter, scikit-learn, OpenCV',
    favoriteSubject: 'AI, 데이터 사이언스, 컴퓨터 비전',
    publicPortfolioCount: '8',
    recruitPeople: '3-4명',
    responseRate: '88%',
    passionMeter: '95%',
    profileImageUrl: '/images/profile/default_2.jpg',
  },
];

export const rookie = http.get(`${API_BASE_URL}/explore/member`, () => {
  return HttpResponse.json(mockRookieData, {
    status: 200,
  });
});
