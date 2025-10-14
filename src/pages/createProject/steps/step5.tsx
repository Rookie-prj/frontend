import Button from '../../../components/common/button/button';
import StepBar from '../../../components/createProject/stepBar/stepBar';

interface CreateProjectStep5Props {
  onPrev: () => void;
  onSubmit?: () => void;
}

const CreateProjectStep5 = ({ onPrev, onSubmit }: CreateProjectStep5Props) => {
  return (
    <div style={{ padding: '2rem' }}>
      <StepBar currentStep={4} totalSteps={5} />
      <h2 style={{ marginTop: '2rem' }}>마감일 및 최종 확인</h2>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>모집 마감일</label>
          <input
            type="datetime-local"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            min={new Date().toISOString().slice(0, 16)}
          />
        </div>
        <div>
          <label>프로젝트 시작일</label>
          <input
            type="date"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            min={new Date().toISOString().slice(0, 10)}
          />
        </div>
        <div>
          <label>프로젝트 종료일</label>
          <input
            type="date"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            min={new Date().toISOString().slice(0, 10)}
          />
        </div>
        <div>
          <label>연락처</label>
          <input
            type="text"
            placeholder="연락 가능한 이메일 또는 전화번호"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div>
          <label>추가 안내사항</label>
          <textarea
            placeholder="모집자에게 전달하고 싶은 추가 정보가 있다면 입력해주세요"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', height: '100px' }}
          />
        </div>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <Button onClick={onPrev}>이전</Button>
        <Button onClick={onSubmit || (() => {})}>프로젝트 등록</Button>
      </div>
    </div>
  );
};

export { CreateProjectStep5 };
