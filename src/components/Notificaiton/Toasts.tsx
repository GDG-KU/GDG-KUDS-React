/** @jsxImportSource @emotion/react */

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import toastSubject, { ToastProps } from './ToastSubject';
import { Toast } from './Toast';
import { css } from '@emotion/react';

type Toasts = {
  id: number;
  toastProps: ToastProps;
};

function Toasts() {
  const [toasts, setToasts] = useState<Toasts[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    const addToast = (toastProps: ToastProps) => {
      const id = Date.now();
      setToasts((prevToasts) => [...prevToasts, { id, toastProps }]);

      // 자동 삭제 (기본 3초)
      if (toastProps.autoDismiss) {
        setTimeout(() => {
          removeToast(id);
        }, toastProps.dismissTime);
      }
    };

    toastSubject.addObserver(addToast);
    return () => toastSubject.removeObserver(addToast);
  }, [removeToast]);

  return createPortal(
    <div css={toastsStyle}>
      {toasts.map(({ id, toastProps: { notificationTitle: title, ...props } }) => (
        <Toast key={id} notificationTitle={title} {...props} onClose={() => removeToast(id)} />
      ))}
    </div>,
    document.body,
  );
}

export default Toasts;

const toastsStyle = css({
  position: 'absolute',
  top: 36,
  right: 36,
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'flex-end',
  gap: 16,
});
