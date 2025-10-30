/** @jsxImportSource @emotion/react */

import Modal from '../common/modal/modal';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { usePreventScroll } from '../../hooks/usepreventScroll';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/button';
import { RedirectModalBody, Text } from './redirectModal.styles';

interface RedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string;
  title?: React.ReactNode;
  buttonText?: string;
}
function RedirectModal({
  isOpen,
  onClose,
  redirectTo,
  title,
  buttonText,
  children,
}: PropsWithChildren<RedirectModalProps>) {
  usePreventScroll(isOpen);
  const navigate = useNavigate();
  const ref = useOutsideClick(() => handleClose());

  const handleClose = () => {
    onClose();
  };

  const handleRedirect = () => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref}>
        <Modal.Body css={RedirectModalBody}>
          <Text>{title}</Text>
          <div style={{ display: 'flex', gap: '6px', width: '100%' }}>
            <Button variant="gray" size="medium" onClick={handleClose}>
              취소
            </Button>
            <Button variant="primary" size="medium" onClick={handleRedirect}>
              {buttonText || '로그인하기'}
            </Button>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default RedirectModal;
