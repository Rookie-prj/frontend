/** @jsxImportSource @emotion/react */

import Modal from '../common/modal/modal';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { usePreventScroll } from '../../hooks/usepreventScroll';
import React, { PropsWithChildren } from 'react';
import Button from '../../components/common/button/button';
import fire from '../../assets/img/fire.svg';
import { Description, ModalBody, Text } from './cheerupModal.styles';

interface CheerupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheerUp: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
}
function CheerupModal({
  isOpen,
  onClose,
  title,
  description,
  onCheerUp,
  children,
}: PropsWithChildren<CheerupModalProps>) {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => handleClose());

  const handleClose = () => {
    onClose();
  };

  const handleCheerup = () => {
    onCheerUp();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref}>
        <Modal.Body css={ModalBody}>
          <img src={fire} alt="cheerup" />
          <Text>{title}</Text>
          <Description>{description}</Description>
          <div style={{ display: 'flex', gap: '6px', width: '100%' }}>
            <Button variant="gray" size="medium" onClick={handleClose}>
              취소
            </Button>
            <Button variant="primary" size="medium" onClick={handleCheerup}>
              응원하기
            </Button>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default CheerupModal;
