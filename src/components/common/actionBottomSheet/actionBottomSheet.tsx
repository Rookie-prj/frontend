import { useEffect, useState } from 'react';
import {
  ActionBottomSheetContainer,
  ActionBottomSheetContent,
  ActionBottomSheetHandle,
  ActionBottomSheetOverlay,
  ActionItem,
} from './actionBottomSheet.styles';
import { usePreventScroll } from '../../../hooks/usepreventScroll';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface ActionItemConfig {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'destructive';
}

interface ActionBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  actions: ActionItemConfig[];
}

const ActionBottomSheet = ({ isOpen, onClose, actions }: ActionBottomSheetProps) => {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => handleClose());
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <ActionBottomSheetOverlay />
      <ActionBottomSheetContainer ref={ref} $isOpen={isOpen}>
        <ActionBottomSheetContent>
          <ActionBottomSheetHandle />
          {actions.map((action, index) => (
            <ActionItem key={index} $variant={action.variant || 'default'} onClick={action.onClick}>
              <span>{action.label}</span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 14.1667L21.6667 17.5L18.3333 20.8333"
                  stroke="#1E2939"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ActionItem>
          ))}
        </ActionBottomSheetContent>
      </ActionBottomSheetContainer>
    </>
  );
};

export default ActionBottomSheet;
