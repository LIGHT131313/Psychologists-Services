import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from 'img/icons.svg';
import {
  CloseBtn,
  CloseBtnSvg,
  ModalOverlay,
  ModalBody,
} from './ModalPortal.styled';

const modalRoot = document.getElementById('root');

export const ModalPortal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleCloseESC = e => {
      if (e.code === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleCloseESC);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleCloseESC);
    };
  }, [isOpen, onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalOverlay onClick={handleClose}>
      <div>
        <ModalBody>
          <CloseBtn type="button" onClick={onClose}>
            <CloseBtnSvg>
              <use href={`${sprite}#icon-close`}></use>
            </CloseBtnSvg>
          </CloseBtn>
          {children}
        </ModalBody>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};
