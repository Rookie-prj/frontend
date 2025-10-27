import { HttpResponse, http } from 'msw';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { MyProfileDetail } from '../models/myProfile';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export const mockMyProfileDetail: MyProfileDetail = {
  userId: 1,
  currentStudy: '백엔드 개발',
  emailId: 'user@example.com',
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
};

// 내 프로필 상세 정보 조회
export const myProfileDetail = http.get(`${API_BASE_URL}${API_ENDPOINT.LIBRARY_MY_DETAIL}`, () => {
  return HttpResponse.json(mockMyProfileDetail, {
    status: 200,
  });
});
