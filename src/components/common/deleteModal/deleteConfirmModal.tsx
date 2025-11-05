import React from 'react';
import Modal from '../modal/modal';
import * as S from './deleteConfirmModal.styles';
import { usePreventScroll } from '../../../hooks/usepreventScroll';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
  confirmText?: string;
}

function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  message = '보관함에서 제거할까요?',
  confirmText = '삭제',
}: DeleteConfirmModalProps) {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => onClose());
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref}>
        <Modal.Body>
          <S.DeleteConfirmModalContainer>
            <S.Message>{message}</S.Message>
            <S.ButtonContainer>
              <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              <S.DeleteButton onClick={handleConfirm}>{confirmText}</S.DeleteButton>
            </S.ButtonContainer>
          </S.DeleteConfirmModalContainer>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default DeleteConfirmModal;
