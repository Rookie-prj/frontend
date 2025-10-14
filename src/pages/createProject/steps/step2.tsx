import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';

interface CreateProjectStep2Props {
  onNext: () => void;
  onPrev: () => void;
}

export const CreateProjectStep2 = ({ onNext, onPrev }: CreateProjectStep2Props) => {
  return (
    <div style={{ padding: '2rem' }}>
      <StepBar currentStep={1} totalSteps={5} />
      <h2 style={{ marginTop: '2rem' }}>프로젝트 정보 입력</h2>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>프로젝트 제목</label>
          <input
            type="text"
            placeholder="프로젝트 제목을 입력하세요"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div>
          <label>프로젝트 설명</label>
          <textarea
            placeholder="프로젝트에 대해 설명해주세요"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', height: '100px' }}
          />
        </div>
        <div>
          <label>카테고리</label>
          <select style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
            <option>웹 개발</option>
            <option>모바일 앱</option>
            <option>AI/ML</option>
            <option>게임</option>
            <option>기타</option>
          </select>
        </div>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <Button onClick={onPrev}>이전</Button>
        <Button onClick={onNext}>다음</Button>
      </div>
    </div>
  );
};
