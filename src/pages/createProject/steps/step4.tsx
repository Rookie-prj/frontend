import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';

interface CreateProjectStep4Props {
  onNext: () => void;
  onPrev: () => void;
}

export const CreateProjectStep4 = ({ onNext, onPrev }: CreateProjectStep4Props) => {
  return (
    <div style={{ padding: '2rem' }}>
      <StepBar currentStep={3} totalSteps={5} />
      <h2 style={{ marginTop: '2rem' }}>요구사항 및 조건</h2>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>기술 스택</label>
          <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'TypeScript'].map((tech) => (
              <label key={tech} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <input type="checkbox" />
                {tech}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label>경력 요구사항</label>
          <select style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
            <option>신입 가능</option>
            <option>1년 이상</option>
            <option>3년 이상</option>
            <option>5년 이상</option>
          </select>
        </div>
        <div>
          <label>활동 방식</label>
          <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <input type="radio" name="activity" value="online" />
              온라인
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <input type="radio" name="activity" value="offline" />
              오프라인
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <input type="radio" name="activity" value="hybrid" />
              혼합
            </label>
          </div>
        </div>
        <div>
          <label>추가 요구사항</label>
          <textarea
            placeholder="기타 요구사항이나 조건을 입력해주세요"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', height: '80px' }}
          />
        </div>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <Button onClick={onPrev}>이전</Button>
        <Button onClick={onNext}>다음</Button>
      </div>
    </div>
  );
};
