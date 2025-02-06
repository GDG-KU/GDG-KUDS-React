/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';
import { useEffect, useState } from 'react';

type IconSize = 'sm' | 'lg';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  icon?: React.ReactNode | undefined;
  icon_size?: IconSize;
  header: string | React.ReactNode;
  footer: React.ReactNode[];
}

const prefixCls = `${PREFIX_CLS}-modal`;

const Modal = ({
  className,
  isOpen,
  icon,
  icon_size,
  header,
  content,
  children,
  footer,
  ...dialogProps
}: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

  const modalCls = clsx(
    {
      [`${prefixCls}`]: !!isOpen,
      [`${prefixCls}-icon-${icon_size}`]: !!icon,
    },
    className,
  );

  return (
    <>
      {modalVisible && (
        <div
          className={`${prefixCls}-backdrop`}
          css={BackdropStyle}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <div className={modalCls} css={ModalStyle} {...dialogProps}>
            {icon && icon_size === 'sm' && (
              <div className={`${prefixCls}-container-with-icon`}>
                <div className={`${prefixCls}-icon`}>{icon}</div>
                <div className={`${prefixCls}-container`}>
                  <div className={`${prefixCls}-header`}>{header}</div>
                  <div className={`${prefixCls}-content`}>{content}</div>
                  {children && <div className={`${prefixCls}-children`}>{children}</div>}
                  <div className={`${prefixCls}-footer`}>{footer}</div>
                </div>
              </div>
            )}

            {!(icon && icon_size === 'sm') && (
              <div className={`${prefixCls}-container`}>
                {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
                <div className={`${prefixCls}-header`}>{header}</div>
                <div className={`${prefixCls}-content`}>{content}</div>
                {children && <div className={`${prefixCls}-children`}>{children}</div>}
                <div className={`${prefixCls}-footer`}>{footer}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

const lg_iconStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '106px',
  height: '106px',
  borderRadius: '53px',
  backgroundColor: 'var(--yellow-100)',
});

const sm_iconStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '56px',
  height: '56px',
  borderRadius: '8px',
  backgroundColor: 'var(--yellow-100)',
});

const BackdropStyle = css({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

    [`.${prefixCls}-container`]: {
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

  [`&.${prefixCls}-icon-lg`]: {
    [`.${prefixCls}-icon`]: lg_iconStyle,
  },

  [`&.${prefixCls}-icon-sm`]: {
    [`.${prefixCls}-icon`]: sm_iconStyle,
  },
});
