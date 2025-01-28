/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';
import { forwardRef } from 'react';

type ModalType = 'primary' | 'icon_L';

export interface ModalProps extends React.ButtonHTMLAttributes<HTMLDialogElement> {
  modalType: ModalType;
  onClose: () => void;
  icon?: React.ReactNode;
  header: string;
  footer: React.ReactNode[];
}

const prefixCls = `${PREFIX_CLS}-modal`;

const Modal = forwardRef<HTMLDialogElement, ModalProps>((props, ref) => {
  const { modalType, className, icon, header, content, children, footer, ...dialogProps } = props;

  const modalCls = clsx(
    {
      [`${prefixCls}-${modalType}`]: !!modalType,
      [`${prefixCls}-icon`]: !!icon && modalType === 'primary',
    },
    className,
  );

  return (
    <dialog ref={ref} className={modalCls} css={ModalStyle} {...dialogProps}>
      {icon && modalType === 'primary' && (
        <div className={`${prefixCls}-container-with-icon`}>
          <div className={`${prefixCls}-icon`}>{icon}</div>
          <div className={`${prefixCls}-container`}>
            <div className={`${prefixCls}-header`}>{header}</div>
            <div className={`${prefixCls}-content`}>{content}</div>
            {children ?? <div className={`${prefixCls}-children`}>{children}</div>}
            <div className={`${prefixCls}-footer`}>{footer}</div>
          </div>
        </div>
      )}

      {!(icon && modalType === 'primary') && (
        <div className={`${prefixCls}-container`}>
          {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
          <div className={`${prefixCls}-header`}>{header}</div>
          <div className={`${prefixCls}-content`}>{content}</div>
          {children && <div className={`${prefixCls}-children`}>{children}</div>}
          <div className={`${prefixCls}-footer`}>{footer}</div>
        </div>
      )}
    </dialog>
  );
});

export default Modal;

const icon_LStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '106px',
  height: '106px',
  borderRadius: '53px',
  backgroundColor: 'var(--yellow-100)',
});

const iconStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '56px',
  height: '56px',
  borderRadius: '8px',
  backgroundColor: 'var(--yellow-100)',
});

const ModalStyle = css({
  padding: '24px 32px',
  minWidth: '440px',
  minHeight: '200px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'white',

  border: 'none',
  borderRadius: '32px',

  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.10)',

  [`.${prefixCls}-container`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '14px',
  },

  [`.${prefixCls}-header`]: {
    color: 'var(--primary-900)',
    fontSize: 24,
    fontWeight: '700',
    wordWrap: 'break-word',
    textAlign: 'center',
  },

  [`.${prefixCls}-content`]: {
    color: 'var(--primary-600)',
    fontSize: 16,
    fontWeight: '400',
    wordWrap: 'break-word',
    textAlign: 'center',
    marginBottom: 10,
  },

  [`.${prefixCls}-children`]: {
    marginBottom: 10,
  },

  [`.${prefixCls}-footer`]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },

  [`.${prefixCls}-container-with-icon`]: {
    display: 'flex',
    flexDirection: 'row',
    gap: 26,

    [` .${prefixCls}-container`]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      gap: '14px',

      [`.${prefixCls}-footer`]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        gap: 14,
      },
    },
  },

  [`&.${prefixCls}-icon_L`]: {
    [`.${prefixCls}-icon`]: icon_LStyle,
  },

  [`&.${prefixCls}-primary`]: {
    [`.${prefixCls}-icon`]: iconStyle,
  },
});
