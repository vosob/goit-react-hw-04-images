import React, { useCallback, useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ onClose, imageUrl }) => {
  const handleBackdropClick = useCallback(
    event => {
      if (event.code === 'Escape') onClose();
      if (event.currentTarget === event.target) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleBackdropClick);

    return () => {
      window.removeEventListener('keydown', handleBackdropClick);
    };
  }, [handleBackdropClick]);

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      {imageUrl && (
        <div className={css.Modal}>
          <img src={imageUrl} alt="" />
        </div>
      )}
    </div>
  );
};
export default Modal;
