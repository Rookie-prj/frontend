import { useModal } from '../../hooks/useModal';
import ConfirmModal from '../../components/common/confirmModal/confirmModal';
import Header from '../../components/header/header';

const Library = () => {
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  return (
    <div>
      <Header type="library" />
      라이브러리 페이지
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleModalClose}
        message="모집완료로 변경되었습니다"
      />
    </div>
  );
};

export default Library;
