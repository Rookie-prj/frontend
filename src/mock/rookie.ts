import { HttpResponse, http } from 'msw';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const mockRookieData = [
  {
    id: 1,
    name: '춤추는 악어',
    department: '실내디자인전공',
    year: '4학년',
    school: '천안. 상명대학교',
  },
  {
    id: 2,
    name: '안녕하세요',
    department: '컴퓨터공학과',
    year: '4학년',
    school: '서울. 상명대학교',
  },
  {
    id: 3,
    name: '코딩마스터',
    department: '소프트웨어학과',
    year: '3학년',
    school: '서울. 상명대학교',
  },
  {
    id: 4,
    name: '디자인러버',
    department: '시각디자인전공',
    year: '4학년',
    school: '천안. 상명대학교',
  },
];

export const rookie = http.get(`${API_BASE_URL}/rookie`, () => {
  return HttpResponse.json(mockRookieData, {
    status: 200,
  });
});
