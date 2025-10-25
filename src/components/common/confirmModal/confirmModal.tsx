import React from 'react';
import Modal from '../modal/modal';
import * as S from './confirmModal.styles';
import { usePreventScroll } from '../../../hooks/usepreventScroll';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  confirmText?: string;
}

function ConfirmModal({ isOpen, onClose, message, confirmText = '확인' }: ConfirmModalProps) {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => onClose());
  const handleConfirm = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref}>
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
