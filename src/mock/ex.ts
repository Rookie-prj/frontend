import { HttpResponse, http } from 'msw';

const mockReviewData = [
  {
    id: 1,
    userName: 'Bob',
    content: '감사합니다',
    createdAt: '2024-01-01',
    score: 5,
  },
  {
    id: 2,
    userName: 'Bob2',
    content: '감사합니다2',
    createdAt: '2024-01-01',
    score: 3,
  },
];

export const ex = http.get('http://localhost:9999/ex', () => {
  return HttpResponse.json(mockReviewData, {
    status: 200,
  });
});
