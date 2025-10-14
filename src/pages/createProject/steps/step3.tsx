import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';

interface CreateProjectStep3Props {
  onNext: () => void;
  onPrev: () => void;
}

export const CreateProjectStep3 = ({ onNext, onPrev }: CreateProjectStep3Props) => {
  return (
    <div style={{ padding: '2rem' }}>
      <StepBar currentStep={2} totalSteps={5} />
      <h2 style={{ marginTop: '2rem' }}>팀 정보 설정</h2>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>모집 인원</label>
          <input
            type="number"
            placeholder="모집할 인원 수"
            min="1"
            max="10"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div>
          <label>필요한 역할</label>
          <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['프론트엔드', '백엔드', '디자이너', '기획자', '데이터분석가'].map((role) => (
              <label key={role} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <input type="checkbox" />
                {role}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label>프로젝트 기간</label>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <input type="date" style={{ padding: '0.5rem' }} />
            <span>~</span>
            <input type="date" style={{ padding: '0.5rem' }} />
          </div>
        </div>
        <div>
          <label>모집 마감일</label>
          <input type="date" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
        </div>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <Button onClick={onPrev}>이전</Button>
        <Button onClick={onNext}>다음</Button>
      </div>
    </div>
  );
};
