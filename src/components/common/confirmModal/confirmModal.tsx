import React from 'react';
import Modal from '../modal/modal';
import * as S from './confirmModal.styles';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  confirmText?: string;
}

function ConfirmModal({ isOpen, onClose, message, confirmText = '확인' }: ConfirmModalProps) {
  const handleConfirm = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <S.ConfirmModalContainer>
          <S.Message>{message}</S.Message>
          <S.ButtonContainer>
            <S.ConfirmButton onClick={handleConfirm}>{confirmText}</S.ConfirmButton>
          </S.ButtonContainer>
        </S.ConfirmModalContainer>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmModal;
